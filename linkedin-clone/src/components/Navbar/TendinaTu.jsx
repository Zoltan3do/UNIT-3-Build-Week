import { ListGroup } from "react-bootstrap";
import "./TendinaTu.css"

function TendinaTu() {
    return (
        <ListGroup className="custom-list-group">
            <ListGroup.Item className="custom-list-group-item">
                <div className="d-flex align-items-center">
                    <div className="profile-pic-container">
                        <img src="../assets/imgs/default-profile-pic.png" alt="profile" className="profile-pic" />
                    </div>
                    <div className="ms-3">
                        <h5>Nome Cognome</h5>
                        <p>descrizione</p>
                    </div>
                </div>
                <div>
                    <p>Visualizza profilo</p>
                </div>
            </ListGroup.Item>
            <ListGroup.Item className="custom-list-group-item">
                <h5>Account</h5>
                <p className="my-0">Impostazioni e privacy</p>
                <p className="my-1">Guida</p>
                <p className="my-0">Lingua</p>
                <hr />
            </ListGroup.Item>
            <ListGroup.Item className="custom-list-group-item">
                <h5>Gestisci</h5>
                <p className="my-0">Post e attività</p>
                <p className="my-1 truncate-text">Account per la pubblicazione di offerte di lavoro</p>
                <p className="my-0">Lingua</p>
                <hr />
            </ListGroup.Item>
            <ListGroup.Item className="custom-list-group-item">
                <p className="my-0">Esci</p>
            </ListGroup.Item>
        </ListGroup>
    );
}

export default TendinaTu;
