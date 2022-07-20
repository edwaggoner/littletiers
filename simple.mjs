// var low     = require('lowdb');
// var fs      = require('lowdb/adapters/FileSync');
// var adapter = new fs('db.json');
// var db      = low(adapter);

import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')
console.log(file);
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Read data from JSON file, this will set db.data content
await db.read()

// If file.json doesn't exist, db.data will be null
// Set default data
db.data ||= { posts: [] }


// Create items using plain JS
db.data.posts.push({id: 1, title: 'lowdb is excellent', published: true})
db.data.posts.push({id: 2, title: 'great', published: true})
db.data.posts.push({id: 3, title: 'new own', published: false})
db.data.posts.push({id: 4, title: 'random', published: false})

// You can also use this syntax to create items, if you prefer:
// const { posts } = db.data
// // And then post this way:
// posts.push('hello world')


// Write db.data content to db.json
db.write()

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
