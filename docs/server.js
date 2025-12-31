const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the root directory
app.use(express.static(path.join(__dirname)));

// Serve index.html for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Serve different pages based on the route
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'projects.html'));
});

app.get('/education', (req, res) => {
    res.sendFile(path.join(__dirname, 'education.html'));
});

app.get('/certifications', (req, res) => {
    res.sendFile(path.join(__dirname, 'certifications.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact.html'));
});

// Handle 404 for any other routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});