//Filters out a meme from the array of memes and passes the new 
//array without the filtered meme to state to update on the page 
import React from 'react';
import { useContext } from 'react';
import { MemesDataContext } from '../data/MemesDataContext';

function DeleteMeme({memedata}) {
    const [memesData,setMemesData] = useContext(MemesDataContext)
    function handleDelete(){
    setMemesData(memesData.filter((meme)=>{
        return meme.name !== memedata.name
    }))
    }
    return (
    <button onClick={handleDelete}>Delete</button>
    );
}

export default DeleteMeme;