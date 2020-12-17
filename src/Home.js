import {Carousel, Col, Container, Item, Row} from 'react-bootstrap'
import React from 'react'
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';
import './Home.css'
import { Link } from 'react-router-dom'
function Home() {
    
    return (
       <div>
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100 "
      style={{height:"550px", backgroundPosition:"center"}}
      src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&auto=format&fit=crop&w=500&q=60"
      alt="First slide"
    />
    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height:"550px", backgroundPosition:"center"}}
      src="https://images.unsplash.com/photo-1474959783111-a0f551bdad25?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8c29uZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      style={{height:"550px", backgroundPosition:"center"}}
      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c29uZ3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
      alt="Third slide"
    />

    <Carousel.Caption>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    <br />
    <br />
    <br />
    <br />
    <br />
    <div>

    <Container >
  <Row>
    <Col>
        <img style={{height:"450px", boxShadow: "20px 20px grey" ,objectFit: "contain", borderRadius: "25px", border:"2px solid black"}} alt="not found" src="data:image/jpeg;base64,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" />
    </Col>
    <Col style={{backgroundColor: "lightgreen" , borderRadius: "100px"}}>
        <h1 style={{marginLeft: "180px"}}>About us</h1>
        <p>sangitech is an edtech platform for music

SanGi Tech will let people learn Music from their Home with affordable Rates

No need to worry about quality of learning Sangitech interactive UI and Playground mode will try to mimic similar to the physical 

 It will be a vitamin as it improves the current methodology of teaching music. 

SangiTech will use customizations over existing video communication solutions to specifically use it for Music</p>
        </Col>
  </Row>
 
</Container>


    </div>
    <br />
     <br />
      <br />
    
    <Link to="/music">
    <div className="but" >
    <button>Search here for music course</button>
    </div>
    </Link>
    <br />
    <br />
    <br />
    
    <div>
    <Footer
    columns={[
      {
        icon: (
          <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
        ),
        title: 'copyright 2020.',
        url: '',
        description: '',
        openExternal: true,
      },
    ]}
    bottom="Made with ❤️ by Ayush agarwal"
  />
    </div>

       </div>
  
    )
}

export default Home
