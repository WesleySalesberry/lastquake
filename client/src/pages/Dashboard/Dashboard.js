import React, { useState } from 'react'
import { Container, Row, Image, Col, Tabs, Tab, TabsContainer } from 'react-bootstrap'
import TabContainer from 'react-bootstrap/TabContainer'

export const Dashboard = () => {
    const [key, setKey] = useState('home')
    return (
       <Container>
          <Row className="justify-content-md-center">
              <Col xs={6} md={4}>
                <Image 
                    src="https://source.unsplash.com/random" 
                    thumbnail 
                    className="mb-3"
                    height={20}
                />
              </Col>
          </Row>
          <Row m={3}>
              <Col>
                <Tabs
                     
                     activeKey={key}
                     onSelect={(k) => setKey(k)}
                >
                     <Tab eventKey="home" title="Home">
                         <h1>Home</h1>
                     </Tab>
                      <Tab eventKey="profile" title="Profile">
                         <h1>Profile</h1>
                     </Tab>
                     <Tab eventKey="messages" title="Messages">
                         <h1>Messages</h1>
                     </Tab>
                     <Tab eventKey="mentions" title="Mentions">
                         <h1>Mentions</h1>
                     </Tab>
                    
                </Tabs>
              </Col>
          </Row>
       </Container>
    )
}
