let express = require('express');
let tasks = require('./modules/tasks');
let notFound = require('./middleware/not-found')
let app = express();

app.use(express.static('./public'))
app.use(express.json())

app.use(notFound)

require('dotenv').config()
let connectDB = require('./db/connect');

app.use('/api/v1/tasks', tasks)




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

