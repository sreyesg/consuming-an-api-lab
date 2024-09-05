const express =require('express')
const app = express()
// const bodyParser = require('body-parser')

app.use(express.urlencoded( {extended: true}))
app.use(express.json())

app.get('/',(req, res)=> {
    res.render('index.ejs')
})

app.post('/weather',(req, res)=> {
    console.log(req.body)
})

app.listen(4000)