const express = require('express')
app = express()
const tasks = require('./routes/tasks.js')
const connectdb = require('./db/connect')
const dotenv = require('dotenv')
const notFound = require('./middlewares/NotFound.js')
const errorhandler = require('./middlewares/errorHandler.js')
dotenv.config()

const port = process.env.port || 3000


//middleware
app.use(express.json())

//routes middleware
app.use('/api/v1/task', tasks)

//404 not found middleware
app.use(notFound)

//err handler
app.use(errorhandler)

//connect to db
const startdb = async ()=> {
    try{
        await connectdb(String(process.env.MONGO_URL))
        app.listen(port, ()=>{
            console.log('server established')
    })
    }
    catch(err) {
        console.log(err)
    }
}

startdb()

