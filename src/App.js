import { Component } from 'react'
import './App.css'
import VideoPlayer from './components/videoPlayer';
import Video from './components/video';
import Stack from './components/stackBlitz';
import { Container, Row, Col } from 'react-grid-system';

import ReactPlayer from 'react-player/youtube'
class App extends Component {
  render() {
    return (
      <Container>
        <Row className='row'>
          <Col lg={6} sm={12}>
            <div className='container'>
              <Video/>
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <Stack/>
          </Col>

        </Row>
      </Container>


    )


  }
}

export default App