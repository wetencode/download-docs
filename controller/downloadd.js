
const path = require('path');


function DownloadeFile(req, res){
    res.download(path.join(__dirname, 'public', '../../public', 'index.html'), err=>{
        console.error(err)
    })
    console.log('File has been downloaded!!')
};


module.exports = DownloadeFile;


// function sendHTML(req,res){
//     res.sendFile(path.join(__dirname, 'public', '../../public', 'index.html'))
// };