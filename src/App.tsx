import React, { useState, useEffect } from 'react';
import './App.scss';
import Setting from './components/setting'
import Quotes from './components/quote'

function App() {
  
  const [show, setShow] = useState(false)
  const [ship, setShip] = useState(false)
  const [splash, setSplash] = useState(false)

  useEffect(() => {
    setTimeout(() => setShow(true), 6000)

    setTimeout(() => setShip(true), 2000)
    setTimeout(() => setShip(false), 6000)
    
  }, [setShow])

  const handleShip = () => {
    setShip(true)
    setTimeout(() => setShip(false), 3000)
  }

  return (
    <div className="App">
      <main className="main_elem">

        <Setting ship={ship} splash={splash}/>
        {show && <Quotes handleShip={handleShip} 
          ship={ship} 
          setSplash={setSplash} 
          splash={splash}/>
        }
        
      </main>
    </div>
  );
}

export default App;