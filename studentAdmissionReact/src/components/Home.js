import React from 'react'
import {Button, Jumbotron,Container} from "reactstrap"
const Home = () => {
  return (

<div class="container-fluid bg-light text-dark p-5">
  <div class="container bg-light p-5">
    <h1 class="display-5 fw-bold">Welcome to Admin HomePage</h1>
      <p>Go to My Website</p>
      <Container>
      <Button>Use Me</Button>
      </Container>
  </div>
</div>
  );
}

export default Home