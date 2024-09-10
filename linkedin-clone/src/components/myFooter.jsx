import React from "react";
import { Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const MyFooter = () => (
  <footer className="bg-light text-secondary py-2">
    <Row className="text-center">
      <Col xs={{ span: 6, offset: 3 }}>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-4 g-1">
          <Col className="mb-2">
            <p>
              <a href="https://about.linkedin.com/it-it" className=" text-secondary">
                Informazioni
              </a>
            </p>
            <p>
              <a href="https://it.linkedin.com/legal/professional-community-policies?" className=" text-secondary">
                Informativa sulla community professionale
              </a>
            </p>
            <p>
              <a href="/" className=" text-secondary">
                Privacy e condizioni
              </a>
            </p>
            <p>
              <a href="https://business.linkedin.com/sales-solutions?trk=flagship_nav&veh=li-footer-lss-control&src=li-footer" className=" text-secondary">
                Sales Solutions
              </a>
            </p>
            <p>
              <a href="/" className=" text-secondary">
                Centro sicurezza
              </a>
            </p>
          </Col>
          <Col className="mb-2">
            <p>
              <a href="https://it.linkedin.com/accessibility?" className=" text-secondary">
                Accessibilità
              </a>
            </p>
            <p>
              <a href="https://careers.linkedin.com/" className=" text-secondary">
                Carriera
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/help/linkedin/answer/a1342443/?lang=it" className=" text-secondary">
                Opzioni per gli annunci pubblicitari
              </a>
            </p>
            <p>
              <a href="https://mobile.linkedin.com/it-it" className=" text-secondary">
                Mobile
              </a>
            </p>
          </Col>
          <Col className="mb-2">
            <p>
              <a href="https://business.linkedin.com/it-it/talent-solutions?trk=flagship_nav&veh=li-footer-lts-control-it-it&src=li-footer" className=" text-secondary">
                Talent Solutions
              </a>
            </p>
            <p>
              <a href="https://business.linkedin.com/it-it/marketing-solutions?trk=n_nav_lms_f&src=li-footer" className=" text-secondary">
                Soluzioni di marketing
              </a>
            </p>
            <p>
              <a href="https://business.linkedin.com/it-it/marketing-solutions/ads?trk=n_nav_ads_f" className=" text-secondary">
                Pubblicità
              </a>
            </p>
            <p>
              <a href="https://premium.linkedin.com/business-features?trk=PREM-3&src=li-footer&mboxSession=2eafd89ae1744120bed0f3115a13d3e6&adobe_mc_sdid=SDID%3D05C8F0C18DC1D243-266E163B203A86FE%7CMCORGID%3D14215E3D5995C57C0A495C55%40AdobeOrg%7CTS%3D1725883898&adobe_mc_ref=https%3A%2F%2Fwww.linkedin.com%2F" className=" text-secondary">
                Piccole imprese
              </a>
            </p>
          </Col>
          <Col className="mb-2">
            <p>
              <strong>Domande?</strong>
              <a href="https://www.linkedin.com/help/linkedin?trk=d_flagship3_search_srp_all" className=" text-secondary">
                Visita il nostro Centro assistenza
              </a>
            </p>
            <p>
              <strong>Gestisci il tuo account e la tua privacy</strong>
              <a href="https://www.linkedin.com/mypreferences/d/categories/account" className=" text-secondary">  
                Vai alle impostazioni
              </a> 
            </p>
            <p>
              <strong>Trasparenza sui contenuti consigliati</strong>
              <a href="https://www.linkedin.com/help/linkedin/answer/a1339724" className=" text-secondary">
                Scopri di più sui contenuti consigliati
              </a>
            </p>
          </Col>
          <Col xs={12} className="text-left mb-2">
            <div className="dropdown">
              <button
                className="btn btn-sm btn-outline-light dropdown-toggle rounded-0"
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ fontSize: "0.75rem" }}
              >
                Seleziona Lingua
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    Italiano
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Inglese
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Spagnolo
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Francese
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Tedesco
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Russo
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Giapponese
                  </a>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <Row>
          <Col
            xs={12}
            className="text-left mt-2 mb-0"
            style={{ fontSize: "0.75rem" }}
          >
            LinkedIn Corporation © {new Date().getFullYear()} .
          </Col>
        </Row>
      </Col>
    </Row>
  </footer>
);

export default MyFooter;
