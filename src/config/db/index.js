const mongoose = require('mongoose')

async function connect(){

    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/k_blog_education');
        console.log('connect successfully')
    } catch(error){
        console.log('connect failue')
    }

}

module.exports = {connect};