import React, {useState} from 'react'
import { toast } from 'react-toastify'
import{
    CardSubtitle,CardText,Button,CardBody,Card,CardTitle, Container
} from 'reactstrap'
import axios from 'axios';
import AddEmployee from './AddEmployee';
import Modal from 'react-modal'



const Employee = ({employee, update}) => {

  const [isUpdate,setUpdate]=useState(false);

  const handleUpdateClose=()=>{
setUpdate(false);
  }
  const deleteEmployee=(id)=>{
    axios.delete(`http://localhost:8080/demployee/${id}`).then((response)=>{
      console.log(response);
    toast.success("Course Delete sucessfully");
    update(id);
    },(error)=>{
      console.log(error);
      toast.error("Something went wrong !");
    }
    )
  }

  const changeEmployee=(id)=>{
    axios.put(`http://localhost:8080/employees/${id}`,employee).then((response)=>{
console.log(response);
toast.success("Updated Successfully");
    },(error)=>{
console.log(error);
toast.error("Something went wrong");
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
      {employee.position}
    </CardSubtitle>
    <CardText>
      Some quick example text to build on the card title and make up the bulk of the card‘s content.
    </CardText>
    <Container className=''>
    <Button color="danger" onClick={()=>deleteEmployee(employee.id)} >Delete</Button>{' '}
    <Button color='warning' onClick={()=>changeEmployee(employee.id,setUpdate(true))} >Update</Button>
    {
      <Modal isOpen={isUpdate}
      onRequestClose={handleUpdateClose}
      contentLabel='Update Employee Modal'
      >
        <button onClick={handleUpdateClose}>close</button>

        <AddEmployee employees={employee}  getI={'yes'}/>
      </Modal>
      
    }
    </Container>
    
  </CardBody>
</Card> 
    </div>
  )
}

export default Employee