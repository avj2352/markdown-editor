const path = require('path');
const express = require('express');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));

app.post("/convert", (req, res)=>{
    console.log(req.body);
    if(typeof req.body.content == 'undefined' || req.body.content == null) {
        res.json(["error", "No data found"]);
    } else {
        res.json(["markdown", req.body.content]);
    }
});


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT,()=>{
    console.log(`Server is listening on ${server.address().port}`);
})