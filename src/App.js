import './App.css';
import { useState } from 'react';
// import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Route, Routes } from 'react-router-dom'

const App=()=>{
  const pagesize=9;
  const apikey='474f655011cc42879fef69814225eb73'
  const[search,setsearch]=useState('')
  function searchnews(search){
    setsearch(search);
    // console.log(search);
  }
    return (
      <div>
        <Router>
        <Navbar search={searchnews}/>
        <Routes>
        <Route exact path='/' element={<News apikey={apikey} key="general" pagesize={pagesize} country={'in'} category={'general'} search={search}/>} />
        <Route exact path='/Business' element={<News apikey={apikey} key="business" pagesize={pagesize} country={'in'} category={'business'} search={search}/>} />
        <Route exact path='/Entertainment' element={<News apikey={apikey} key="entertainment" pagesize={pagesize} country={'in'} category={'entertainment'} search={search}/>} />
        <Route exact path='/Health' element={<News apikey={apikey} key="health" pagesize={pagesize} country={'in'} category={'health'} search={search}/>} />
        <Route exact path='/Science' element={<News apikey={apikey} key="science" pagesize={pagesize} country={'in'} category={'science'} search={search}/>} />
        <Route exact path='/Sports' element={<News apikey={apikey} key="sports" pagesize={pagesize} country={'in'} category={'sports'} search={search}/>} />
        <Route exact path='/Technology' element={<News apikey={apikey} key="technology" pagesize={pagesize} country={'in'} category={'technology'} search={search}/>} />
        </Routes>
        </Router>
      </div>
    )
  }

export default App;