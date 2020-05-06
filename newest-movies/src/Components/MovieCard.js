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


const MovieCard = ( {film:{title, description,director, release_date}} ) => {
    return (
    
        <Col xs="6" md="4" xl="3">
            <Card>
                
                <Alert>Film title: {title}</Alert>
                
                <CardBody>
                    <CardText>{description}</CardText>
                    <CardText>{director}</CardText>
                </CardBody>
                <Alert color="primary">
                Release Date: {release_date}
                </Alert>
            </Card>
        </Col>
        
    );
};

export default MovieCard;