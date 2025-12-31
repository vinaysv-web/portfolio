const axios = require('axios');

class GithubService {
  constructor() {
    this.baseUrl = 'https://api.github.com';
    this.username = 'vinaysv-git'; // GitHub username
    // Specific repositories to fetch
    this.targetRepos = [
      'cycber',
      'emotion-music-player',
      'vehicle-expsnsis-1',
      'lms2'
    ];
  }

  // Fetch specific repositories for the user
  async fetchRepositories() {
    try {
      // Fetch specific repositories
      const promises = this.targetRepos.map(repoName => 
        axios.get(`${this.baseUrl}/repos/${this.username}/${repoName}`)
          .catch(() => null) // Handle missing repos gracefully
      );
      
      const responses = await Promise.all(promises);
      
      // Filter out failed requests and transform data
      const projects = responses
        .filter(response => response && response.data)
        .map(response => response.data)
        .map(repo => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || 'No description available',
          techStack: this.extractTechStack(repo),
          githubLink: repo.html_url,
          image: this.generatePlaceholderImage(repo.name),
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language
        }));
      
      // If we didn't get any of the target repos, fall back to fetching all repos
      if (projects.length === 0) {
        const allReposResponse = await axios.get(`${this.baseUrl}/users/${this.username}/repos`, {
          params: {
            sort: 'updated',
            direction: 'desc'
          }
        });
        
        return allReposResponse.data.slice(0, 4).map(repo => ({
          id: repo.id,
          title: repo.name,
          description: repo.description || 'No description available',
          techStack: this.extractTechStack(repo),
          githubLink: repo.html_url,
          image: this.generatePlaceholderImage(repo.name),
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language
        }));
      }
      
      return projects;
    } catch (error) {
      console.error('Error fetching repositories from GitHub:', error.message);
      throw new Error('Failed to fetch repositories from GitHub');
    }
  }

  // Extract tech stack from repository data
  extractTechStack(repo) {
    const techStack = [];
    
    if (repo.language) {
      techStack.push(repo.language);
    }
    
    // In a more advanced implementation, you could parse package.json or other files
    // to get a more detailed tech stack
    
    return techStack.length > 0 ? techStack : ['JavaScript'];
  }

  // Generate a placeholder image URL based on repository name
  generatePlaceholderImage(repoName) {
    // In a real implementation, you might use screenshots or actual images
    return `/placeholder-image-${repoName}.jpg`;
  }

  // Fetch details for a specific repository
  async fetchRepository(owner, repo) {
    try {
      const response = await axios.get(`${this.baseUrl}/repos/${owner}/${repo}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching repository ${owner}/${repo}:`, error.message);
      throw new Error(`Failed to fetch repository ${owner}/${repo}`);
    }
  }
}

module.exports = new GithubService();