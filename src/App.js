import React, { useState, useEffect } from "react";
import { BASE_URL, API_KEY } from './constants/index';
import "./App.css";
import axios from 'axios';
import Title from './Title';

function App() {

const [apod, setApod] = useState([])
// const [date, setDate] = useState([])
const [err, setError] = useState(null)

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
  // const Title = props => (
  //   <div className='App'>
  //     <Title data={data.title}/>
  //   </div>
  // )
}, [])

const Title = props => (
  <div className='App'>
    <Title data={data.title}/>
  </div>
)

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

// const Title = props => (
//   <div className='App'>
//     <Title data={data.title}/>
//   </div>
// )


export default App;
