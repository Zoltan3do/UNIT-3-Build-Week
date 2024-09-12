import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MainSidebar from '../MainSidebar'


import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

// import { useEffect } from "react";

const DinamicProfile = () => {

    const [data, setData] = useState({});

    const { SingleProfileId } = useParams({})

    const fetchData = () => {
        const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/";
        fetch(baseEndpoint + SingleProfileId, {
            headers: {
                Authorization:
                    " Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRmNDI3NWFmNDM0YjAwMTU5ZDgzMmIiLCJpYXQiOjE3MjU5MDc5NDAsImV4cCI6MTcyNzExNzU0MH0.9BnplLmgaQIFjhcARlwTs5Yimp8cJnqRsIQPvF23W1g",
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Errore nel recupero del profilo");
                }
            })
            .then((profile) => {
                setData(profile)
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} md={7} lg={8} xl={9}>
                    </Col>
                    <Col xs={12} md={5} lg={4} xl={3}>
                        <MainSidebar />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default DinamicProfile;