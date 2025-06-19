import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes';
import { errorHandler } from './middlewares/errorHandler';

// set up access to the .env.development file with variables
dotenv.config({ path: `../.env.${process.env.NODE_ENV}` });

const app = express();
// MIDDLEWARES
// configure CORS to accept requests from frontend
app.use(cors());
// server can parse incoming requests (body) from client in JSON form
app.use(express.json());
// Handle URL-encoded data from form submissions. The form data is sent to the server as a URL-encoded string, organized in key-value pairs
// Middleware takes care of parsing the URL-encoded data and storing it in the req.body object
// Setting extended to true instructs the middleware to use a library called "qs" to handle more complex data structures, such as nested objects or arrays, within the form
app.use(express.urlencoded({ extended: true }));
// TODO Serving static files to app. CHECK IF I NEED THIS
// app.use(express.static("public"));

// ---------------------------------------------------------------- //
// POST   /auth/signup             // Register user
// POST   /auth/login              // Login, get token
//
// GET    /files                   // List user files
// POST   /files/upload-url        // Get signed S3 upload URL
// GET    /files/:id/download-url  // Get signed download URL
// DELETE /files/:id               // Delete file

// ---------------------------------------------------------------- //

// Communication Flow Example
// 1.	Frontend requests upload URL via /files/upload-url
// 2.	Backend returns signed S3 URL
// 3.	Frontend uploads file directly to S3
// 4.	Backend records file metadata in DB (filename, owner, date, etc.)
// 5.	For download, frontend requests /files/:id/download-url → gets a time-limited signed URL

app.get('/', (req, res) => {
  res.status(200).send('ok');
});

app.use(router);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
