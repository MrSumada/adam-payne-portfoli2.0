import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer';
import About from './components/About';



function App() {

  const [categories] = useState([
    {
      name: 'about me',
      description: 'A description of web designer, Adam Payne',
    },
    { name: 'portfolio', description: 'Portraits of people in my life' },
    { name: 'resume', description: 'Delicious delicacies' },
    { name: 'contact', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div className='container'>
      <Nav />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
