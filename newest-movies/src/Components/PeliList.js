import React, { useState, useEffect } from "react";
import PeliCard from "./PeliCard";
import axios from "axios";
// axios is needed to make the api request
import { Container, Row } from "reactstrap";

export default function PeliList() {
    const [peli, setPeli] = useState([]);

    

    useEffect(() => {
        axios
        .get("https://ghibliapi.herokuapp.com/films/")
        .then( response => {
            setPeli(response.data);
            console.log("in pelilist " , response.data);
        })
        .catch(error => {
            console.log("there was a mistake" , error);
        });
        
    },[]);

    return (
        <Container>
            <Row>
                {peli.map( pelic => {
                    return (
                        <PeliCard
                        peli={pelic}
                        key={pelic.id}
                        />
                    )
                })}
            </Row>
        </Container>
    )
};

