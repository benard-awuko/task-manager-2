let express = require('express');
let tasks = require('./routes/tasks')
let connectBD =  require('./db/connect') 

require('dotenv').config();
let app = express();
app.use(express.json())

// app.get('/hello',(req,res)=>{
//     res.send('Task Manager App')
// })

app.use('/api/v1/tasks', tasks)


let port = 3000;


let start = async()=>{
    try {
        await connectBD(process.env.MONGO_URI);
        app.listen(port, ()=>{
    console.log('Listening on port 3000...')
})
    } catch (error) {
        console.log(error)
    }
}

start();









