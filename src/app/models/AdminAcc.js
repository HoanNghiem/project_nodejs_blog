const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const AdminAcc = new Schema({
    username: {type: String},
    password: {type: String} 
});

module.exports = mongoose.model('AdminAcc', AdminAcc);




