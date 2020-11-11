import React, {useState, useEffect} from 'react'
import './App.css';
import { Navbar } from './component/Navbar/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Card } from './component/Card/Card';

import api from './Api/api'

function App() {
  const [response, setResponse] = useState()

  useEffect(() => {
    getTest()
  }, [])
    const getTest = async () =>{
      try{
        const URL = '/hour'
        const res = await api.get(URL)

        console.log(res.data[0].properties)
        for(let x = 0; x > res.length; x++){
          console.log(res.data[x].properties)
        }
        
      }catch(err){
        console.log(`${err}`)
      }
    } 

    //console.log(response)
  return (
    
    <BrowserRouter>
      <Navbar/>
      <Card/>
    </BrowserRouter>
  );
}

export default App;
