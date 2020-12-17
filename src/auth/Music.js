import React, { useState } from 'react'
import './Music.css'
import {Card, Button, Container, Col, Row} from 'react-bootstrap'
import { Modal } from 'antd';
import { Link } from 'react-router-dom';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';

function  Music() {

    
        const [isModalVisible, setIsModalVisible] = useState(false);
      
        const showModal = () => {
          setIsModalVisible(true);
        };
      
        const handleOk = () => {
          setIsModalVisible(false);
        };
      
        const handleCancel = () => {
          setIsModalVisible(false);
        };




    return (
       <div>
            <div className="music">
            <h1>courses</h1>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />

        <div className="containers">
        <Container>
  
  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://images.unsplash.com/photo-1568219656418-15c329312bf1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8dGFibGF8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
  <Card.Body>
    <Card.Title style={{float:"right", fontFamily:"cursive", color:"red",textShadow: "1px 2px black"}}>Tabla</Card.Title>
    <Card.Text style={{float:"left", fontFamily:"cursive"}}>
    The Tabla[nb 1] is a pair of twin hand drums from the Indian subcontinent. Since the 18th century, tabla has been the principal percussion instrument in Hindustani classical music,[3] where it may be played solo, as accompaniment with other instrument and vocals, and as a part of larger ensembles.
    </Card.Text>
    <Button onClick={showModal} style={{fontFamily: "cursive"}} variant="primary">Go to description</Button>
    <br />
    <Link to="/register">
    <Button variant="danger">Register</Button>
    </Link>
    <Modal
        title="Tabla"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>Course description</h3>
        <h6>4.3 🌟🌟🌟🌟🌟(8 ratings)  2,198 students</h6>
        <p>Created by <strong>Ayush agarwal</strong></p>
        <p>Last updated 3/2016</p>
        <p>English</p>
        <br />
        <br />
        <br />
        <h1>₹8,640</h1>
      </Modal>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img width="18rem" height="195px" variant="top" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/500769/1024097/main-image" />
  <Card.Body>
    <Card.Title style={{float:"right", fontFamily:"cursive", color:"red",textShadow: "1px 2px black"}}>Sarangi</Card.Title>
    <Card.Text style={{float:"left", fontFamily:"cursive"}}>
    A sarangi is a bowed stringed instrument with a skin-covered resonator (89.4.200). The typical sarangi is made by hand, usually from a single block of tun wood about 66 to 69 centimeters long (46.34.43). 
    </Card.Text>
    <Button onClick={showModal} style={{fontFamily: "cursive"}} variant="primary">Go to description</Button>
    <br />
    <Link to="/register">
    <Button variant="danger">Register</Button>
    </Link>
    <Modal
        title="Sarangi"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <h3>Course description</h3>
        <h6>4.3 🌟🌟🌟🌟🌟(8 ratings)  2,198 students</h6>
        <p>Created by <strong>Ayush agarwal</strong></p>
        <p>Last updated 3/2016</p>
        <p>English</p>
        <br />
        <br />
        <br />
        <h1>₹8,640</h1>
        
      </Modal>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" height="195px" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/502150/1024269/restricted" />
  <Card.Body>
    <Card.Title style={{float:"right", fontFamily:"cursive", color:"red",textShadow: "1px 2px black"}}>Sitar</Card.Title>
    <Card.Text style={{float:"left", fontFamily:"cursive"}}>
    The sitar is easily India’s most famous musical instrument overseas, having been popularized in the West by George Harrison of the Beatles, who studied with Ravi Shankar, one of the greatest sitarists of the twentieth century. The sitar has its roots in both the Persian setar as well as in the vina. Like many stringed instruments used in classical Indian music, the modern sitar (1999.399) has sympathetic strings that sound only when one of the primary strings is struck on the same note. 
    </Card.Text>
    <Button onClick={showModal} style={{fontFamily: "cursive"}} variant="primary">Go to description</Button>
    <br />
    <Link to="/register">
    <Button variant="danger">Register</Button>
    </Link>
    <Modal
        title="Sitar"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <h3>Course description</h3>
        <h6>4.3 🌟🌟🌟🌟🌟(8 ratings)  2,198 students</h6>
        <p>Created by <strong>Ayush agarwal</strong></p>
        <p>Last updated 3/2016</p>
        <p>English</p>
        <br />
        <br />
        <br />
        <h1>₹8,640</h1>
        
      </Modal>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>
        
      
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="containers">
        <Container>
  
  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" height="195px" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/500711/1024167/main-image" />
  <Card.Body>
    <Card.Title style={{float:"right", fontFamily:"cursive", color:"red",textShadow: "1px 2px black"}}>Dholak</Card.Title>
    <Card.Text style={{float:"left", fontFamily:"cursive"}}>
    Dholka is a city and municipality in the Ahmedabad District of the Indian state of Gujarat. It is the headquarters of Dholka Taluka, and is 48 km by road via National Highway 8A southwest of the city of Ahmedabad. Dholka has an average elevation of 17 metres (56 ft)..
    </Card.Text>
    <Button onClick={showModal} style={{fontFamily: "cursive"}} variant="primary">Go to description</Button>
    <br />
    <Link to="/register">
    <Button variant="danger">Register</Button>
    </Link>
    <Modal
        title="Dholak"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>Course description</h3>
        <h6>4.3 🌟🌟🌟🌟🌟(8 ratings)  2,198 students</h6>
        <p>Created by <strong>Ayush agarwal</strong></p>
        <p>Last updated 3/2016</p>
        <p>English</p>
        <br />
        <br />
        <br />
        <h1>₹8,640</h1>
      </Modal>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" height="195px" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/503301/1575284/restricted" />
  <Card.Body>
    <Card.Title style={{float:"right", fontFamily:"cursive", color:"red",textShadow: "1px 2px black"}}>Mrdangam</Card.Title>
    <Card.Text style={{float:"left", fontFamily:"cursive"}}>
    The Tabla[nb 1] is a pair of twin hand drums from the Indian subcontinent. Since the 18th century, tabla has been the principal percussion instrument in Hindustani classical music,[3] where it may be played solo, as accompaniment with other instrument and vocals, and as a part of larger ensembles.
    </Card.Text>
    <Button onClick={showModal} style={{fontFamily: "cursive"}} variant="primary">Go to description</Button>
    <br />
    <Link to="/register">
    <Button variant="danger">Register</Button>
    </Link>
    <Modal
        title="Mrdangam"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <h3>Course description</h3>
        <h6>4.3 🌟🌟🌟🌟🌟(8 ratings)  2,198 students</h6>
        <p>Created by <strong>Ayush agarwal</strong></p>
        <p>Last updated 3/2016</p>
        <p>English</p>
        <br />
        <br />
        <br />
        <h1>₹8,640</h1>
        
      </Modal>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" height="195px" src="https://collectionapi.metmuseum.org/api/collection/v1/iiif/503338/1023712/restricted" />
  <Card.Body>
    <Card.Title style={{float:"right", fontFamily:"cursive", color:"red",textShadow: "1px 2px black"}}>Tambura</Card.Title>
    <Card.Text style={{float:"left", fontFamily:"cursive"}}>
    The Tabla[nb 1] is a pair of twin hand drums from the Indian subcontinent. Since the 18th century, tabla has been the principal percussion instrument in Hindustani classical music,[3] where it may be played solo, as accompaniment with other instrument and vocals, and as a part of larger ensembles.
    </Card.Text>
    <Button onClick={showModal} style={{fontFamily: "cursive"}} variant="primary">Go to description</Button>
    <br />
    <Link to="/register">
    <Button variant="danger">Register</Button>
    </Link>
    <Modal
        title="Tambura"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <h3>Course description</h3>
        <h6>4.3 🌟🌟🌟🌟🌟(8 ratings)  2,198 students</h6>
        <p>Created by <strong>Ayush agarwal</strong></p>
        <p>Last updated 3/2016</p>
        <p>English</p>
        <br />
        <br />
        <br />
        <h1>₹8,640</h1>
        
      </Modal>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>
        
      
        </div>
        <br />
        <br />
        <br />
        <br />
        <div className="containers">
        <Container>
  
  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" height="195px" src="https://www.naxos.com/NewDesign/fintro.files/instru1.files/cello.jpg" />
  <Card.Body>
    <Card.Title style={{float:"right", fontFamily:"cursive", color:"red",textShadow: "1px 2px black"}}>Bowed Strings</Card.Title>
    <Card.Text style={{float:"left", fontFamily:"cursive"}}>
    
The four principle orchestral string instruments are (in descending order of overall pitch) the violins (usually divided into two sections, playing individual parts), the violas, the cellos and the double basses. Each have four strings arranged in order of pitch, can be played by means of a bow (arco) or plucked (pizzicato), but whereas the violin and viola are played with the instrument resting between the shoulder and the chin, the larger cello (or, to give it its full title, violoncello) is placed facing outwards between and slightly behind the knees, and the bulky double bass is played standing up or seated on a high stool.
    </Card.Text>
    <Button onClick={showModal} style={{fontFamily: "cursive"}} variant="primary">Go to description</Button>
    <br />
    <Link to="/register">
    <Button variant="danger">Register</Button>
    </Link>
    <Modal
        title="Bowed strings"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>Course description</h3>
        <h6>4.3 🌟🌟🌟🌟🌟(8 ratings)  2,198 students</h6>
        <p>Created by <strong>Ayush agarwal</strong></p>
        <p>Last updated 3/2016</p>
        <p>English</p>
        <br />
        <br />
        <br />
        <h1>₹8,640</h1>
      </Modal>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" height="195px" src="https://www.naxos.com/NewDesign/fintro.files/instru3.files/trumpet.jpg" />
  <Card.Body>
    <Card.Title style={{float:"right", fontFamily:"cursive", color:"red",textShadow: "1px 2px black"}}>French horn</Card.Title>
    <Card.Text style={{float:"left", fontFamily:"cursive"}}>
    another ancient instrument, descended from the use of animals' horns (hence the name) in pre-historic times. The modern instrument is the most outwardly complex, consisting of a basic tube, rounded into a compact shape culminating in a conical bore or bell, into which a series of valves are centrally set. Before the valve system had been developed, the changing of basic pitch was facilitated by the insertion of a variety of crooks which altered the length of the basic tube, and the changing of certain notes by holding the hand in a variety of subtly differentiated positions within the bell
    </Card.Text>
    <Button onClick={showModal} style={{fontFamily: "cursive"}} variant="primary">Go to description</Button>
    <br />
    <Link to="/register">
    <Button variant="danger">Register</Button>
    </Link>
    <Modal
        title="French horn"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <h3>Course description</h3>
        <h6>4.3 🌟🌟🌟🌟🌟(8 ratings)  2,198 students</h6>
        <p>Created by <strong>Ayush agarwal</strong></p>
        <p>Last updated 3/2016</p>
        <p>English</p>
        <br />
        <br />
        <br />
        <h1>₹8,640</h1>
        
      </Modal>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" height="195px" src="https://www.naxos.com/NewDesign/fintro.files/instru6.files/guitar.jpg" />
  <Card.Body>
    <Card.Title style={{float:"right", fontFamily:"cursive", color:"red",textShadow: "1px 2px black"}}>Guitar family</Card.Title>
    <Card.Text style={{float:"left", fontFamily:"cursive"}}>
    The 'classical' guitar is typically a Spanish-derived, six-stringed instrument played using a plectrum or the finger-nails, with frets set into the fingerboard. Popular music tends to use amplification for both six-stringed instruments and the four-string bass guitar. The guitar family gradually supplanted the lute which had come to prominence during the Renaissance.
    </Card.Text>
    <Button onClick={showModal} style={{fontFamily: "cursive"}} variant="primary">Go to description</Button>
    <br />
    <Link to="/register">
    <Button variant="danger">Register</Button>
    </Link>
    <Modal
        title="Our Music family"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h3>Course description</h3>
        <h6>4.3 🌟🌟🌟🌟🌟(8 ratings)  2,198 students</h6>
        <p>Created by <strong>Ayush agarwal</strong></p>
        <p>Last updated 3/2016</p>
        <p>English</p>
        <br />
        <br />
        <br />
        <h1>₹8,640</h1>
        
      </Modal>
  </Card.Body>
</Card>
    </Col>
  </Row>
</Container>
        
      
        </div>
        <br />
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

export default Music
