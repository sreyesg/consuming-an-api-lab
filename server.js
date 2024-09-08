const express =require('express')
const app = express()
// const bodyParser = require('body-parser')

// Middleware
app.use(express.urlencoded( {extended: true}))
app.use(express.json())

// home route
app.get('/',(req, res)=> {
    res.render('index.ejs')
})
// post route for Wheater
app.post('/weather',(req, res)=> {
    console.log(req.body)
})

app.listen(4000)