import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Home from './views/Home';
import MemeDetails from './views/MemeDetails';
import MemesCollection from './views/MemesCollection';
import { useState } from 'react';
import { useContext } from 'react';
import { NavigationContext } from './data/NavigationContext';

function App() {
  // axios.get("http://alpha-meme-maker.herokuapp.com/1")
  // .then((data)=> console.log(data))
  const [currentPage,setCurrentPage] = useContext(NavigationContext)
  return (
    <>
    <div>MEME APP</div>
    {currentPage}
    </>
  );
}

export default App;
