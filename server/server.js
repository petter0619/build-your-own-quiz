const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var cors = require('cors')
// Routes
const router = require('./routes/api');

// 1.1) Set up our Express app
const app = express();

// Enable CORS
app.use(cors());

// 2) Set up static server for your static assets (CSS, images, client side JS, etc)
app.use('/static', express.static('public') );

// 3.1) Set up body parser middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 3.2) Set up cookieParser middleware to populate req.cookies with any cookies that came along with the request
app.use(cookieParser());

// 5) Routes
app.use('/api', router);

// Error Handling
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});
  
app.use((err, req, res, next) => {
    if (res.headersSent) return next(err);
    const errorDetails = {
      name: err.name,
      status: err.status,
      message: err.message,
    };
    res.status(err.status || 500);
    return res.json(errorDetails);
});

// 1.2) Create server on PORT
app.listen(3001, () => {
    console.log('Application running on localhost:3001');
});