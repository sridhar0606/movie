import React,{useState,useEffect}from 'react';
import logo from './logo.svg';
import './App.css';
import axios, * as others from 'axios';
const api ='http://localhost:5000/getmovies'

function App() {

const [movies ,setmovies]=useState([])

useEffect(()=>{

 axios.get(api).then((res)=>{
  setmovies(res.data.data)
  }).catch(error=>{
    console.log("error",error)
  })

})

  return (
   <>
   
   <div class="continer">
    
    <div class="row">
   
{movies.map((name,index)=>(

   <div class='col-md-4'>
   <div class="card">
  <div class ="card-body">
   
   <center><b>{name.movie} </b></center>
   <p>taring:{name.rating} </p>
    <p>date:{name.date} </p>

  </div>
    </div>

   </div>

  ))}





    </div>

   </div>



  </>
  );
}

export default App;
