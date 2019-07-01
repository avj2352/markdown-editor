const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
/**
 * Import converter library
 */
const converter = require('./lib/showdown-converter');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

//middleware to parse request json objects
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({extended: false}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.get('/', function(req, res){
    res.send('Hello World!');
});
 
app.post('/login', function(req, res) {
    res.send("Authenticated");
  },
);

app.post("/convert", (req, res)=>{
    // console.log('Parsing', req.body);
    if(typeof req.body.content == 'undefined' || req.body.content == null) {
        res.json(["error", "No data found"]);
    } else {
        const text = req.body.content;
        const html = converter.makeHtml(text);
        res.json({
            markdown: html
        });
    }
});


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT,()=>{
    console.log(`Server is listening on ${server.address().port}`);
})