
const express = require('express');
const app = express();
const port = 6001;
const path = require('path');
const sendHTMLL = require('./controller/sendhtml');
const downloadModule = require('./controller/downloadnow');
// const downloadnow = require('./controller/downloadnow');
const exeldownload = require('./controller/downloadd');
const downloadthree = require('./controller/threedownload');

// ======================================================


app.use(express.json());
app.use(express.urlencoded({ extended : false}));


app.get('/', (req, res)=>{
    res.send('<b style=>hello server</b>')
});


app.get('/attached_document_doc', downloadModule);


app.get('/view_attached_document_doc', sendHTMLL);


app.get('/excel_document_xlsx', exeldownload);


app.get('/download_excel_document', downloadthree)


app.listen(`${port}`, (req,res)=>{
    console.log(`app started @ port ${port}`);
});