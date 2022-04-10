const mongoose = require('mongoose')

const connectdb = (url)=> {
    console.log('connected')
    return mongoose.connect(url)
}

module.exports = connectdb

