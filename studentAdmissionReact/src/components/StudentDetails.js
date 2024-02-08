import React, { useState,useEffect } from 'react'
import {Form,FormGroup,Label,Input, Container, Button} from 'reactstrap';
import axios from "axios";
import {toast} from "react-toastify"
import { Fragment } from 'react';
import Employee  from './Employee';


import{
    CardSubtitle,CardText,CardBody,Card,CardTitle
} from 'reactstrap'

import AddEmployee from './AddEmployee';
import Modal from 'react-modal'
const StudentDetails = ({employees,getI}) => {



  const [employee,setEmployee]=useState([]);


const handleForm=(e)=>{
  console.log(employee);
  postData(employee);
  
  e.preventDefault();
  setEmployee({ id:'',name:'', position:''});
}


console.log('----------------')
console.log(getI)
useEffect(()=>{
  if(getI==="yes"){
    setEmployee({ id:employees.id,name:employees.name, position:employees.position});
    console.log('----------------')
  //   employee.name=employees.name
  //   employee.id=employees.id
  //   employee.position=employees.position
  // console.log(employees.name)
    console.log('----------------')
    // employee.position=employees.employees.position;
  
  }
},[]);

const downloadPdf = (id) => {
    fetch(`http://localhost:8080/documents/${id}`)
      .then(
        response => response.blob()
      
      )
      .then(blob => {
        
        // Create a temporary URL to the blob
        const url = window.URL.createObjectURL(new Blob([blob]));
        // Create a link element to initiate the download
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'document.pdf');
        document.body.appendChild(link);
        link.click();
        // Clean up
        link.parentNode.removeChild(link);
      })
      .catch(error => console.error('Error downloading PDF:', error));
  };

const postData=(data)=>{
  console.log("HEllo papnna")
  axios.post(`http://localhost:8080/addemployee`,data).then(
    (response)=>{
      console.log(response)
      toast.success("Employee Added Successfully");
      if(getI==="yes"){
        window.location.reload(true);
      }
    },(error)=>{
      console.log(error);
      toast.error("Something went Wrong");
    }
  )
};
  return (
    <Fragment>

<Card
  body
  outline
  className='text-center mt-n1'
>
  <CardBody>
  <CardTitle tag="h5">
      {employees.id}
    </CardTitle>
    <CardTitle tag="h5">
      {employees.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {employees.last}
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Container className=''>


   <div className='container' style={{display:'inline-block'}}>

   <div class="form-group" >

    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" style={{width:'60%', marginLeft:'20%'}}></textarea>
  </div>
   <Button color='danger'>Reject</Button>{' '}

<Button color='success'>Accept</Button>{' '}
   </div>


   
   <Button color='success' onClick={()=>downloadPdf(employee.id)} >Download</Button>
     {/* <Button color='warning' onClick={()=>changeEmployee(employee.id,setUpdate(true))} >Update</Button>
    {
      <Modal isOpen={isUpdate}
      onRequestClose={handleUpdateClose}
      contentLabel='Update Employee Modal'
      >
        <button onClick={handleUpdateClose}>close</button>

        <AddEmployee employees={employee}  getI={'yes'}/>
      </Modal>
      
    } */}
    </Container>
    
  </CardBody>
</Card> 
    </Fragment>
  )
}

export default StudentDetails;