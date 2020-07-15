import React from 'react';
import { ContainerAllPost } from './Containers/ContainerAllPost';
import { ContainerPostForm } from './Containers/ContainerPostForm';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <Container>
      <Row className="mt-5">
        <Col md={4} >
          <ContainerPostForm />
        </Col>
        <Col md={8}>
          <ContainerAllPost />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
