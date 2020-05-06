import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import PeliList from './PeliList';

const Example = ({peli}) => {
    // console.log("props in pelicard", peli );
  return (
    <Row>
      <Col sm="6">
        <Card body>
  <CardTitle>{peli.title}</CardTitle>
          <CardText>{peli.description}</CardText>
          <Button>Keep reading...</Button>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>Special Title Treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button>Go somewhere</Button>
        </Card>
      </Col>
    </Row>
  );
};

export default Example;