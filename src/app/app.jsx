import React from 'react';
import './app.scss';
import { PrDashboard } from '../dashboard';

export const App = () => {
  return (
    <div className="app">
      <header className="app-header">Redux 101</header>
      <Tabs defaultActiveKey="plainReact" id="uncontrolled-tab-example">
        <Tab eventKey="plainReact" title="Plain React">
          <PrDashboard />
        </Tab>
        <Tab eventKey="reduxClass" title="Using Redux (Class Based)"></Tab>
        <Tab eventKey="reduxHooks" title="Using Redux (with Hooks)" disabled></Tab>
      </Tabs>
    </div>
  );
};
