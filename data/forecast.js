const request = require("request")
const forecast=(longtitude,latitude,callback)=>{
const url = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longtitude + "&current=temperature_2m"
 request ({url , json : true  } , (error , response) => {

    if (error) {
        callback ( "unable to connect weather api service" , undefined )
    } else if (response.body.error){
         callback (response.body.error.message , undefined )
    }else {
const temp = response.body.current.temperature_2m
            callback(undefined, "The current temperature is " + temp + "°C")
    }
})
}
module.exports=forecast