import {
    Container,
    Navbar,
    Form,
    FormControl,
    Row,
} from "react-bootstrap";

import {
    Search,
    HouseDoorFill,
    PeopleFill,
    BriefcaseFill,
    ChatDotsFill,
    BellFill,
    // CaretDownFill,
    // Grid3x3GapFill,
} from "react-bootstrap-icons";

// import { Link } from "react-router-dom";

import "./MyNavbar.css";


function MyNavbar() {
    return (
        <>
            <Row className="fixed-top w-100">
                <Navbar bg="light" variant="light" expand="lg" className="w-100 fixed-top py-2">
                    <Container className="d-flex justify-content-between align-items-center">

                        <Navbar.Brand href="/">
                            <img src="../assets/imgs/logo.png" alt="linkedin logo" className="w-15" />
                        </Navbar.Brand>


                        <Form className="d-none d-lg-block">
                            <Form.Group className="d-flex align-items-center">
                                <Search className="me-2" size={20} ></Search >
                                <FormControl type="text" placeholder="Cerca" className="w-100 search-background" />
                            </Form.Group>
                        </Form>


                        <div className="d-flex align-items-center">
                            <div className="navbar-icon-container text-center mx-3">
                                <HouseDoorFill size={20} className="navbar-icon" />
                                <div>Home</div>
                            </div>

                            <div className="navbar-icon-container text-center mx-3">
                                <PeopleFill size={20} className="navbar-icon" />
                                <div>Rete</div>
                            </div>

                            <div className="navbar-icon-container text-center mx-3">
                                <BriefcaseFill size={20} className="navbar-icon" />
                                <div>Lavoro</div>
                            </div>

                            <div className="navbar-icon-container text-center mx-3">
                                <ChatDotsFill size={20} className="navbar-icon" />
                                <div>Messaggistica</div>
                            </div>

                            <div className="navbar-icon-container text-center mx-3">
                                <BellFill size={20} className="navbar-icon" />
                                <div>Notifiche</div>
                            </div>

                            {/* Aggiungere la parte (TU) */}

                            <div className="navbar-icon-container text-center mx-2 border border-1 p-2">{/* Questo dovrà essere un dropdown */}
                                <i className="bi bi-grid"></i>
                                <div>Per le aziende</div>
                            </div>

                            <div className="navbar-icon-container text-center d-none d-lg-block mx-2 mt-2 text-premium-color">
                                Passa a Premium per 0 <br /> EUR
                            </div>
                        </div>
                    </Container>
                </Navbar>
            </Row>
        </>
    );
}

export default MyNavbar;
