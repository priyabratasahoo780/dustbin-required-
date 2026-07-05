const jwt = require("jsonwebtoken")

function auth(){

  try{
    const token = req.headers.authorization;
    if(!token){
      return res.status(401).json({message:"Unauthorized"})
    }
  }
}

module.exports = auth