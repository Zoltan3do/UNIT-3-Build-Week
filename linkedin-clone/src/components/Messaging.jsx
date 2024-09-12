import  { useState } from "react";
import { Container, Row, Col, ListGroup, InputGroup, FormControl, Button, Form, Image, DropdownButton, Dropdown } from "react-bootstrap";
import { BsThreeDots, BsEmojiSmile, BsSearch } from "react-icons/bs";
import { AiOutlineSend } from "react-icons/ai";
import './Messaging.css'; 

const initialConversations = [
  {
    id: 1,
    name: "Diana F",
    position: "Junior FullStack",
    messages: [
      { sender: "Diana F", text: "Ciao, hai fatto il merge." },
      { sender: "Tu", text: "yep" },
    ],
    imageUrl: "https://placedog.net/500", 
  },
  {
    id: 2,
    name: "Manuel B",
    position: "Junior FullStack",
    messages: [
      { sender: "Manuel B", text: "Hai visto l'ultimo aggiornamento?" },
      { sender: "Tu", text: "Sì, è perfetto" },
    ],
    imageUrl: "https://placedog.net/600",
  },
];

const Messaging = () => {
  const [conversations, setConversations] = useState(initialConversations);
  const [selectedConversationId, setSelectedConversationId] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const selectedConversation = conversations.find(
    (conv) => conv.id === selectedConversationId
  );

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    const updatedConversations = conversations.map((conv) => {
      if (conv.id === selectedConversationId) {
        return {
          ...conv,
          messages: [...conv.messages, { sender: "Tu", text: newMessage }],
        };
      }
      return conv;
    });
    setConversations(updatedConversations);
    setNewMessage("");
  };

  const filteredConversations = conversations.filter((conversation) =>
    conversation.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <header></header>
      <Container fluid className="messaging-container">
        <Row className="h-100">
          <Col md={4} className="border-end p-3">
            <div className="d-flex justify-content-start align-items-center mb-3">
              <h5>Messaggistica</h5>
              <InputGroup style={{ width: "40%" }}>
                <InputGroup.Text>
                  <BsSearch />
                </InputGroup.Text>
                <FormControl
                  placeholder="Cerca messaggi"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </InputGroup>
            </div>

            <div className="mb-3">
              <DropdownButton id="dropdown-basic-button" title="Posta in arrivo" variant="success">
                <Dropdown.Item href="#/action-1">Posta in arrivo</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Posta Indesiderata</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Archiviati</Dropdown.Item>
              </DropdownButton> 
            </div>

            <ListGroup variant="flush" className="conversation-list">
              {filteredConversations.map((conversation) => (
                <ListGroup.Item
                  key={conversation.id}
                  active={conversation.id === selectedConversationId}
                  onClick={() => setSelectedConversationId(conversation.id)}
                  className="conversation-item"
                >
                  <div className="d-flex align-items-center">
                    <Image src={conversation.imageUrl} roundedCircle width={40} height={40} className="me-2" />
                    <div>
                      <strong>{conversation.name}</strong>
                      <br />
                      <small>{conversation.messages[conversation.messages.length - 1]?.text.slice(0, 30)}...</small>
                    </div>
                  </div>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>

          <Col md={8} className="d-flex flex-column p-3">
            <div className="d-flex justify-content-start">
              <Button variant="outline-secondary rounded-pill me-2 ">Da leggere</Button>
              <Button variant="outline-secondary rounded-pill me-2">I miei collegamenti</Button>
              <Button variant="outline-secondary rounded-pill me-2">Messaggi InMail</Button>
              <Button variant="outline-secondary rounded-pill me-2">Contrassegnati con una stella</Button>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center">
                <Image src={selectedConversation?.imageUrl} roundedCircle width={50} height={50} className="me-3" />
                <div>
                  <h5>{selectedConversation?.name}</h5>
                  <small>{selectedConversation?.position}</small>
                </div>
              </div>
              <BsThreeDots size={20} />
            </div>

            <div className="chat-body flex-grow-1 border rounded p-3 overflow-auto">
              {selectedConversation?.messages.map((message, index) => (
                <div key={index} className={`message ${message.sender === "Tu" ? "text-end" : ""}`}>
                  <strong>{message.sender}</strong>
                  <p className="message-text">{message.text}</p>
                </div>
              ))}
            </div>

            <Form
              className="mt-3"
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
            >
              <InputGroup>
                <InputGroup.Text>
                  <BsEmojiSmile />
                </InputGroup.Text>
                <FormControl
                  placeholder="Scrivi un messaggio..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button type="submit" variant="success">
                  <AiOutlineSend />
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Messaging;
