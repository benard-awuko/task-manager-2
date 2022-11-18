let express = require('express');
let tasks = require('./modules/tasks')
let app = express();

let notFound = require('./middleware/not-found')
let errorHandler = require('./middleware/errorHandler')


app.use(express.json())
app.use(express.static('./public'))
require('dotenv').config()
let connectDB = require('./db/connect');

app.use('/api/v1/tasks', tasks)

app.use(notFound)
app.use(errorHandler)

let port = process.env.PORT || 3000
let start = async()=>{
       try {
        await connectDB(process.env.MONGO_URI)
       app.listen(port, ()=>{
    console.log(`Listening on port ${port}`)
})

       } catch (error) {
        console.log(error)
       }

}

start()

