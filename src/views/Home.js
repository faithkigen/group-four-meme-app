import React from 'react';
import { useContext } from 'react';
import { NavigationContext } from '../data/NavigationContext';
import MemesCollection from './MemesCollection';


function Home(props) {
    const [currentPage,setCurrentPage] = useContext(NavigationContext)
    return (
        <div>
            <h1>Home page</h1>
            <button onClick={()=>setCurrentPage(<MemesCollection/>)}>Go to Memems</button>
        </div>
    );
}

export default Home;