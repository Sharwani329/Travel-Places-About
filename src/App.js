import React, { Component } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Route/Home';
import About from './Route/About';
import Places from './Route/Places';
import Contact from './Route/Contact';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Hero from './components/Hero';



class App extends Component{
render() {
  return (
    <div className='App'>
      <BrowserRouter>
       <Navbar/>  
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/Places' element={<Places/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}
}

export default App;
