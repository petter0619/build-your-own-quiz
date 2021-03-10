const fs = require('fs');
const path = require("path");

// Returns JSON data from a JSON file
// PARAM: filePath == a string with file path relative to where this utils.js file is, not where the function is called
exports.readJSONFile = (filePath) => {
    return new Promise((resolve, reject) => {
        const _path = path.resolve(__dirname, filePath);
        fs.readFile(  _path, 'utf-8', (err, data) => err ? reject(err) : resolve(JSON.parse(data)));
    });
};
  
// Overwrites a files content with JSON
// PARAM: data == content that is converted to JSON (pref. an object)
// PARAM: filePATH == a string with file path relative to where this utils.js file is
exports.writeJSONtoFile = (filePath, data = {}) => { // rewrites the entire file
    return new Promise((resolve, reject) => {
        const newContent = JSON.stringify(data, null, 2);
        const _path = path.resolve(__dirname, filePath);
        fs.writeFile(_path, newContent, err => err ? reject(err) : resolve());
    });
};

/*
  Catch Errors Handler
  With async/await, you need some way to catch errors
  Instead of using try{} catch(e) {} in each controller, we wrap the function in
  catchErrors(), catch any errors they throw, and pass it along to our express middleware with next()
*/

exports.catchAsyncErrors = (cbFunc) => {
    return async (req, res, next) => {
        try {
            await cbFunc(req, res, next);
        } catch(err) {
            res.render('error', { error: err });
        }
    }    
};