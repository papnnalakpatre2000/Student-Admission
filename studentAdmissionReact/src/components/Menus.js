import React from 'react'
import { ListGroup} from 'reactstrap'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'


const Menus = () => {
  return (
    
    <ListGroup >
        <Link className="list-group-item list-group-action"
        
        to="/"
        tag="a"
        >
            Home
        </Link>
        <Link
        className="list-group-item list-group-action"
        
        to="/allstudent"
        tag="a"
        >
            All Employees
        </Link>
        <Link
        className="list-group-item list-group-action"
        
        to="/addstudent"
        tag="a"
        >
            Add Employees
        </Link>
        {/* <Link
        className="list-group-item list-group-action"
        
        to="/about"
        tag="a"
        >
            About Us
        </Link> */}
    </ListGroup>
    
  )
}

export default Menus