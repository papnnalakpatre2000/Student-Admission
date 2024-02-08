import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Employee from './components/Employee'
import AllEmployees from './components/AllEmployees'
import AddEmployee from './components/AddEmployee'
import {Row, Col, Container} from 'reactstrap'
import Menus from './components/Menus'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import AboutUs from './components/AboutUs'
import AllStudents from './components/AllStudents'
import DownloadFile from './components/DownloadFile'
import UploadFile from './components/UploadFile'
import AddStudent from './components/AddStudent'

const App = () => {
  return (
    <><ToastContainer/>  
<Router>  

<Container>


  <Header/>

  <Row>
  <Col md={4}>
    <Menus/>
  </Col>
  <Col md={8}>
    <Routes>
    <Route path='/' Component={Home} exact/>
    <Route path='/all' Component={AllEmployees} exact/>
    <Route path="/add" Component={AddEmployee} exact/>
    <Route path="/about" Component={AboutUs} exact/>
    <Route path="/allstudent" Component={AllStudents}/>
    DownloadFile
    <Route path="/DownloadFile" Component={DownloadFile}/>
    <Route path="/upload" Component={UploadFile}/>
    <Route path="/addstudent" Component={AddStudent}/>
    
    about
    </Routes>
  </Col>
</Row>

</Container>

</Router>
    </>
  )
}

export default App