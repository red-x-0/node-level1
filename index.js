require('dotenv').config(); // Load environment variables
const express = require('express');
const path = require('path'); // Import the 'path' module
const app = express();
const port = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;
const { connectDB } = require("./config/db");

//==== live reload =====
const livereload = require("livereload");
const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

const connectLivereload = require("connect-livereload");
app.use(connectLivereload());

liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public')); // Serve static files from 'public' directory

// Connect to MongoDB
connectDB(MONGO_URL);

// Routes
const mainRouter = require('./routes/main');
const customerRouter = require('./routes/customer');

app.use('/', mainRouter);
app.use('/customer', customerRouter);

//== not found ==\\
app.use((req, res) => {
  res.status(404).render("404");
})

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
