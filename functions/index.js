const functions = require("firebase-functions");
const express = require('express');

// Start the webapp
const webApp = express();

// Webapp settings
webApp.use(express.urlencoded({
    extended: true
}));
webApp.use(express.json());

// Home route
webApp.get('/', (req, res) => {
    res.send(`Hello World.!`);
});

exports.webApp = functions.https.onRequest(webApp);
