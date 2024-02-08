import React, { useState,useEffect } from 'react'
import {Form,FormGroup,Label,Input, Container, Button} from 'reactstrap';
import axios from "axios";
import {toast} from "react-toastify"
import { Fragment } from 'react';
import Employee  from './Employee';
const AddEmployee = ({employees,getI}) => {



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

        <Form onSubmit={handleForm}>
          <h1 className='text-center my-3'>Fill Employee Details</h1>
          <FormGroup>
            <Label for="employeeId">
              Employee Id
            </Label>
            <Input
              id="id"
                name="id"
                placeholder="Enter the Id"
                type="text"
                value={employee.id}
                onChange={(e)=>{
                  setEmployee({...employee,id:e.target.value})
                }}

            />
            </FormGroup>
            <FormGroup>
            <Label for="EmployeeName">
              Employee Name
            </Label>
            <Input
              id="name"
                name="name"
                placeholder="Enter the name"
                type="text"
                value={employee.name}
                onChange={(e)=>{
                  setEmployee({...employee,name:e.target.value})
                }}

            />
            </FormGroup>
            <FormGroup>
            <Label for="employeePosition">
              Employee Position
            </Label>
            <Input
              id="position"
                name="position"
                placeholder="Enter the Employee Position"
                type="text"
                value={employee.position}
                onChange={(e)=>{
                  setEmployee({...employee,position:e.target.value})
                }}

            />
          </FormGroup>
          <Container className='text-center'>
            <Button type="submit" color='success' >Submit</Button>
            <Button color='warning ms-2' type='reset'>Clear</Button>
          </Container>
        </Form>
    </Fragment>
  )
}

export default AddEmployee;