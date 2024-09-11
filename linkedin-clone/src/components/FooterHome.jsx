import { Row, Col, Container, Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./FooterHome.css";

const FooterHome = () => (
  <footer className="footixHome py-3" style={{ maxWidth: "350px", fontSize: "1.1rem" }}>
    <Container fluid>
      <Row>
        <Col md={6} className="mb-2">
          <ul className="list-unstyled">
            <li><a href="https://about.linkedin.com/" className="text-muted text-decoration-none">Informazioni</a></li>
            <li><a href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_search_srp_all" className="text-muted text-decoration-none">Centro assistenza</a></li>
          </ul>
        </Col>
        <Col md={6} className="mb-2">
          <ul className="list-unstyled">
            <li><a href="https://www.linkedin.com/accessibility" className="text-muted text-decoration-none">Accessibilità</a></li>
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="text-muted" id="dropdown-privacy">
                  Privacy e condizioni
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="https://www.linkedin.com/legal/privacy-policy">Informativa sulla privacy</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/legal/cookie-policy">Politica sui cookie</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/legal/user-agreement">Condizioni d'uso</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="text-muted mb-2">
          <a href="https://www.linkedin.com/help/linkedin/answer/a1342443/?lang=it" className="text-muted text-decoration-none">Opzioni per gli annunci pubblicitari</a>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="mb-2">
          <ul className="list-unstyled">
            <li><a href="https://www.linkedin.com/advertising" className="text-muted text-decoration-none">Pubblicità</a></li>
            <li><a href="/" className="text-muted text-decoration-none">Scarica l'app LinkedIn</a></li>
          </ul>
        </Col>
        <Col md={6} className="mb-2">
          <ul className="list-unstyled">
            <li>
              <Dropdown>
                <Dropdown.Toggle variant="light" className="text-muted" id="dropdown-business-services">
                  Servizi alle aziende
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="https://www.linkedin.com/talent-solutions">Talent Solutions</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/sales-solutions">Sales Solutions</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/marketing-solutions">Marketing Solutions</Dropdown.Item>
                  <Dropdown.Item href="https://www.linkedin.com/learning">LinkedIn Learning</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </li>
            <li><a href="/" className="text-muted text-decoration-none">Altro</a></li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col className="text-muted d-flex align-items-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="linkedin logo"
            style={{ width: 22 }}
          />
          <p className="mb-0 ms-2">LinkedIn Corporation © {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Container>
  </footer>
);

export default FooterHome;
