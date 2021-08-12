import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from './constants/index';
import "./App.css";
import axios from 'axios';
import Title from './title';
import Hdurl from './hdurl';
import Copyright from './copyright';
import Date from './date';
import Explantion from './explantion';
import Url from './url';
import { Button, Alert } from 'reactstrap';

function App() {

const [apod, setApod] = useState([])
// const [date, setDate] = useState([])
const [error, setError] = useState('')

useEffect(() => {
  axios.get(`https://api.nasa.gov/planetary/apod/?api_key=${API_KEY}`)
  .then(res => {
    console.log(res.data);
    setApod(res.data)
  })
  .catch(err => {
    console.error(err);
    setError('Sorry')
  })

}, [])

 return (
    <div className="App">
      {error ? <h1>{error}</h1> : null}
      <p> 
        <Title title={apod.title}/> 
       <Hdurl image={apod.hdurl}/>
       </p>
   </div>
  )
 }

export default App