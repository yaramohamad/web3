// src/FruitCounter.js  
import React, { useState } from 'react';  
import { Button, Container, Row, Col } from 'react-bootstrap';  

const FruitCounter = ({ fruit }) => {  
  const [count, setCount] = useState(0);  

  return (  
    <Container className="mt-5 text-center">  
      <h2>{fruit} Counter</h2>  
      <h3>{count}</h3>  
      <Row>  
        <Col>  
          <Button variant="secondary" onClick={() => setCount(count + 1)}>+</Button>  
        </Col>  
        <Col>  
          <Button variant="secondary" onClick={() => setCount(count - 1)}>-</Button>  
        </Col>  
      </Row>  
      <Row>  
        <Col>  
          <input  
            type="number"  
            value={count}  
            onChange={(e) => setCount(Number(e.target.value))}  
            style={{ width: '100px' }}  
          />  
        </Col>  
      </Row>  
    </Container>  
  );  
};  

export default FruitCounter;