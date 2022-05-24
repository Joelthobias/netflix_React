import React from 'react'
import { original,action,ComedyMovies,Documentaries,HorrorMovies,RomanceMovies } from './url';
import './App.css';
import Banner from './Components/banner/Banner';
import Navbar from './Components/NavBar/Navbar';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <RowPost url={original} title='Netflix Originals' />
      <RowPost url={action} title='Action' isSmall />
      <RowPost url={ComedyMovies} title='Comedy Movies' isSmall />
      <RowPost url={HorrorMovies} title='Horror Movies' isSmall />
      <RowPost url={RomanceMovies} title='Romance Movies' isSmall />
      <RowPost url={Documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
