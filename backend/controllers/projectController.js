const Project = require('../models/Project');
const githubService = require('../services/githubService');

// Get all projects
exports.getAllProjects = async (req, res) => {
  try {
    // Try to fetch from GitHub API
    const githubProjects = await githubService.fetchRepositories();
    res.status(200).json(githubProjects);
  } catch (error) {
    console.error('Error fetching from GitHub, falling back to local data:', error.message);
    // Fallback to local data if GitHub API fails
    const projects = Project.getAll();
    res.status(200).json(projects);
  }
};

// Get a specific project by ID
exports.getProjectById = async (req, res) => {
  try {
    const projectId = parseInt(req.params.id);
    
    // In a real implementation, you would fetch the specific repository from GitHub
    // For now, we'll use the local data
    const projects = Project.getAll();
    const project = projects.find(p => p.id === projectId);
    
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    
    res.status(200).json(project);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching project', error: error.message });
  }
};