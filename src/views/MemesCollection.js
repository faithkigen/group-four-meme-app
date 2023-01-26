import React, { useEffect } from 'react';
import { useContext } from 'react';
import { NavigationContext } from '../data/NavigationContext';
import { MemesDataContext } from '../data/MemesDataContext';
import Home from './Home';
import SingleMeme from './SingleMeme';
import { useState } from 'react';
import DeleteMeme from './DeleteMeme';
import UpdateMeme from './UpdateMeme';

function MemesCollection(props) {
   // const [currentPage,setCurrentPage] = useContext(NavigationContext)
    const [memesData,setMemesData] = useContext(MemesDataContext)
    const [pageData,setPageData] = useState([])
    useEffect(()=>{
        setPageData(memesData.map((meme)=>{
            return <>
                   <SingleMeme memedata={meme} key={meme.id}/>  
                   <DeleteMeme memedata={meme} key={meme.name}/>
                   <UpdateMeme memedata={meme} key={meme.url}/>
                   </>
        }))
    },[memesData])
    console.log(memesData)
    return (
        <div>
            <h2>All Memes</h2>
           {/* // <button onClick={()=>setCurrentPage(<Home/>)}>Go to Home</button> */}
            {pageData}
        </div>
    );
}

export default MemesCollection;