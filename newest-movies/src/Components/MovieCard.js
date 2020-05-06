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
    
    let alertMe = () => {
        alert("You have clicked title");
    }

    // console.log("props in film", film);
    return (
    
        <Col xs="6" md="4" xl="3">
            <Card>
                
                <Alert onClick={alertMe}>Film title: {title}</Alert>
                
                <CardBody>
                    <p>Summary</p>
                    <CardText>{description}</CardText>
                    <CardText>Director: {director}</CardText>
                </CardBody>
                <Alert color="primary">
                Release Date: {release_date}
                </Alert>
            </Card>
        </Col>
        
    );
};

export default MovieCard;