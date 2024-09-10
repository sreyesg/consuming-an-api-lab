require('dotenv').config()
const express =require('express')
const app = express()
const axios = require('axios')
const { resolveInclude } = require('ejs')

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
    const zipCode = req.body.zipCode
    let weatherObj 
    // build url
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=${process.env.API_KEY}`
    const fetchWeather = async (url) => {
        const response = await fetch(url)
        weatherObj = await response.json()
        console.log(weatherObj)
        res.render('show.ejs',weatherObj)
        
    }
    fetchWeather(url)
    
   
})

app.listen(4000)