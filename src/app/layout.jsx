import React from 'react';

export const Layout = () => {
  <div>
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Redux 101</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text></Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
    <Container>
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
        <Tab eventKey="home" title="Home">
          <Sonnet />
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <Sonnet />
        </Tab>
        <Tab eventKey="contact" title="Contact" disabled>
          <Sonnet />
        </Tab>
      </Tabs>
    </Container>
  </div>;
};
