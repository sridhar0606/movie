const express = require("express");

const app =  express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = 5000 ;



const movie = [
{"movie":"love today","rating":8,"date":"02/11/2022"},
{"movie":"singam","rating":9,"date":"06/12/2022"},
{"movie":"ps-1","rating":8.3,"date":"07/10/2022"},
{"movie":"kantara","rating":6,"date":"05/06/2022"},
{"movie":"dsp","rating":7,"date":"02/10/2022"},
{"movie":"coffe with kadhal","rating":6,"date":"02/11/2022"},
{"movie":"master","rating":9,"date":"02/11/2022"},
{"movie":"vikram","rating":8.3,"date":"07/07/2022"},
]


app.use(bodyParser .urlencoded({extended:true}))
  
app.use(cors())

app.use(bodyParser.json())

app.get('/',(req,res)=>{

res.send("working server")
	//console.log("working")
})

app.get('/getmovies',(req,res)=>{

return res.status(200).json({messasge:"success",data:movie})

})






app.listen(port,()=>console.log(`server run ${port}`))