import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MainSidebar from '../MainSidebar'


import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

// import { useEffect } from "react";

const DinamicProfile = () => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const {SingleProfileId} = useParams()


    const fetchData = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/${SingleProfileId}`,{
                headers:{
                    Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRmNDI3NWFmNDM0YjAwMTU5ZDgzMmIiLCJpYXQiOjE3MjU5MDc5NDAsImV4cCI6MTcyNzExNzU0MH0.9BnplLmgaQIFjhcARlwTs5Yimp8cJnqRsIQPvF23W1g"
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} ${response.statusText}`);
            }
            const result = await response.json();
            setData(result);
            console.log("risultati fetch profilo dinamico" + data)
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
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