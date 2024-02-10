// import React, { Component } from 'react';
import spinner from './spinner.gif';

const Loading=()=> {
    return (
      <div className='text-center'>
        <img className='my-3' src={spinner} alt='spinner'/>
      </div>
    );
  }


export default Loading 
