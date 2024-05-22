
const path = require('path');

function sendHTML(req,res){
    res.sendFile(path.join(__dirname, 'public', '../../public', 'index.html'))
};



module.exports = sendHTML;