import React, { useState, useEffect } from "react";
import OtherCard from "./OtherCard";
import axios from "axios";
// axios is needed to make the api request
import { Container, Row } from "reactstrap";

export default function OtherList() {

const [character, setCharacter] = useState([]);

    

useEffect(() => {
    axios
    .get("https://ghibliapi.herokuapp.com/films/")
    .then( response => {
        setCharacter(response.data);
        // console.log("in pelilist " , response.data);
    })
    .catch(error => {
        console.log("there was a mistake" , error);
    });
    
},[]);

return (
    <Container>
        <Row>
            {character.map( pelic => {
                return (
                    <OtherCard
                    data={pelic}
                    data={pelic.id}
                    />
                )
            })}
        </Row>
    </Container>
)
};