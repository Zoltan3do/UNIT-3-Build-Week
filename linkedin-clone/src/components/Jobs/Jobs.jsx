import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleJob from "./SingleJob";
import FooterHome from "../FooterHome";
import LeftSidebar from "../LeftSidebar/LeftSidebar";

const Jobs = () => {
    const [position, setPosition] = useState([]);
    useEffect(() => {
        fetchJobs();
        // eslint-disable-next-line
    }, []);
    const fetchJobs = async () => {
        const response = await fetch(
            "https://strive-benchmark.herokuapp.com/api/jobs",
        );
        if (response.ok) {
            const res = await response.json();
            const job = res.data;
            console.log(job);
            setPosition(job);
        } else {
            console.log("Qualcosa è andato storto durante il recupero dei dati");
        }
    };
    return (

        <Container>
            <Row className="">
                <Col md={3} sm={12}>
                    <LeftSidebar ></LeftSidebar>
                </Col>
                <Col md={6} sm={12}>
                    <div style={{ marginTop: "100px" }} className="d-flex flex-column align-items-between ms-3">
                        <h4 className="mb-0">Le principali offerte di lavoro per te</h4>
                        <p className="text-secondary">Sulla base del tuo profilo e della tua cronologia delle ricerche</p>

                        <Row md={1} xs={1} style={{ flexWrap: "wrap" }}>
                            {position &&
                                position.slice(0, 15).map((job) => <SingleJob job={job} key={job._id} />)}
                        </Row>
                    </div>
                </Col>
                <Col md={3} sm={12}>
                    <FooterHome></FooterHome>
                </Col>
            </Row>
        </Container>



    );
};
export default Jobs;