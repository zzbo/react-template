import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './App.scss';

function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
      <div className="main">
        Main
      </div>
      <Footer />
    </div>
  );
}

export default App;
