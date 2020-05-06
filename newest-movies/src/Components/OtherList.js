import React, { useState, useEffect } from "react";
import OtherCard from "./OtherCard";
import axios from "axios";
// axios is needed to make the api request
import { Container, Row } from "reactstrap";

export default function OtherList() {

const [character, setCharacter] = useState({});

    useEffect( () => {
        axios
        .get("https://rickandmortyapi.com/api/characters/")
        .then( response => {
            setCharacter(response.data);
            console.log("api data in otherlist", response);
        })
        .catch(error => {
            console.log(" Luis data not returned", error);
        });
    },[])
    
    return (
        <Container>
            <Row>
                {/* {character.map(props => {
                    return (
                        <OtherCard
                         data={props} 
                         key={props.id}/>
                    )
                })} */}
                
            </Row>
        </Container>
    )
};