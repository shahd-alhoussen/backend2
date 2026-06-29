
const request = require("request")
const express = require("express")
const geocode = require('./data/geocode')
const forecast= require('./data/forecast')
const app = express()
var hbs =require('hbs')
const path = require('path');
const port = 3000
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    res.render('index'); 
});
app.get('/weather',(req,res)=>
{
if(!req.query.address){
    return res.send({
        error:"ERORR NOT FOUND"
    })
}
geocode(req.query.address,(error,data)=>{
    if (error) {
          return res.send(error)
    }

forecast(data.latitude,data.longitude,(error,forecastData)=>{
if (error) {
    return res.send({error})
}
 res.send({
  forecast: forecastData,
    location: req.query.address,
    latitude: data.latitude,    
    longitude: data.longitude
 })
})
})

})



app.listen(port, () => {
    console.log("Server is running! Open: http://localhost:" + port)
})