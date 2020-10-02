import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { PlainReactDashboard } from '../dashboard';
import './app.scss';

export const App = () => {
  return (
    <div className="app">
      <header className="app-header">Redux 101</header>
      <Tabs defaultActiveKey="plainReact" id="uncontrolled-tab-example">
        <Tab eventKey="plainReact" title="Plain React">
          <div className="dashboard-section">
            <PlainReactDashboard />
          </div>
        </Tab>
        <Tab eventKey="reduxClass" title="Using Redux (Class Based)">
          <div className="dashboard-section">
            <PlainReactDashboard />
          </div>
        </Tab>
        <Tab eventKey="reduxHooks" title="Using Redux (with Hooks)">
          <div className="dashboard-section">
            <PlainReactDashboard />
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};
