import MyNavbar from './components/Navbar/MyNavbar'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import MainSidebar from './components/MainSidebar';
import { Col, Container, Row } from 'react-bootstrap';
import MyFooter from './components/myFooter';



function App() {

  const [isScrollFromChild, setIsScrollFromChild] = useState(false);

  // Funzione che riceve lo stato dal figlio
  const handleScrollChange = (newScrollState) => {
    setIsScrollFromChild(newScrollState);
  };


  return (
    <>
      {/* <div className='animate__animated animate__hinge'> */}
   
      <MyNavbar onScrollChange={handleScrollChange} />
      <Container className='px-5'>
      <Row >
      <Col md={8} className='flex-grow-1'>
    
      <div className={!isScrollFromChild ? "no-scroll-margin" : "scroll-margin"}>
       {/* <Profile/>*/}
      </div>
     
      </Col>
      {/* </div> */}
      <Col md={3}>
    <MainSidebar/>
    </Col>
    </Row>
    </Container>
    <MyFooter/>
    </>
  )
}

export default App
