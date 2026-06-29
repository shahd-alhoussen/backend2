let form = document.getElementById("form1")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    
    console.log(document.getElementById("address").value)

    const errorf=document.getElementById("error")
    const locationf=document.getElementById("location")
    const forcastf=document.getElementById("forcast")
  const latitude=document.getElementById("latitude")
  const longitude=document.getElementById("longitude")
    let weatherfun=async()=>{
        try {
            const address=document.getElementById("address").value
            const res= await fetch('http://localhost:3000/weather?address='+address)
            const data =await res.json()
            console.log(data)
            if(data.error){
                errorf.innerText=data.error
                locationf.innerText=" "
                forcastf.innerText=" "
                latitude.innerText=" "
                longitude.innerText=" "
                
            }
            else{
                errorf.innerText=""
                locationf.innerText=data.location
                forcastf.innerText=data.forecast
                latitude.innerText=data.latitude
                longitude.innerText=data.longitude
                
            }
        } catch(e) {
            console.log(e)
        }
    }

    weatherfun()
    form.reset()
})