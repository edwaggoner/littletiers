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

// Initializes the data store to the provided data object (e.g., 'posts')
db.data = { posts: [] };

// Create data items using plain JS
db.data.posts.push({id: 1, title: 'lowdb is excellent', published: true})
db.data.posts.push({id: 2, title: 'great', published: true})

// You can also use this syntax to create items, if you prefer:
// const { posts } = db.data
// // And then post this way:
// posts.push('hello world')

db.write();
// After the write, the lowdb JSON file will reflect the current data in the database (in this case, db.json will be { posts: [] })


// EXERCISES

// Query an item using plain JS
// db.data.posts[0]

// Log the value (i.e., the contents) of the 'post' array to the console
// console.log(db.data);
// console.log(db.data.posts[3]);

// count posts
// ----------------------------
// YOUR CODE

// find all posts ids
// ----------------------------
// YOUR CODE

// all matches of published false
// ----------------------------
// YOUR CODE

// find post with published false
// ----------------------------
// YOUR CODE
