import {
    Container,
    Navbar,
    Form,
    FormControl,
    Row,
    Dropdown
} from "react-bootstrap";
import { Search, HouseDoorFill, PeopleFill, BriefcaseFill, ChatDotsFill, BellFill } from "react-bootstrap-icons";
import TendinaTu from "./TendinaTu";
import "./MyNavbar.css";

function MyNavbar() {
    return (
        <>
            <Row className="fixed-top w-100 fs-xs">
                <Navbar bg="light" variant="light" expand="lg" className="w-100 fixed-top py-2">
                    <Container className="d-flex justify-content-between align-items-center ">
                        <Navbar.Brand href="/" >
                            <div style={{ width: 33 }} >
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin logo"  className="w-100"/>
                            </div>

                        </Navbar.Brand>

                        <Form className="d-none d-lg-block" style={{marginLeft:"-150px"}}>
                            <Form.Group className="d-flex align-items-center">
                                <Search className="me-2" size={20} />
                                <FormControl type="text" placeholder="Cerca" className="w-100 search-background " />
                            </Form.Group>
                        </Form>

                        <div className="d-flex align-items-center" >
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

                            <div className="navbar-icon-container text-center mx-3 me-5">
                                <BellFill size={20} className="navbar-icon" />
                                <div>Notifiche</div>
                            </div>

                            <Dropdown className="me-5">
                                <Dropdown.Toggle
                                    variant="link"
                                    className="d-flex align-items-center dropdown-toggle text-decoration-none text-dark flex-column"
                                >
                                    <img
                                        className="navbar-profile-pic"
                                        src="../assets/imgs/default-profile-pic.png"
                                        alt="profilo"
                                    />
                                    <div className="ms-2 text-dark">
                                        Tu
                                    </div>
                                </Dropdown.Toggle>
                                <Dropdown.Menu className="custom-dropdown-menu">
                                    <TendinaTu />
                                </Dropdown.Menu>
                            </Dropdown>


                            <div className="d-flex border border-bottom-0 border-top-0 border-end-0">
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="link"
                                        className="d-flex align-items-center dropdown-toggle text-decoration-none text-dark flex-column"
                                    >
                                        <div className="ms-2 text-dark">
                                            <i className="bi bi-grid"></i>
                                            <div>Per le aziende</div>
                                        </div>
                                    </Dropdown.Toggle>
                                    <Dropdown.Menu className="custom-dropdown-menu">
                                    </Dropdown.Menu>
                                </Dropdown>

                                <div className="navbar-icon-container text-center d-none d-lg-block mx-2 mt-2 text-premium-color text-decoration-underline fs-xs">
                                    Passa a Premium per 0 <br /> EUR
                                </div>
                            </div>

                        </div>

                    </Container>
                </Navbar>
            </Row>
        </>
    );
}

export default MyNavbar;
