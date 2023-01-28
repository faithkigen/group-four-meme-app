//Filters out a meme from the array of memes and passes the new 
//array without the filtered meme to state to update on the page 
import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { MemesDataContext } from '../data/MemesDataContext';
//recieves data about the specific meme the button is on through props from MemesCollectionComponent
function DeleteMeme({memedata}) {
    const [memesData,setMemesData] = useContext(MemesDataContext)
//imports the context which stores all the data for the page
    function handleDelete(){
    //attempts to delete the meme from the server
    axios.delete(`https://api.imgflip.com/get_memes/${memedata.id}`)
    .then(r => console.log(r))
    .catch(e => console.log(e))
    //allows the page to render optimistically
    //takes the name of the meme the user has clicked on,
    //checks every meme name on the page and removes the 
    //one that matches from the list 
    setMemesData(memesData.filter((meme)=>{
        return meme.name !== memedata.name
    }))
    }
    return (
    <button onClick={handleDelete} className="memeButton">Delete</button>
    );
}

export default DeleteMeme;