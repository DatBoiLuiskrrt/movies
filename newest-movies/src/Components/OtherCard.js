import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText,
  Col, Alert
} from "reactstrap";


const OtherCard = ( {data} ) => {
    // console.log("props in film", film);
    return (
    
        <Col xs="6" md="4" xl="3">
            <Card>
                
                <Alert>Film title:</Alert>
                
                <CardBody>
                    <p>Summary</p>
                    <CardText></CardText>
                    <CardText>Director: </CardText>
                </CardBody>
                <Alert color="primary">
                Release Date:
                </Alert>
            </Card>
        </Col>
        
    );
};

export default OtherCard;