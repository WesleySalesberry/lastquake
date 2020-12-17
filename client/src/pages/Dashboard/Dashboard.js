import React, { useState } from 'react'
import { Container, Row, Image, Col, Tabs, Tab } from 'react-bootstrap'
import DisplayProfile from '../../component/Profile/DisplayProfile'

export const Dashboard = () => {
    const [key, setKey] = useState('profile')
    return (
       <Container fluid="sm" className="mt-3">
          
          <Row m={5}>
              <Col>
                <Tabs
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                >
                     <Tab eventKey="profile" title="Profile">
                        <DisplayProfile />
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
