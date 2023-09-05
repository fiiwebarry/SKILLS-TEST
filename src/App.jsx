import { useState } from 'react';
import Hero from './Components/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import HistoryPage from './Components/HistoryPage/HistoryPage';
import ClimbPage from './Components/ClimbPage/ClimbPage';
import SchedulePage from './Components/SchedulePage/SchedulePage';
import FooterPage from './Components/FooterPage/FooterPage';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <Hero />
      <Navbar />
      <HistoryPage />
      <ClimbPage />
      <SchedulePage />
      <FooterPage />



    </>
  )
}

export default App
