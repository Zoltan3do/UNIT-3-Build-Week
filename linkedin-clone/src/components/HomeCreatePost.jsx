import { useState } from 'react';
import { Form, Button, Modal, Alert } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { createHomePost } from '../redux/actions/homePostAction';

const HomeCreatePost = () => {
    const [showHomeModal, setShowHomeModal] = useState(false);
    const [postHomeContent, setPostHomeContent] = useState('');
    const [alertMessage, setAlertMessage] = useState(null);
    const [alertVariant, setAlertVariant] = useState('');
    const user = useSelector((state) => state.profile.user); 
    console.log('user', user)
    const dispatch = useDispatch();

    const handleCreatePost = () => {
        if (postHomeContent) {
            dispatch(createHomePost(postHomeContent))
                .then(() => {
                    setAlertMessage('Il post è stato creato con successo!');
                    setAlertVariant('success');
                })
                .catch(() => {
                    setAlertMessage('Si è verificato un errore nella creazione del post.');
                    setAlertVariant('danger');
                });
            setPostHomeContent('');
            setShowHomeModal(false);
        } else {
            setAlertMessage('Il contenuto del post non può essere vuoto.');
            setAlertVariant('warning');
        }
    };

    return (
        <div className="p-3 mb-4" style={{ marginTop: "100px" }}>
            <div className="d-flex align-items-center">
                {/*} <img src={user.avatar} alt="avatar" className="rounded-circle me-2" style={{ width: '40px', height: '40px' }} />*/}
                <Button variant="light" onClick={() => setShowHomeModal(true)} className="w-100 text-start">
                    Crea un post
                </Button>
            </div>
            <div className="d-flex justify-content-between mt-3">
                <Button variant="outline-primary">
                    <i className="bi bi-image"></i> Contenuti multimediali
                </Button>
                <Button variant="outline-success">
                    <i className="bi bi-calendar-event"></i> Evento
                </Button>
                <Button variant="outline-danger">
                    <i className="bi bi-file-earmark-text"></i> Scrivi un articolo
                </Button>
            </div>

            {/* Alert per mostrare messaggi di successo o errore */}
            {alertMessage && (
                <Alert variant={alertVariant} onClose={() => setAlertMessage(null)} dismissible>
                    {alertMessage}
                </Alert>
            )}

            <Modal show={showHomeModal} onHide={() => setShowHomeModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Crea un post</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="postContent">
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Cosa vuoi condividere?"
                                value={postHomeContent}
                                onChange={(e) => setPostHomeContent(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowHomeModal(false)}>
                        Annulla
                    </Button>
                    <Button variant="primary" onClick={handleCreatePost}>
                        Pubblica
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default HomeCreatePost;

