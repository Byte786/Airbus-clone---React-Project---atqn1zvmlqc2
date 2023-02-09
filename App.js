import FaplaneArival from 'react-icons'
import React, { useState } from 'react'
import style from './Components/style.css'
import Section from './Components/Section'
import Login from './Components/Login'
import Checkout from './Components/Checkout'
import {Navbar,Nav,Container, Button, Form,} from 'react-bootstrap'
import Modal from 'react-responsive-modal'
import{BrowserRouter as   NavLink } from "react-router-dom";
import Fetch from './Components/Fetch'
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link
} from "react-router-dom";
const App = () => {
  const [IsmodalOpen, setIsModalOpen] = useState(false);
  return (
    
    <div>
       <>
      <Navbar bg="primary" variant="primary">
        <Container>
        <a class="active" href="#"><i FaplaneArival></i></a> 
          <Navbar.Brand href="#home">Airbus</Navbar.Brand>
          <Nav className="me-auto">
            
            <li>
            <NavLink  to ="/Checkout">Checkout</NavLink>
            </li>
            <button onClick={() => setIsModalOpen(true)}
            class="btn btn-outline-success my-2 my-sm-0" type="login ">Login</button>
          
          
          </Nav>
      <Checkout/>
        </Container>
      </Navbar>

      </>
      <Section/>
      <Login/>
      <Fetch/>
      
      
      <br />

      
  
    </div>
  )
}

export default App
