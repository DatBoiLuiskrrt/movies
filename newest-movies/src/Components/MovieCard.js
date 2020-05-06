import React, { useState } from "react";
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

    const [likes, setLikes] = useState(0);
    
    let alertMe = () => {
        alert("You have clicked title");
    }

    let changeSomething = () => {
        setLikes( likes + 1);
    }

    // console.log("props in film", film);
    return (
    
        <Col xs="6" md="4" xl="3">
            <Card>
                <Button  onClick={changeSomething} >Click Here to Like!</Button>
                <Alert>Number of Likes: {likes}</Alert>
                
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