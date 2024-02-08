import React from 'react'
import './style.css';
import { Card, Col, Row } from 'reactstrap';
const AboutUs = () => {
  return (
    <><h1 className='text-center'>AboutUs</h1>
    <Card
  body
  outline
  className='text-center mt-n1'
>
        

{/* <Row>
<Col>
<Row className='fw-bold'style={{backgroundColor:"yellow"}}>Name:</Row>
<Row className='fw-bold' >Age:</Row>
<Row className='fw-bold'style={{backgroundColor:"yellow"}}>Address:</Row>
<Row className='fw-bold' >Experiance:</Row>
</Col>

<Col bg-color="yellow">
<Row bg-color='yellow'style={{backgroundColor:"yellow"}}>Name:</Row>
<Row  >Age:</Row>
<Row style={{backgroundColor:"yellow"}}>Address:</Row>
<Row>Experiance:</Row>
</Col>
</Row> */}
<section class="about" id="about">


<div class="row">
<div class="info">
    <h3 ><span className='fw-bold'>name :</span> papnna lakpatre</h3>
    <h3><span className='fw-bold'>age :</span> 21</h3>
    <h3><span className='fw-bold'>qualification :</span> B.Tech</h3>
    <h3><span className='fw-bold'>branch :</span> Computer Science and engineering</h3>
    <h3><span className='fw-bold'>language :</span> English,Marathi,Hindi</h3>
    {/* <a href="https://drive.google.com/file/d/1LTbUdOzqKCPYlfl8nX_8GPngCLAYjKLE/view?usp=sharing" download="https://drive.google.com/file/d/1LTbUdOzqKCPYlfl8nX_8GPngCLAYjKLE/view?usp=sharing"><button class="btn">download CV <i class="fas fa-download"></i></button></a> */}
    
</div>
<div class="counter">

    <div class="box">
        <span>5+</span>
        <h3>projects completed</h3>
    </div>

<div class="box">
<span>4+</span>
<h3>certificates</h3>
</div>

</div>
</div>
</section>
</Card></>
  )
}

export default AboutUs