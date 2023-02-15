// SQlite3 CRUD operations
// npm install sqlite3
//Create a Book.sqlite file in Database folder
// Run this file with node CRUDBookSQLite.js
// Test with Postamn

const express = require('express');
const sqlite3 = require('sqlite3');
const app = express();

// connect to database
const db = new sqlite3.Database('./Database/Book.sqlite');

// pares incoming requests
app.use(express.json());

// create books table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS books(
    id INTEGER PRIMARY KEY,
    title TEXT.
    author TEXT
)`);

// route to get all books
app.run(``)