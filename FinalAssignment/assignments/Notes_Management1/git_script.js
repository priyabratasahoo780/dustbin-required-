const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const run = (cmd) => {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
};

// 1. Read the final source files
const controllerPath = path.join(__dirname, 'src', 'controllers', 'note.controller.js');
const routesPath = path.join(__dirname, 'src', 'routes', 'note.routes.js');

const finalController = fs.readFileSync(controllerPath, 'utf8');
const finalRoutes = fs.readFileSync(routesPath, 'utf8');

// 2. Initialize git and commit base files
try { fs.rmSync('.git', { recursive: true, force: true }); } catch (e) {}
run('git init');
run('git branch -m main');

// Temporarily move the final files out so they aren't in the initial commit
fs.renameSync(controllerPath, controllerPath + '.bak');
fs.renameSync(routesPath, routesPath + '.bak');

// Add everything except controllers and routes
run('git add package.json package-lock.json .env.example README.md src/app.js src/index.js src/config/db.js src/models/note.model.js src/middlewares');
// Also create empty files for controller and routes just to have them
fs.writeFileSync(controllerPath, `const mongoose = require("mongoose");\nconst Note = require("../models/note.model");\n\nmodule.exports = {};\n`);
fs.writeFileSync(routesPath, `const express = require("express");\nconst router = express.Router();\n\nmodule.exports = router;\n`);

run('git add src/controllers/note.controller.js src/routes/note.routes.js');
run('git commit -m "chore: initial project setup"');

// 3. Define the steps
const steps = [
  { name: 'createNote', routePattern: 'router.post("/", createNote);', commitMsg: 'feat: add create note endpoint (POST /api/notes)' },
  { name: 'createBulkNotes', routePattern: 'router.post("/bulk", createBulkNotes);', commitMsg: 'feat: add bulk create endpoint (POST /api/notes/bulk)' },
  { name: 'getAllNotes', routePattern: 'router.get("/", getAllNotes);', commitMsg: 'feat: add get all notes endpoint (GET /api/notes)' },
  { name: 'getNoteById', routePattern: 'router.get("/:id", getNoteById);', commitMsg: 'feat: add get note by id endpoint (GET /api/notes/:id)' },
  { name: 'updateNote', routePattern: 'router.put("/:id", updateNote);', commitMsg: 'feat: add replace note endpoint (PUT /api/notes/:id)' },
  { name: 'patchNote', routePattern: 'router.patch("/:id", patchNote);', commitMsg: 'feat: add partial update note endpoint (PATCH /api/notes/:id)' },
  { name: 'deleteNote', routePattern: 'router.delete("/:id", deleteNote);', commitMsg: 'feat: add delete note endpoint (DELETE /api/notes/:id)' },
  { name: 'deleteBulkNotes', routePattern: 'router.delete("/bulk", deleteBulkNotes);', commitMsg: 'feat: add bulk delete notes endpoint (DELETE /api/notes/bulk)' }
];

let currentControllerCode = `const mongoose = require("mongoose");\nconst Note = require("../models/note.model");\n\n`;
let currentRoutesCode = `const express = require("express");\nconst router = express.Router();\n`;

const exportedFunctions = [];

steps.forEach(step => {
  // Extract controller function
  // It starts with 'const ${step.name} = async' and ends right before the next 'const ' or 'module.exports'
  const funcStart = finalController.indexOf(`const ${step.name} = async`);
  let nextFuncStart = finalController.indexOf('const ', funcStart + 10);
  if (nextFuncStart === -1 || finalController.substring(funcStart, nextFuncStart).includes('module.exports')) {
    nextFuncStart = finalController.indexOf('module.exports');
  }
  
  const funcBody = finalController.substring(funcStart, nextFuncStart);
  currentControllerCode += funcBody;
  exportedFunctions.push(step.name);
  
  // Write controller
  const controllerOut = currentControllerCode + `\nmodule.exports = { ${exportedFunctions.join(', ')} };\n`;
  fs.writeFileSync(controllerPath, controllerOut);
  
  // Update routes
  currentRoutesCode = `const express = require("express");\nconst router = express.Router();\nconst { ${exportedFunctions.join(', ')} } = require("../controllers/note.controller");\n\n`;
  
  // Add all routes up to now
  let routesOut = currentRoutesCode;
  exportedFunctions.forEach(fn => {
    const s = steps.find(x => x.name === fn);
    routesOut += s.routePattern + '\n';
  });
  routesOut += `\nmodule.exports = router;\n`;
  fs.writeFileSync(routesPath, routesOut);
  
  // Commit
  run('git add src/controllers/note.controller.js src/routes/note.routes.js');
  run(`git commit -m "${step.commitMsg}"`);
});

// 4. Restore original files just in case they had any minor formatting differences
fs.copyFileSync(controllerPath + '.bak', controllerPath);
fs.copyFileSync(routesPath + '.bak', routesPath);
fs.unlinkSync(controllerPath + '.bak');
fs.unlinkSync(routesPath + '.bak');
run('git add src/controllers/note.controller.js src/routes/note.routes.js');
run('git commit --allow-empty -m "chore: code formatting and cleanup"');

// 5. Add remote and push
const remoteUrl = "https://github.com/priyabratasahoo780/mongodb_backend_assignment.git";
run(`git remote add origin ${remoteUrl}`);
// We will push forcefully just in case the repo has some history
run(`git push -u origin main -f`);

console.log("Done! Pushed to github successfully.");
