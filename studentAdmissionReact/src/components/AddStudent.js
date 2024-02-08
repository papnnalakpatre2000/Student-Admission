import React, { useState,useEffect } from 'react'
import {Form,FormGroup,Label,Input, Container, Button} from 'reactstrap';
import axios from "axios";
import {toast} from "react-toastify"
import { Fragment } from 'react';

const AddStudent = ({employees,getI}) => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [lastname, setLastName] = useState(null);
  
    const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      console.log(event)
      if (selectedFile && selectedFile.type === 'application/pdf') {
        setFile(selectedFile);
        setError(null);
      } else {
        setFile(null);
        setError('Please select a valid PDF file.');
      }
    };
  
    const handleFileChange1 = (event) => {
      console.log(event.target.value);
      setLastName(event.target.value);
    }
  
    const handleUpload = () => {
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('last',lastname);
        
        fetch('http://localhost:8080/documents/upload', {
          method: 'POST',
          body: formData,
        })
        .then(response => {
          if (response.ok) {
            console.log('PDF uploaded successfully');
            // Handle success if needed
          } else {
            console.error('Failed to upload PDF');
            // Handle error if needed
          }
        })
        .catch(error => console.error('Error uploading PDF:', error));
      } else {
        setError('Please select a PDF file to upload.');
      }
    };

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

        <Form>
          <h1 className='text-center my-3'>Fill Employee Details</h1>
          <FormGroup>
            <Label for="employeeId">
              Employee Id
            </Label>
            <Input
              type="file" 
              accept=".pdf" 
              onChange={handleFileChange} 

            />
            </FormGroup>
            <FormGroup>
            <Label for="EmployeeName">
              Employee Name
            </Label>
            <Input
              type="text" 
              onChange={handleFileChange1} 

            />
            
            </FormGroup>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            
          <Container className='text-center'>
          <button onClick={handleUpload}>Upload PDF</button>
            <Button color='warning ms-2' type='reset'>Clear</Button>
          </Container>
        </Form>
    </Fragment>
  )
}

export default AddStudent;