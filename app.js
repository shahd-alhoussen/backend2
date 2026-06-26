const request = require("request")
const express = require("express")
const forecast = require("./data/forecast")
const geocode = require("./data/geocode")
const app = express()
const port = 3000

const country = process.argv[2]

app.get("/", (req, res) => {
    if (!country) {
        return res.send({ error: "Please provide a country name!" })
    }
    geocode(country, (error, data) => {
        if (!data) {
            return res.send({ error: error })
        }
        forecast(data.longtitude, data.latitude, (forecastError, forecastData) => {
            if (!forecastData) {
                return res.send({ error: forecastError })
            }
            
            res.send({
                country: country,
                longitude: data.longtitude,
                latitude: data.latitude,
                weather: forecastData 
            })
        })
    })
})

app.listen(port, () => {
    console.log("Server is running! Open: http://localhost:" + port)
})
