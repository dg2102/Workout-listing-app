require('dotenv').config()
const mongoose=require('mongoose')
const express=require('express')
const app=express()
const workoutRoutes=require('./routes/workouts')
//const port=3002;


//middleware

// app.get((req,res)=>{
//     res.send('Helloo World// debs  this side ,soon gonna  bcome a       web dev engineer,  hehe ')
// //console.log(req.path,req.method)
//  //next()
// })
app.use(express.json())

//routes
app.use('/api/workouts',workoutRoutes)
//connect to db
mongoose.connect(process.env.mongoURI)
.then(()=>{
    console.log("connected to mongo")
}).catch(()=>{
    console.log("not connected to mongo")
})

app.get('/',(req,res)=>{
 res.json({mssg:"welcome to the app"})
})
app.listen(process.env.PORT,(req,res)=>{
console.log(`listening on port 3200`)

})
//for routes use (app.use) not  (app.get)



// const express = require('express')

// const app = express() //helps set up our app
// const port = 3002;
// app.use(express.json())


// //Available routes
// // app.use('/api/auth',require('./routes/auth'))
// // app.use('/api/notes',require('./routes/notes'))
// app.get('/', (req, res) => {
//   res.send('Helloo World// debs  this side soon gonna  become a       web dev engineer hehe !')
// })

// app.listen(process.env.PORT, () => {
//   console.log(`App listening on port ${port}`)
// })
