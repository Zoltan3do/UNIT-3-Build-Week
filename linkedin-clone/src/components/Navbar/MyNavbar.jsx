import {
    Container,
    Navbar,
    Form,
    FormControl,
    Row,
    Dropdown,
    Button
} from "react-bootstrap";
import { Search, HouseDoorFill, PeopleFill, BriefcaseFill, ChatDotsFill, BellFill } from "react-bootstrap-icons";
import TendinaTu from "./TendinaTu";
// import {Link} from "react-router-dom"
import { useState, useEffect } from "react";
import "./MyNavbar.css";

function MyNavbar({ onScrollChange }) {

    const [isScroll, setIsscroll] = useState(false);

    const onScroll = () => {
        if (window.scrollY >= 150) {
            setIsscroll(true);
        } else {
            setIsscroll(false);
        }
    };

    useEffect(() => {
        onScrollChange(isScroll)
    }, [isScroll, onScrollChange]);

    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    })


    return (
        <>
            {isScroll ? (
                <Row className="fixed-top w-100 fs-xs">
                    <Navbar bg="light" variant="light" expand="lg" className="w-100 fixed-top py-2 ">
                        <Container className="d-flex justify-content-between align-items-center ">
                            <Navbar.Brand href="/" >
                                <div style={{ width: 33 }} >
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin logo" className="w-100" />
                                </div>
                            </Navbar.Brand>

                            <Form className="d-none d-lg-block" style={{ marginLeft: "-150px" }}>
                                <Form.Group className="d-flex align-items-center">
                                    <Search className="me-2 navbar-icon" size={20} />
                                    <FormControl type="text" placeholder="Cerca" className="w-100 search-background " />
                                </Form.Group>
                            </Form>

                            <div className="d-flex align-items-center" >
                                <div className="navbar-icon-container text-center mx-3 navbar-icon">
                                    <HouseDoorFill size={20}  />
                                    <div>Home</div>
                                </div>

                                <div className="navbar-icon-container text-center mx-3  navbar-icon">
                                    <PeopleFill size={20} />
                                    <div>Rete</div>
                                </div>

                                <div className="navbar-icon-container text-center mx-3 navbar-icon">
                                    <BriefcaseFill size={20}/>
                                    <div>Lavoro</div>
                                </div>

                                <div className="navbar-icon-container text-center mx-3 navbar-icon">
                                    <ChatDotsFill size={20} />
                                    <div>Messaggistica</div>
                                </div>

                                <div className="navbar-icon-container text-center mx-3 me-5 navbar-icon">
                                    <BellFill size={20} />
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
                                            <div className="mx-2 text-dark">
                                                <i className="bi bi-grid"></i>
                                                <div>Per le aziende</div>
                                            </div>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="custom-dropdown-menu">
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <div className="navbar-icon-container text-center d-none d-lg-block mx-2 mt-2  text-decoration-underline fs-xs">
                                        <a href="#" className="text-premium-color">Passa a Premium per 0 <br /> EUR</a>
                                    </div>
                                </div>

                            </div>

                        </Container>
                    </Navbar>
                    <Navbar
                        className="sticky-top border border-start-0 border-end-0 second-nav w-100 py-2"
                        id="navbar-body"
                        bg="white"
                        expand="lg"
                    >
                        <Container className="nav_scroll">
                            <div>
                                {/* <Link to="/">
                              <img
                                  className="navbar-icon-container d-none d-md-block"
                                  id="navbar-logo"
                                  src="{url}"
                                  alt="linkedin-logo"
                                  style={{
                                      borderRadius: "50%",
                                      width: "40px",
                                      height: "40px",
                                  }}
                              />
                          </Link> */}
                                <div>
                                    <strong>
                                        {" "}
                                        Nome Cognome
                                    </strong>
                                    <br />
                                    <small> Titolo Front-End Developer</small>
                                </div>
                            </div>

                            <div className="d-flex">
                                <Button variant="light" className=" bg-light text-secondary text-muted rounded-5 me-3 fw-semibold">
                                    Altro
                                </Button>
                                <Button variant="light" className="bg-light text-primary fw-semibold rounded-5 me-3">
                                    Aggiungi sezione del profilo
                                </Button>
                                <Button variant="primary" className="btn-primary rounded-5 fw-semibold">
                                    Disponibile per
                                </Button>
                            </div>
                        </Container>
                    </Navbar>
                </Row>

            ) : (
                <Row className="fixed-top w-100 fs-xs no-scroll-margin">
                    <Navbar bg="light" variant="light" expand="lg" className="w-100 fixed-top py-2 col">
                        <Container className="d-flex justify-content-between align-items-center ">
                            <Navbar.Brand href="/" >
                                <div style={{ width: 33 }} >
                                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="linkedin logo" className="w-100" />
                                </div>

                            </Navbar.Brand>

                            <Form className="d-none d-lg-block" style={{ marginLeft: "-150px" }}>
                                <Form.Group className="d-flex align-items-center">
                                    <Search className="me-2 navbar-icon" size={20} />
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
                                            <div className="mx-2 text-dark">
                                                <i className="bi bi-grid"></i>
                                                <div>Per le aziende</div>
                                            </div>
                                        </Dropdown.Toggle>
                                        <Dropdown.Menu className="custom-dropdown-menu">
                                        </Dropdown.Menu>
                                    </Dropdown>

                                    <div className="navbar-icon-container text-center d-none d-lg-block mx-2 mt-2  text-decoration-underline fs-xs">
                                        <a href="#" className="text-premium-color">Passa a Premium per 0 <br /> EUR</a>
                                    </div>
                                </div>
                            </div>
                        </Container>
                    </Navbar>
                </Row>
            )}
        </>
    );
}

export default MyNavbar;
