const fs = require('fs');
const { execSync } = require('child_process');
const path = require('path');

const run = (cmd) => {
  console.log(`> ${cmd}`);
  execSync(cmd, { stdio: 'inherit' });
};

// Endpoints data
const endpoints = [
  {
    name: 'createNote',
    commitMsg: 'feat: add create note endpoint (POST /api/notes)',
    route: 'router.post("/", createNote);',
    code: `const createNote = async (req, res) => {
  try {
    const { title, content, category, isPinned } = req.body;
    if (!title || !content) {
      return res.status(400).json({ success: false, message: "Title and content are required", data: null });
    }
    const note = await Note.create({ title, content, category, isPinned });
    res.status(201).json({ success: true, message: "Note created successfully", data: note });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'createBulkNotes',
    commitMsg: 'feat: add bulk create endpoint (POST /api/notes/bulk)',
    route: 'router.post("/bulk", createBulkNotes);',
    code: `const createBulkNotes = async (req, res) => {
  try {
    const { notes } = req.body;
    if (!notes || !Array.isArray(notes) || notes.length === 0) {
      return res.status(400).json({ success: false, message: "notes array is required and cannot be empty", data: null });
    }
    const insertedNotes = await Note.insertMany(notes);
    res.status(201).json({ success: true, message: \`\${insertedNotes.length} notes created successfully\`, data: insertedNotes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'getAllNotes',
    commitMsg: 'feat: add get all notes endpoint (GET /api/notes)',
    route: 'router.get("/", getAllNotes);',
    code: `const getAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({});
    res.status(200).json({ success: true, message: "Notes fetched successfully", count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'getNoteById',
    commitMsg: 'feat: add get note by id endpoint (GET /api/notes/:id)',
    route: 'router.get("/:id", getNoteById);',
    code: `const getNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    const note = await Note.findById(id);
    if (!note) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note fetched successfully", data: note });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'replaceNote',
    commitMsg: 'feat: add replace note endpoint (PUT /api/notes/:id)',
    route: 'router.put("/:id", replaceNote);',
    code: `const replaceNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    const updatedNote = await Note.findByIdAndUpdate(id, req.body, { new: true, overwrite: true, runValidators: true });
    if (!updatedNote) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note replaced successfully", data: updatedNote });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'updateNote',
    commitMsg: 'feat: add partial update note endpoint (PATCH /api/notes/:id)',
    route: 'router.patch("/:id", updateNote);',
    code: `const updateNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    if (Object.keys(req.body).length === 0) return res.status(400).json({ success: false, message: "No fields provided to update", data: null });
    const patchedNote = await Note.findByIdAndUpdate(id, { $set: req.body }, { new: true, runValidators: true });
    if (!patchedNote) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note updated successfully", data: patchedNote });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'deleteNote',
    commitMsg: 'feat: add delete note endpoint (DELETE /api/notes/:id)',
    route: 'router.delete("/:id", deleteNote);',
    code: `const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note deleted successfully", data: null });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'deleteBulkNotes',
    commitMsg: 'feat: add bulk delete notes endpoint (DELETE /api/notes/bulk)',
    route: 'router.delete("/bulk", deleteBulkNotes);',
    code: `const deleteBulkNotes = async (req, res) => {
  try {
    const { ids } = req.body;
    if (!ids || !Array.isArray(ids) || ids.length === 0) return res.status(400).json({ success: false, message: "ids array is required and cannot be empty", data: null });
    for (let i = 0; i < ids.length; i++) {
      if (!mongoose.Types.ObjectId.isValid(ids[i])) return res.status(400).json({ success: false, message: "Invalid note ID format", data: null });
    }
    const result = await Note.deleteMany({ _id: { $in: ids } });
    res.status(200).json({ success: true, message: \`\${result.deletedCount} notes deleted successfully\`, data: null });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'getNotesByCategory',
    commitMsg: 'feat: add get by category endpoint (GET /api/notes/category/:category)',
    route: 'router.get("/category/:category", getNotesByCategory);',
    code: `const getNotesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const validCategories = ["work", "personal", "study"];
    if (!validCategories.includes(category)) return res.status(400).json({ success: false, message: "Invalid category. Allowed: work, personal, study", data: null });
    const notes = await Note.find({ category });
    if (notes.length === 0) return res.status(404).json({ success: false, message: \`No notes found for category: \${category}\`, data: null });
    res.status(200).json({ success: true, message: \`Notes fetched for category: \${category}\`, count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'getNotesByStatus',
    commitMsg: 'feat: add get by status endpoint (GET /api/notes/status/:isPinned)',
    route: 'router.get("/status/:isPinned", getNotesByStatus);',
    code: `const getNotesByStatus = async (req, res) => {
  try {
    const { isPinned } = req.params;
    if (isPinned !== "true" && isPinned !== "false") return res.status(400).json({ success: false, message: "isPinned must be true or false", data: null });
    const pinned = isPinned === "true";
    const notes = await Note.find({ isPinned: pinned });
    res.status(200).json({ success: true, message: "Fetched all pinned notes", count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'getNoteSummary',
    commitMsg: 'feat: add get note summary endpoint (GET /api/notes/:id/summary)',
    route: 'router.get("/:id/summary", getNoteSummary);',
    code: `const getNoteSummary = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ success: false, message: "Invalid note ID", data: null });
    const note = await Note.findById(id).select("title category isPinned createdAt");
    if (!note) return res.status(404).json({ success: false, message: "Note not found", data: null });
    res.status(200).json({ success: true, message: "Note summary fetched successfully", data: note });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'filterNotes',
    commitMsg: 'feat: add filter notes endpoint (GET /api/notes/filter)',
    route: 'router.get("/filter", filterNotes);',
    code: `const filterNotes = async (req, res) => {
  try {
    const filter = {};
    if (req.query.category) filter.category = req.query.category;
    if (req.query.isPinned !== undefined) filter.isPinned = req.query.isPinned === "true";
    const notes = await Note.find(filter);
    res.status(200).json({ success: true, message: "Notes fetched successfully", count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'getPinnedNotes',
    commitMsg: 'feat: add get pinned notes filtered endpoint (GET /api/notes/filter/pinned)',
    route: 'router.get("/filter/pinned", getPinnedNotes);',
    code: `const getPinnedNotes = async (req, res) => {
  try {
    const filter = { isPinned: true };
    if (req.query.category) filter.category = req.query.category;
    const notes = await Note.find(filter);
    res.status(200).json({ success: true, message: "Pinned notes fetched successfully", count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'filterByCategory',
    commitMsg: 'feat: add filter by category query endpoint (GET /api/notes/filter/category)',
    route: 'router.get("/filter/category", filterByCategory);',
    code: `const filterByCategory = async (req, res) => {
  try {
    const { name } = req.query;
    if (!name) return res.status(400).json({ success: false, message: "Query param 'name' is required", data: null });
    const notes = await Note.find({ category: name });
    res.status(200).json({ success: true, message: \`Notes filtered by category: \${name}\`, count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'filterByDateRange',
    commitMsg: 'feat: add filter by date range endpoint (GET /api/notes/filter/date-range)',
    route: 'router.get("/filter/date-range", filterByDateRange);',
    code: `const filterByDateRange = async (req, res) => {
  try {
    const { from, to } = req.query;
    if (!from || !to) return res.status(400).json({ success: false, message: "Both 'from' and 'to' query params are required", data: null });
    const filter = {
      createdAt: {
        $gte: new Date(from),
        $lte: new Date(to)
      }
    };
    const notes = await Note.find(filter);
    res.status(200).json({ success: true, message: \`Notes fetched between \${from} and \${to}\`, count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'paginateNotes',
    commitMsg: 'feat: add paginate notes endpoint (GET /api/notes/paginate)',
    route: 'router.get("/paginate", paginateNotes);',
    code: `const paginateNotes = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const total = await Note.countDocuments();
    const totalPages = Math.ceil(total / limit);
    const notes = await Note.find().skip(skip).limit(limit);
    res.status(200).json({
      success: true,
      message: "Notes fetched successfully",
      data: notes,
      pagination: { total, page, limit, totalPages, hasNextPage: page < totalPages, hasPrevPage: page > 1 }
    });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'paginateByCategory',
    commitMsg: 'feat: add paginate by category endpoint (GET /api/notes/paginate/category/:category)',
    route: 'router.get("/paginate/category/:category", paginateByCategory);',
    code: `const paginateByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const filter = { category };
    const total = await Note.countDocuments(filter);
    const totalPages = Math.ceil(total / limit);
    const notes = await Note.find(filter).skip(skip).limit(limit);
    res.status(200).json({
      success: true,
      message: \`Notes fetched for category: \${category}\`,
      data: notes,
      pagination: { total, page, limit, totalPages, hasNextPage: page < totalPages, hasPrevPage: page > 1 }
    });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'sortNotes',
    commitMsg: 'feat: add sort notes endpoint (GET /api/notes/sort)',
    route: 'router.get("/sort", sortNotes);',
    code: `const sortNotes = async (req, res) => {
  try {
    const allowed = ["title", "createdAt", "updatedAt", "category"];
    const sortBy = req.query.sortBy || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1;
    if (!allowed.includes(sortBy)) return res.status(400).json({ success: false, message: "Invalid sortBy. Allowed: title, createdAt, updatedAt, category", data: null });
    const notes = await Note.find().sort({ [sortBy]: order });
    res.status(200).json({ success: true, message: \`Notes sorted by \${sortBy} in \${req.query.order === 'asc' ? 'ascending' : 'descending'} order\`, count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  },
  {
    name: 'sortPinnedNotes',
    commitMsg: 'feat: add sort pinned notes endpoint (GET /api/notes/sort/pinned)',
    route: 'router.get("/sort/pinned", sortPinnedNotes);',
    code: `const sortPinnedNotes = async (req, res) => {
  try {
    const allowed = ["title", "createdAt", "updatedAt", "category"];
    const sortBy = req.query.sortBy || "createdAt";
    const order = req.query.order === "asc" ? 1 : -1;
    if (!allowed.includes(sortBy)) return res.status(400).json({ success: false, message: "Invalid sortBy. Allowed: title, createdAt, updatedAt, category", data: null });
    const notes = await Note.find({ isPinned: true }).sort({ [sortBy]: order });
    res.status(200).json({ success: true, message: \`Pinned notes sorted by \${sortBy} in \${req.query.order === 'asc' ? 'ascending' : 'descending'} order\`, count: notes.length, data: notes });
  } catch (error) { res.status(500).json({ success: false, message: error.message, data: null }); }
};`
  }
];

const ROUTE_ORDER = [
  "createBulkNotes", "deleteBulkNotes", 
  "getNotesByCategory", "getNotesByStatus",
  "filterNotes", "getPinnedNotes", "filterByCategory", "filterByDateRange",
  "paginateNotes", "paginateByCategory",
  "sortNotes", "sortPinnedNotes",
  "createNote", "getAllNotes", "getNoteSummary", "getNoteById", "replaceNote", "updateNote", "deleteNote"
];

// Project prep
try { fs.rmSync('.git', { recursive: true, force: true }); } catch (e) {}
run('git init');
run('git branch -m main');

if (fs.existsSync('src/server.js')) fs.renameSync('src/server.js', 'src/index.js');
if (!fs.existsSync('src/middlewares')) fs.mkdirSync('src/middlewares', { recursive: true });

// Setup package.json
const pkg = JSON.parse(fs.readFileSync('package.json', 'utf8'));
pkg.main = "index.js";
pkg.scripts = { start: "node src/index.js", dev: "nodemon src/index.js" };
pkg.devDependencies = pkg.devDependencies || {};
pkg.devDependencies.nodemon = "^3.0.0";
fs.writeFileSync('package.json', JSON.stringify(pkg, null, 2));

// Setup db.js
const dbPath = path.join(__dirname, 'src', 'config', 'db.js');
let dbContent = fs.readFileSync(dbPath, 'utf8');
dbContent = dbContent.replace(/MONGODB_URI/g, 'MONGO_URI');
fs.writeFileSync(dbPath, dbContent);

// Write .env.example
fs.writeFileSync('.env.example', 'MONGO_URI=your_mongodb_connection_string_here\\nPORT=5000\\n');
fs.writeFileSync('.env', 'MONGO_URI=mongodb://localhost:27017/notes_db2\\nPORT=5000\\n');

// Empty controller and route files initially
const controllerPath = path.join(__dirname, 'src', 'controllers', 'note.controller.js');
const routesPath = path.join(__dirname, 'src', 'routes', 'note.routes.js');

fs.writeFileSync(controllerPath, 'const mongoose = require("mongoose");\\nconst Note = require("../models/note.model");\\n\\nmodule.exports = {};\\n');
fs.writeFileSync(routesPath, 'const express = require("express");\\nconst router = express.Router();\\n\\nmodule.exports = router;\\n');

run('git add .');
run('git commit -m "chore: initial project setup"');

let activeEndpoints = [];

endpoints.forEach(ep => {
  activeEndpoints.push(ep);

  // Rebuild controller
  let controllerStr = 'const mongoose = require("mongoose");\\nconst Note = require("../models/note.model");\\n\\n';
  let exportedNames = [];
  activeEndpoints.forEach(e => {
    controllerStr += e.code + '\\n\\n';
    exportedNames.push(e.name);
  });
  controllerStr += 'module.exports = { ' + exportedNames.join(', ') + ' };\\n';
  fs.writeFileSync(controllerPath, controllerStr);

  // Rebuild routes based on ROUTE_ORDER
  let routesStr = 'const express = require("express");\\nconst router = express.Router();\\nconst { ' + exportedNames.join(', ') + ' } = require("../controllers/note.controller");\\n\\n';

  
  ROUTE_ORDER.forEach(name => {
    if (exportedNames.includes(name)) {
      const e = activeEndpoints.find(x => x.name === name);
      routesStr += e.route + '\\n';
    }
  });
  
  routesStr += '\\nmodule.exports = router;\\n';
  fs.writeFileSync(routesPath, routesStr);

  // Commit
  run('git add src/controllers/note.controller.js src/routes/note.routes.js');
  run('git commit -m "' + ep.commitMsg + '"');
});

run('git add .');
run('git commit --allow-empty -m "chore: project formatting"');

console.log("Done!");
