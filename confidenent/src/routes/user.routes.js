const express = require('express');

const { registerUser } = require('../controllers/user.controller');

const Regerster = express.Router();

Regerster.post('/register', registerUser);