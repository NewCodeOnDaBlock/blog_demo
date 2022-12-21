import React, { useState } from 'react';
import Footer from './components/Footer.jsx';
import GlobalStyle from './components/GlobalStyles.jsx';
import HomePage from './pages/HomePage.jsx';

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    if(isModalOpen) {
      setIsModalOpen(!isModalOpen)
    } 
  }


  return (
    <div className="App" onClick={closeModal}>
      <GlobalStyle />
      <HomePage
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <Footer />
    </div>
  );
}

export default App;
