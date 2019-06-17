const path = require('path');
const express = require('express');

const app = express();

app.use('/', express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 5000;

const server = app.listen(PORT,()=>{
    console.log(`Server is listening on ${server}`);
})