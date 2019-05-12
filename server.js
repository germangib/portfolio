var express = require("express");
var path = require("path");


// db models
//var db = require("./models"); 
// application port (http://localhost:PORT)
var PORT = process.env.PORT || 4000;

//initialize express
const app = express();


//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make a public a static folder
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------------
// ROUTES
// ------------------------------

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
       app.use(express.static("client/build"));
}
  
// Start the server
app.listen(PORT, function(){
    console.log("Google Books app running on port: " + PORT + "!");
}); 


