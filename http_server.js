// add http server from express
    // import express
const express = require('express');
    // create instance of express
const app = express();

// Import Node core modules that we use here
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
// Import lowdb (in this case, the Sync[hronous] version)
import { LowSync, JSONFileSync } from 'lowdb'

// Determine what directory the app is running in, so that we can create the db that we're going to use in that directory
    // Obtain url for file that's running
const url = import.meta.url;
    // Convert url to local path
const path = fileURLToPath(url);
    // Get parent directory path
const __dirname = dirname(path);
    // Append to parent directory path the name of the file we'll use as our db file
const file = join(__dirname, 'db.json');

// Lowdb's adaptor for reading and writing JSON file that will serve as db file
const adapter = new JSONFileSync(file);
// Provides lowdb's API (Application Programming Interface) - i.e., what things lowdb can do in programs
// *LowSync*[hronous] means that every API is automatically awaited for you, forcing the code to run synchronously
const db = new LowSync(adapter);

// Initializes the data store to the provided data object (e.g., 'posts')
db.data = { posts: [] };
// After the write, the lowdb JSON file will reflect the current data in the database (in this case, db.json will be { posts: [] })
db.write();


// configure express to serve static files from public directory
// ------------------------------------------------------------------
// YOUR CODE



// list posts
app.get('/data', function(req, res){
    res.send(db.get('posts').value());
});

// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/posts/ping/1/false
// ----------------------------------------------------
app.get('/posts/ /:id/:published', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3000/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// update published value - test using:
//      curl http://localhost:3000/published/1/true
// ----------------------------------------------------
app.get('/published/:id/:boolean', function(req, res){

    // YOUR CODE

});

// ----------------------------------------------------
// delete entry by id - test using:
//      curl http://localhost:3000/delete/5
// ----------------------------------------------------
app.get('/delete/:id/', function(req, res){

    // YOUR CODE

});

// start server
// -----------------------
// YOUR CODE
app.listen(3000, function(){
    console.log('Running on port 3000!')
})
