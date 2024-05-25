
const express = require('express');
const app = express();
const port = 6001;
const path = require('path');
const sendHTMLL = require('./controller/sendhtml');
const downloadModule = require('./controller/downloadd');
const downloadnow = require('./controller/downloadnow');

// ======================================================


app.use(express.json());
app.use(express.urlencoded({ extended : false}));
// app.use(co)


app.get('/', (req, res)=>{
    res.send('<b style=>hello server</b>')
});




app.get('/attached_document_doc', downloadModule);


app.get('/view_attached_document_doc', sendHTMLL);

app.get('/excel_document_xlsx', downloadnow);


app.listen(`${port}`, (req,res)=>{
    console.log(`app started @ port ${port}`);
}); 