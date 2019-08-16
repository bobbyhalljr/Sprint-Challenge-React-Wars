import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Card from './components/Card';
import Pagination from './components/Pagination';

import './App.css';

const App = () => {
  const [data, setData] = useState([])
  const [error, setError] = useState()
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios.get('https://swapi.co/api/people/')
    .then(res => {
      console.log(res.data)
      setData(res.data.results)
    })
    .catch(error => {
      console.log(error.response.message)
    })
  }, []);

  return (
    <div className="App">
      <div className='container'>
        <Pagination />
        <div className='card-container'>
          {data.map((item, index) => (
            <Card key={index}
            name={item.name}
            birthyear={item.birth_year}
            height={item.height}
            mass={item.mass} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App;
