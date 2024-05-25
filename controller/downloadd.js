
const path = require('path');

const p = path.join(__dirname, 'public', '../../public', 'excel_document.html')

function DownloadeFile(req, res){
    res.download(path.join(__dirname, 'public', '../../public', 'excel_document.html'), err=>{
        if (err) {
            console.error(err);
        }
    });
    // res.send(`<h2 style='text-align:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);color:#333'>Attached Documents has been successfully downloaded</h2>`)
    
    console.log('File has been downloaded!!');
};

module.exports = DownloadeFile;