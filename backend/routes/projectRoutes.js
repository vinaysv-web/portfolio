const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');

// GET /api/projects - Get all projects
router.get('/', projectController.getAllProjects);

// GET /api/projects/:id - Get a specific project by ID
router.get('/:id', projectController.getProjectById);

module.exports = router;