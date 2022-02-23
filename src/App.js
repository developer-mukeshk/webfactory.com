import React from 'react';

import Header from './masterLayout/Header';
import Footer from './masterLayout/Footer';
import LoadTemplate from './masterLayout/LoadTemplate';

import './assets/css/style.css';
import 'font-awesome/css/font-awesome.min.css';

function App() {
  return (
    <React.Fragment>
      <div className="wrapper">
        <Header />
        <LoadTemplate />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
