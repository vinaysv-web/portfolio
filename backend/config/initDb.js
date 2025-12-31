const db = require('./db');

// Create contacts table
const createContactsTable = `
  CREATE TABLE IF NOT EXISTS contacts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  )
`;

db.query(createContactsTable, (err, result) => {
  if (err) {
    console.error('Error creating contacts table:', err);
    return;
  }
  console.log('Contacts table created or already exists');
});

// Close the database connection
db.end((err) => {
  if (err) {
    console.error('Error closing database connection:', err);
    return;
  }
  console.log('Database connection closed');
});