import React, {useState} from 'react'
import { toast } from 'react-toastify'
import{
    CardSubtitle,CardText,Button,CardBody,Card,CardTitle, Container
} from 'reactstrap'
import axios from 'axios';
import AddEmployee from './AddEmployee';
import Modal from 'react-modal'
import StudentDetails from './StudentDetails';



const Student = ({employee, update}) => {

  const [isUpdate,setUpdate]=useState(false);

  const handleUpdateClose=()=>{
setUpdate(false);
  }
  const deleteEmployee=(id)=>{
    axios.delete(`http://localhost:8080/demployee/${id}`).then((response)=>{
      console.log(response);
    toast.success("Course Delete sucessfully");
    
    },(error)=>{
      console.log(error);
      toast.error("Something went wrong !");
    }
    )
  }


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

  const changeEmployee=(id)=>{
    axios.put(`http://localhost:8080/employees/${id}`,employee).then((response)=>{
console.log(response);
// toast.success("Updated Successfully");
    },(error)=>{
console.log(error);
// toast.error("Something went wrong");
    }
    )
  }

  return (

    <div>
<Card
  body
  outline
  className='text-center mt-n1'
>
  <CardBody>
  <CardTitle tag="h5">
      {employee.id}
    </CardTitle>
    <CardTitle tag="h5">
      {employee.name}
    </CardTitle>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {employee.last}
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Container className=''>
    {/* <Button color="danger" onClick={()=>deleteEmployee(employee.id)} >Delete</Button>{' '} */}
    <Button color='warning' onClick={()=>downloadPdf(employee.id)} >Download</Button>{' '}{' '}
    <Button color='success' onClick={()=>changeEmployee(employee.id,setUpdate(true))} >View Details</Button>{' '}
    
    {
      <Modal isOpen={isUpdate}
      onRequestClose={handleUpdateClose}
      contentLabel='Update Employee Modal'
      >
        <button onClick={handleUpdateClose}>close</button>

        <StudentDetails employees={employee}  getI={'yes'}/>
      </Modal>
      
    }
    </Container>
    
  </CardBody>
</Card> 
    </div>
  )
}

export default Student