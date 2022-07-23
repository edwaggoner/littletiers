// add http server from express
    // import express
import express from 'express';
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

// Read data from db.json (or whatever the database file is)
db.read();


// configure express to serve static files from public directory
app.use(express.static('public'));

// list posts
app.get('/data', function(req, res){
    res.send(db.data.posts);
});

// ----------------------------------------------------
// add post - test using:
//      curl http://localhost:3000/posts/ping/1/false
// ----------------------------------------------------
app.get('/posts/:title/:id/:published', function(req, res){

    const post = {
        'id': parseInt((req.params.id), 10),
        'title': req.params.title,
        'published': req.params.published === 'true',
    }
    db.data.posts.push(post);
    db.write();
    console.log(db.data.posts);
    res.send(db.data.posts);
});

// ----------------------------------------------------
// filter by published state - test using:
//      curl http://localhost:3000/published/true
// ----------------------------------------------------
app.get('/published/:boolean', function(req, res){

    // YOUR CODE
    res.send(db.data.posts.filter((element) => element.published === true));
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
app.listen(3000, function(){
    console.log('Running on port 3000!')
})
