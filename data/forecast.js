const request = require("request")
const forecast=(longitude,latitude,callback)=>{
const url = "https://api.open-meteo.com/v1/forecast?latitude=" + latitude + "&longitude=" + longitude + "&current=temperature_2m"
 request ({url , json : true  } , (error , response) => {

    if (error) {
        callback ( "unable to connect weather api service" , undefined )
    } else if (response.body.error){
         callback (response.body.error.message , undefined )
    }else {
const temp = response.body.current.temperature_2m
            callback(undefined,  temp )
    }
})
}
module.exports=forecast