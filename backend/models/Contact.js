const db = require('../config/db');

class Contact {
  constructor(name, email, message) {
    this.name = name;
    this.email = email;
    this.message = message;
  }

  // Save contact message to database
  save(callback) {
    const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
    db.query(sql, [this.name, this.email, this.message], (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result);
    });
  }

  // Get all contact messages (for admin purposes)
  static getAll(callback) {
    const sql = 'SELECT * FROM contacts ORDER BY created_at DESC';
    db.query(sql, (err, results) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, results);
    });
  }
}

module.exports = Contact;