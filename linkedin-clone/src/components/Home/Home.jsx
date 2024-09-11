import "./home.css";
import HomeRightSide from "../HomeRightSide.jsx"
import LeftSidebar from "../LeftSidebar/LeftSidebar.jsx"
import { Container, Row, Col } from "react-bootstrap";

function Home({userProfile}) {
    return (
        <Container>
            <Row>
                <Col md={2} sm={12}>
                    <LeftSidebar userProfile={userProfile}></LeftSidebar>
                </Col>
                <Col md={7} sm={12}>
                </Col>
                <Col md={3} sm={12}>
                    <HomeRightSide></HomeRightSide>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;