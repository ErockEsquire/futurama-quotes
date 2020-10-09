import React, { useState, useEffect } from 'react';
import './App.scss';
import Intro from './components/intro'
import Quotes from './components/quote'

function App() {
  
  const [show, setShow] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), 3000)
  }, [setShow])

  return (
    <div className="App">
      <main className="main_elem">

        <Intro/>
        {show && <Quotes/>}
        
      </main>
    </div>
  );
}

export default App;