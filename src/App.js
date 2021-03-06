import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Projects from './components/Projects';



function App() {

  const [categories] = useState([
    {
      name: 'About Me',
      description: 'A description of web designer, Adam Payne',
    },
    { name: 'Portfolio', description: 'Some projects from Adam Payne' },
    { name: 'Resume', description:"'Adam's skills" },
    { name: 'Contact', description: 'Reach out to Adam' },
  ]);

  const [currentPage, setCurrentPage] = useState('Projects');

  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);


  return (
    <div className='container'>
      <Nav 
        categories={categories}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
