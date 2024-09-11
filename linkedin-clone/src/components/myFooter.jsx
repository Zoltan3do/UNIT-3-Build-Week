
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./MyFooter.css";

const MyFooter = () => (
  <footer className="bg-light text-light py-4">
    <Container fluid>
    <Row className="text-center">
      <Col xs={{ span: 10, offset: 1 }}>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
          <Col>
            <p className="mb-2">
              <a href="https://about.linkedin.com/it-it" className="text-muted text-decoration-none">
                Informazioni
              </a>
            </p>
            <p className="mb-2">
              <a href="https://it.linkedin.com/legal/professional-community-policies?" className="text-muted text-decoration-none">
                Informativa sulla community professionale
              </a>
            </p>
            <p className="mb-2">
              <a href="/" className="text-muted text-decoration-none">
                Privacy e condizioni
              </a>
            </p>
            <p className="mb-2">
              <a href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer" className="text-muted text-decoration-none">
                Sales Solutions
              </a>
            </p>
            <p className="mb-2">
              <a href="/" className="text-muted text-decoration-none">
                Centro sicurezza
              </a>
            </p>
          </Col>

            <Col>
              <p className="mb-2">
                <a href="https://it.linkedin.com/accessibility?" className="text-muted text-decoration-none">
                  Accessibilità
                </a>
              </p>
              <p className="mb-2">
                <a href="https://careers.linkedin.com/" className="text-muted text-decoration-none">
                  Carriera
                </a>
              </p>
              <p className="mb-2">
                <a href="https://www.linkedin.com/help/linkedin/answer/a1342443/?lang=it" className="text-muted text-decoration-none">
                  Opzioni per gli annunci pubblicitari
                </a>
              </p>
              <p className="mb-2">
                <a href="https://mobile.linkedin.com/it-it" className="text-muted text-decoration-none">
                  Mobile
                </a>
              </p>
            </Col>

            <Col>
              <p className="mb-2">
                <a href="https://business.linkedin.com/it-it/talent-solutions?trk=flagship_nav&veh=li-footer-lts-control-it-it&src=li-footer" className="text-muted text-decoration-none">
                  Talent Solutions
                </a>
              </p>
              <p className="mb-2">
                <a href="https://business.linkedin.com/it-it/marketing-solutions?trk=n_nav_lms_f&src=li-footer" className="text-muted text-decoration-none">
                  Soluzioni di marketing
                </a>
              </p>
              <p className="mb-2">
                <a href="https://business.linkedin.com/it-it/marketing-solutions/ads?trk=n_nav_ads_f" className="text-muted text-decoration-none">
                  Pubblicità
                </a>
              </p>
              <p className="mb-2">
                <a href="https://premium.linkedin.com/business-features?trk=PREM-3&src=li-footer" className="text-muted text-decoration-none">
                  Piccole imprese
                </a>
              </p>
            </Col>

            <Col>
              <p className="mb-2">
                <strong className="text-secondary">Domande?</strong>
                <a href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_search_srp_all" className="text-muted text-decoration-none">
                  Visita il nostro Centro assistenza
                </a>
              </p>
              <p className="mb-2">
                <strong className="text-secondary">Gestisci il tuo account e la tua privacy</strong>
                <a href="https://www.linkedin.com/mypreferences/d/categories/account" className="text-muted text-decoration-none">
                  Vai alle impostazioni
                </a>
              </p>
              <p className="mb-2">
                <strong className="text-secondary">Trasparenza sui contenuti consigliati</strong>
                <a href="https://www.linkedin.com/help/linkedin/answer/a1339724" className="text-muted text-decoration-none">
                  Scopri di più sui contenuti consigliati
                </a>
              </p>
            </Col>

            <Col className="d-flex justify-content-start">
              <div className="dropdown">
                <button
                  className="btn btn-outline-secondary btn-sm dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Seleziona Lingua
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li><a className="dropdown-item" href="#">Italiano</a></li>
                  <li><a className="dropdown-item" href="#">Inglese</a></li>
                  <li><a className="dropdown-item" href="#">Spagnolo</a></li>
                  <li><a className="dropdown-item" href="#">Francese</a></li>
                  <li><a className="dropdown-item" href="#">Tedesco</a></li>
                  <li><a className="dropdown-item" href="#">Russo</a></li>
                  <li><a className="dropdown-item" href="#">Giapponese</a></li>
                </ul>
              </div>
            </Col>
          </Row>

        <Row>
          <Col xs={12} className="text-start mt-3" style={{ fontSize: "0.85rem" }}>
            LinkedIn Corporation © {new Date().getFullYear()}
          </Col>
        </Row>
      </Col>
    </Row>
    </Container>
  </footer>
);

export default MyFooter;
