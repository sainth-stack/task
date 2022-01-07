import { Component } from 'react'
import './App.css'
import { Container, Row, Col } from 'react-grid-system';

import ReactPlayer from 'react-player'
class App extends Component{
  render(){
  return    (
    <Container>
  <Row className='row'>
    <Col lg={6} sm={12}>
    <div className='container'>
    <ReactPlayer width={1000} height={500} className="responsive-iframe1" controls url='https://youtu.be/4UZrsTqkcW4'/>
    </div>
    </Col>
    <Col lg={6} sm={12}>
    <iframe className="responsive-iframe" width={890} height={1000} src="    https://stackblitz.com/edit/react-3l4tgp" className='frame'></iframe>
    </Col>
    
  </Row>
</Container>

 
  )
  

  }
}

export default App