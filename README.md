# Node.js Complete Course

A comprehensive Node.js course covering fundamental concepts from basics to advanced topics including Express.js, MongoDB, templating engines, and file uploads.

## Course Structure

This course is organized into 15 progressive modules, each building upon previous concepts.

### Module 1: Introduction to Node.js (`node_1`)
**Topics Covered:**
- Basic Node.js setup
- Running Node.js applications
- Simple console operations

**Files:**
- `server.js` - Basic Node.js application with console output

**Run:**
```bash
cd node_1
npm start
```

---

### Module 2: Modules and Exports (`node_2`)
**Topics Covered:**
- Creating custom modules
- Using `module.exports`
- Requiring modules with `require()`
- Modular code organization

**Files:**
- `index.js` - Main file that imports and uses modules
- `add.js` - Addition module
- `sub.js` - Subtraction module

**Run:**
```bash
cd node_2
npm start
```

---

### Module 3: File System Operations - Part 1 (`node_3`)
**Topics Covered:**
- File System (fs) module
- Synchronous vs Asynchronous operations
- Reading and writing files
- Creating directories recursively
- Appending to files
- Getting file statistics

**Files:**
- `index.js` - Demonstrates various fs operations (commented examples)
- `test.txt` - Sample text file
- `folder-1/` - Nested directory structure

**Key Concepts:**
- `fs.writeFileSync()` / `fs.writeFile()`
- `fs.readFileSync()` / `fs.readFile()`
- `fs.mkdir()` with recursive option
- `fs.appendFileSync()` / `fs.appendFile()`
- `fs.statSync()` / `fs.stat()`

---

### Module 4: File System Operations - Part 2 (`node_4`)
**Topics Covered:**
- Understanding synchronous vs asynchronous execution
- Callback functions
- Event loop behavior
- OS module basics

**Files:**
- `index.js` - Demonstrates sync vs async file reading
- `test.txt` - Sample text file

**Key Concepts:**
- Blocking vs non-blocking operations
- Callback pattern
- Execution order in async operations

---

### Module 5: HTTP Server Basics (`node_5`)
**Topics Covered:**
- Creating HTTP server with Node.js
- Handling HTTP requests
- Routing with switch statements
- Server listening on ports

**Files:**
- `index.js` - Basic HTTP server with routing
- `package.json` - Project configuration

**Run:**
```bash
cd node_5
npm start
# Server runs on http://localhost:7000
```

**Endpoints:**
- `GET /` - Returns "hello"
- `GET /about` - Returns "hi"
- Other routes - Returns "not found"

---

### Module 6: URL Parsing (`node_6`)
**Topics Covered:**
- URL module
- Parsing query parameters
- Pathname extraction
- URL manipulation

**Files:**
- `index.js` - HTTP server with URL parsing
- `package.json` - Includes url dependency

**Run:**
```bash
cd node_6
npm run dev
# Server runs on http://localhost:7000
```

**Key Concepts:**
- `url.parse()` method
- Accessing `query` and `pathname`
- Route handling based on parsed URLs

---

### Module 7: HTTP Headers and Content Types (`node_7`)
**Topics Covered:**
- Setting HTTP response headers
- Content-Type headers
- Serving HTML content
- Response status codes

**Files:**
- `index.js` - HTTP server with proper headers
- `package.json` - Project configuration

**Run:**
```bash
cd node_7
npm run dev
# Server runs on http://localhost:7000
```

**Key Concepts:**
- `res.writeHead()` for setting headers
- `Content-Type: text/html`
- Serving dynamic HTML responses

---

### Module 8: Template Engine (`node_8`)
**Topics Covered:**
- Building a custom template engine
- Template replacement patterns
- Reading and serving HTML templates
- Dynamic content rendering
- Working with JSON data

**Files:**
- `index.js` - Main server file with template rendering
- `data.json` - Product data
- `templates/index.html` - Main template
- `templates/product.html` - Product card template
- `templates/overview.html` - Product overview template
- `modules/productreplace.js` - Product template replacement logic
- `modules/overviewreplace.js` - Overview template replacement logic
- `package.json` - Includes nodemon for development

**Run:**
```bash
cd node_8
npm run dev
# Server runs on http://localhost:7000
```

**Endpoints:**
- `GET /` - Displays all products
- `GET /product?id=1` - Shows product overview

**Key Concepts:**
- Template placeholders (`{%title%}`, `{%price%}`, etc.)
- String replacement with regex
- Dynamic HTML generation
- JSON data parsing and manipulation

---

### Module 9: Express.js Introduction (`node_9`)
**Topics Covered:**
- Introduction to Express.js framework
- Setting up Express application
- Basic routing with Express
- Query parameters handling
- Installing and using npm packages

**Files:**
- `index.js` - Basic Express application
- `package.json` - Includes Express and nodemon

**Run:**
```bash
cd node_9
npm run dev
# Server runs on http://localhost:7000
```

**Endpoints:**
- `GET /` - Returns HTML greeting
- `GET /about?name=value` - Returns name from query parameter

**Key Concepts:**
- Express.js framework
- `app.get()` for route handling
- `req.query` for query parameters
- `res.end()` for responses

---

### Module 10: Express with JSON and Middleware (`node_10`)
**Topics Covered:**
- Express middleware
- JSON parsing with `express.json()`
- Reading and writing JSON files
- RESTful API endpoints (GET, POST)
- Route parameters
- Middleware functions

**Files:**
- `index.js` - Express app with CRUD operations on JSON file
- `data.json` - User data storage
- `package.json` - Includes Express, mongoose, nodemon

**Run:**
```bash
cd node_10
npm start
# Server runs on http://localhost:7000
```

**Endpoints:**
- `GET /` - Home page
- `GET /about` - Get all users (JSON)
- `GET /about/:id` - Get user by ID
- `POST /about` - Create new user

**Key Concepts:**
- `app.use(express.json())` for JSON parsing
- Custom middleware functions
- File-based data storage
- RESTful API design

---

### Module 11: MongoDB with Mongoose (`node_11`)
**Topics Covered:**
- MongoDB database connection
- Mongoose ODM (Object Document Mapper)
- Schema definition
- CRUD operations (Create, Read, Update, Delete)
- Async/await with database operations

**Files:**
- `index.js` - Express app with MongoDB integration
- `package.json` - Includes Express, mongoose, nodemon

**Run:**
```bash
# Make sure MongoDB is running on localhost:27017
cd node_11
npm start
# Server runs on http://localhost:7000
```

**Endpoints:**
- `GET /` - Home page
- `GET /about` - Get all users from MongoDB
- `GET /about/:id` - Get user by ID (from JSON file)
- `POST /about` - Create new user in MongoDB
- `PATCH /about/:id` - Update user in MongoDB
- `DELETE /about/:id` - Delete user from MongoDB

**Key Concepts:**
- Mongoose schema and models
- `mongoose.connect()` for database connection
- `Model.find()`, `Model.create()`, `Model.findByIdAndUpdate()`, `Model.findByIdAndDelete()`
- Async/await pattern
- MongoDB connection strings

---

### Module 12: MVC Architecture (`node_12`)
**Topics Covered:**
- Model-View-Controller (MVC) pattern
- Code organization and separation of concerns
- Route handlers
- Controller functions
- Model definitions

**Files:**
- `index.js` - Main application file
- `routes/userroutes.js` - Route definitions
- `controller/usercontroller.js` - Controller logic
- `model/usermodel.js` - Mongoose model
- `package.json` - Project dependencies

**Run:**
```bash
# Make sure MongoDB is running on localhost:27017
cd node_12
npm start
# Server runs on http://localhost:7000
```

**Endpoints:**
- `GET /about` - Get all users
- `POST /about` - Create new user
- `PATCH /about/:id` - Update user
- `DELETE /about/:id` - Delete user

**Key Concepts:**
- MVC architecture pattern
- Route organization
- Controller separation
- Model definitions
- Code modularity

---

### Module 13: EJS Templating Engine (`node_13`)
**Topics Covered:**
- EJS (Embedded JavaScript) templating
- Server-side rendering
- Passing data to views
- View engine configuration
- Rendering dynamic HTML

**Files:**
- `app.js` - Express app with EJS configuration
- `model/usermodel.js` - User model
- `views/index.ejs` - EJS template
- `package.json` - Includes ejs, express, mongoose

**Run:**
```bash
# Make sure MongoDB is running on localhost:27017
cd node_13
npm start
# Server runs on http://localhost:7000
```

**Endpoints:**
- `GET /` - Renders index.ejs with user data

**Key Concepts:**
- `app.set('view engine', 'ejs')`
- `app.set('views', path)`
- `res.render()` for rendering templates
- EJS syntax (`<%= %>`, `<% %>`)
- Server-side rendering

---

### Module 14: Full CRUD Application (`node_14`)
**Topics Covered:**
- Complete CRUD application
- Employee management system
- EJS templates with partials
- Static file serving
- Method override for PUT/DELETE
- Search functionality
- Form handling

**Files:**
- `index.js` - Main application file
- `Router/emproute.js` - Employee routes
- `Controllers/empcontroller.js` - Employee controller
- `Model/empmodel.js` - Employee model
- `views/index.ejs` - Employee list view
- `views/addemploye.ejs` - Add employee form
- `views/updateemp.ejs` - Update employee form
- `views/search.ejs` - Search view
- `views/partials/header.ejs` - Header partial
- `views/partials/footer.ejs` - Footer partial
- `static/styles.css` - CSS styles
- `static/test.html` - Static HTML file
- `package.json` - Includes body-parser, method-override, ejs

**Run:**
```bash
# Make sure MongoDB is running on localhost:27017
cd node_14
npm start
# Server runs on http://localhost:3000
```

**Endpoints:**
- `GET /` - Display all employees
- `GET /new` - Show add employee form
- `POST /new` - Create new employee
- `GET /edit/:id` - Show update employee form
- `PUT /edit/:id` - Update employee
- `DELETE /delete/:id` - Delete employee
- `GET /search` - Show search page
- `GET /emp/search?q=query` - Search employees

**Key Concepts:**
- Full CRUD operations
- EJS partials for reusable components
- Static file serving with `express.static()`
- Method override for HTML forms
- Body parser for form data
- MongoDB queries with regex
- MVC pattern implementation

---

### Module 15: File Upload with Multer (`node_15`)
**Topics Covered:**
- File upload handling
- Multer middleware
- Single and multiple file uploads
- File storage configuration
- File type validation
- Image management system

**Files:**
- `index.js` - Express app with file upload functionality
- `views/index.ejs` - Display uploaded images
- `views/upload.ejs` - Single file upload form
- `views/uploadmul.ejs` - Multiple file upload form
- `static/style.css` - Styles
- `static/upload/images/` - Upload directory
- `package.json` - Includes multer, mongoose, ejs

**Run:**
```bash
# Make sure MongoDB is running on localhost:27017
cd node_15
npm start
# Server runs on http://localhost:3000
```

**Endpoints:**
- `GET /` - Display all uploaded images
- `GET /upload` - Show single file upload form
- `POST /upload` - Upload single image
- `GET /upload/multiple` - Show multiple file upload form
- `POST /upload/multiple` - Upload multiple images
- `DELETE /delete/:id` - Delete image

**Key Concepts:**
- Multer configuration
- Disk storage with `multer.diskStorage()`
- File filtering
- Single file upload (`upload.single()`)
- Multiple file upload (`upload.array()`)
- File path management
- Duplicate file checking
- Image storage in MongoDB

---

## Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node Package Manager)
- MongoDB (for modules 11-15)
  - Install MongoDB locally or use MongoDB Atlas
  - Default connection: `mongodb://localhost:27017`

## Installation

1. Clone or download this repository
2. Navigate to any module directory:
   ```bash
   cd node_X
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running the Modules

Each module can be run independently. Check the individual module sections above for specific run commands.

**General pattern:**
```bash
cd node_X
npm start
# or
npm run dev  # if nodemon is configured
```

## Technologies Covered

- **Core Node.js**: File System, HTTP, URL, OS modules
- **Express.js**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **EJS**: Embedded JavaScript templating engine
- **Multer**: File upload middleware
- **Nodemon**: Development tool for auto-restarting server

## Course Progression

1. **Basics** (Modules 1-4): Node.js fundamentals, modules, file system
2. **HTTP & Web** (Modules 5-8): HTTP servers, routing, templates
3. **Express.js** (Modules 9-10): Express framework, middleware, APIs
4. **Database** (Modules 11-12): MongoDB, Mongoose, MVC architecture
5. **Templating** (Module 13): EJS templating engine
6. **Full Stack** (Modules 14-15): Complete applications with CRUD and file uploads

## Notes

- Each module is self-contained and can be studied independently
- Some modules require MongoDB to be running
- Port numbers vary: 7000 (modules 5-12), 3000 (modules 14-15)
- Development mode uses nodemon for automatic server restarts
- Data files (JSON) are used in some modules before introducing databases

## License

ISC

## Author

Node.js Complete Course
