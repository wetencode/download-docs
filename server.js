
const express = require('express');
const app = express();
const port = 5000;
const path = require('path');
const sendHTMLL = require('./controller/sendhtml');
const downloadModule = require('./controller/downloadd');

// ======================================================


app.use(express.json());
app.use(express.urlencoded({ extended : false}));
// app.use(co)


app.get('/', (req, res)=>{
    res.send('<b>hello server</b>')
});


app.get('/view_documents', downloadModule);


app.get('/send_html', sendHTMLL);


app.listen(`${port}`, (req,res)=>{
    console.log(`app started @ port ${port}`);
});