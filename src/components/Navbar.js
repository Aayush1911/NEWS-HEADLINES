// import React, { Component } from 'react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
const Navbar = (props) => { 
  const[search,setsearch]=useState('')
  const[country,setcountry]=useState('in');

  const searchnews=useRef('')
  function handlesubmit(e){
    e.preventDefault();
    let search=searchnews.current.value;
    // console.log(search);
    props.search(search);
  }

  const countrynews=useRef('')
  function countryclick(e){
    e.preventDefault();
    let contry=countrynews.current.value;
    console.log(contry);
  }
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">News App</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className='nav-link' aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item"><Link className='nav-link' to="/Business">Business</Link></li>
        <li className="nav-item"><Link className='nav-link' to="/Entertainment">Entertainment</Link></li>
        <li className="nav-item"><Link className='nav-link' to="/Health">Health</Link></li>
        <li className="nav-item"><Link className='nav-link' to="/Science">Science</Link></li>
        <li className="nav-item"><Link className='nav-link' to="/Sports">Sports</Link></li>
        <li className="nav-item"><Link className='nav-link' to="/Technology">Technology</Link></li>       
      </ul>
      
      <form className="d-flex" role="search">
        <input className="form-control me-2" ref={searchnews}id='search' type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit"onClick={handlesubmit}>Search</button>
      </form>
    </div>
  </div>
</nav>
      </div>
    )
  }
  export default Navbar
