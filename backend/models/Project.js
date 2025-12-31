class Project {
  constructor(id, title, description, techStack, githubLink, image) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.techStack = techStack;
    this.githubLink = githubLink;
    this.image = image;
  }

  // In a real implementation, these methods would interact with the database
  static getAll() {
    // This would normally fetch from the database
    return [
      new Project(
        1,
        "E-commerce Website",
        "A full-stack e-commerce platform with payment integration",
        ["React", "Node.js", "MongoDB"],
        "https://github.com/vinaysv-git/ecommerce-project",
        "/placeholder-image.jpg"
      ),
      new Project(
        2,
        "Task Management App",
        "A productivity application for managing daily tasks",
        ["React", "Firebase"],
        "https://github.com/vinaysv-git/task-manager",
        "/placeholder-image.jpg"
      ),
      new Project(
        3,
        "Weather Dashboard",
        "Real-time weather information dashboard",
        ["JavaScript", "CSS", "API Integration"],
        "https://github.com/vinaysv-git/weather-dashboard",
        "/placeholder-image.jpg"
      )
    ];
  }
}

module.exports = Project;