import React from 'react';
import { useContext } from 'react';
import { NavigationContext } from '../data/NavigationContext';
import { MemesDataContext } from '../data/MemesDataContext';
import Home from './Home';

function MemesCollection(props) {
    const [currentPage,setCurrentPage] = useContext(NavigationContext)
    const [memesData,setMemesData] = useContext(MemesDataContext)
    console.log(memesData)
    return (
        <div>
            <h2>All Memes</h2>
            <button onClick={()=>setCurrentPage(<Home/>)}>Go to Home</button>
        </div>
    );
}

export default MemesCollection;