// src/pages/Home.js  
import React from 'react';  
import { Link } from 'react-router-dom';  
import { Container, Button, Row, Col } from 'react-bootstrap';  

const Home = () => {  
  return (  
    <Container className="text-center mt-5">  
      <h1>Fruit Counter Home</h1>  
      <Row>  
        <Col>  
          <Link to="/apples"><Button variant="primary">Apples</Button></Link>  
        </Col>  
        <Col>  
          <Link to="/bananas"><Button variant="success">Bananas</Button></Link>  
        </Col>  
        <Col>  
          <Link to="/oranges"><Button variant="warning">Oranges</Button></Link>  
        </Col>  
        <Col>  
          <Link to="/strawberries"><Button variant="danger">Strawberries</Button></Link>  
        </Col>  
      </Row>  
    </Container>  
  );  
};  

export default Home;