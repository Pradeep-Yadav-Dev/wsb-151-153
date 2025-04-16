import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Comman/Header'
import Footer from './Comman/Footer'
import { Col, Container, Row } from 'react-bootstrap'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    

    <Container fluid className='bg-info my-3 ' >
        <Container className='bg-danger' >
          <Row  >
          
              <Col lg={9} xs={3} > <img src='https://packshifts.in/images/office-shifting.jpg' className='img-fluid'/> </Col>

              <Col lg={3} xs={9}> <img src='https://packshifts.in/images/office-shifting.jpg' className='img-fluid'/> </Col>

              {/* <Col> <img src='https://packshifts.in/images/office-shifting.jpg' className='img-fluid'/> </Col>

              <Col> <img src='https://packshifts.in/images/office-shifting.jpg' className='img-fluid'/> </Col>

              <Col> <img src='https://packshifts.in/images/office-shifting.jpg' className='img-fluid'/> </Col>

              <Col> <img src='https://packshifts.in/images/office-shifting.jpg' className='img-fluid'/> </Col> */}

          </Row>
        </Container>
    </Container>



    <Footer/>
     
    </>
  )
}

export default App
