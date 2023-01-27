import React, { useEffect } from 'react';
import { useContext } from 'react';
import { NavigationContext } from '../data/NavigationContext';
import { MemesDataContext } from '../data/MemesDataContext';
import Home from './Home';
import SingleMeme from './SingleMeme';
import { useState } from 'react';
import DeleteMeme from './DeleteMeme';
import UpdateMeme from './UpdateMeme';
import AddMeme from './AddMeme';
import { Link } from 'react-router-dom'
import { MemeViewContext } from '../data/MemeViewContext';


function MemesCollection(props) {
   // const [currentPage,setCurrentPage] = useContext(NavigationContext)
    const [memesData,setMemesData] = useContext(MemesDataContext)
    const [pageData,setPageData] = useState([])
    const [memeView,setMemeView]  = useContext(MemeViewContext)
 
    useEffect(()=>{
        setPageData(memesData.map((meme)=>{
            return <>
                   <Link to="/memeview">
                   <div onClick={()=>{setMemeView(meme)}}>
                   <SingleMeme memedata={meme} key={meme.id}/>  
                   </div>
                   </Link>
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
            <AddMeme/>
            {pageData}
        </div>
    );
}

export default MemesCollection;