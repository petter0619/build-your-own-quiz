const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var cors = require('cors')
// Other
const errorHandlers = require('./errorHandlers');
const utils = require('./utils');
// Routes
const mainRoutes = require('./routes');
const apiRoutes = require('./routes/api');

// 1.1) Set up our Express app
const app = express();

// IF (application === API) { enableCORS(options) }
    /*
    // Enable all CORS requests
        app.use(cors());
    // Enable CORS for a single route example:
        app.get('/api/path', cors(), function (req, res, next) {
            res.json({msg: 'This is CORS-enabled for a Single Route'})
        });
    // Enable CORS from single domain
        const corsOptions = {
            origin: 'http://example.com',
            optionsSuccessStatus: 200 //some legacy browsers (IE11, various SmartTVs) choke on 204
        }
        app.use(cors(corsOptions));
    // See more config options at: https://expressjs.com/en/resources/middleware/cors.html
    */


// 2) Set up static server for your static assets (CSS, images, client side JS, etc)
app.use('/static', express.static('public') );

// 3.1) Set up body parser middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// 3.2) Set up cookieParser middleware to populate req.cookies with any cookies that came along with the request
app.use(cookieParser());


// [OPTIONAL] res.locals = Variables available inside all your templates.
app.use( (req, res, next) => {
    res.locals.explanation = 'This variable is available in all templates...';
    res.locals.currentPath = req.path;
    res.locals.siteName = 'Express Starter Template';
    res.locals.utils = utils;
    next();
});

// 5) Routes
app.use('/', mainRoutes);
app.use('/api', apiRoutes);

// Add Error Handling

// 1.2) Create server on PORT
app.listen(3001, () => {
    console.log('Application running on localhost:3000');
});