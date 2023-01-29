import React from 'react';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { MemeViewContext } from '../data/MemeViewContext';
import { useState } from 'react';
//shows a user a view of only a single meme
function MemeView({memedata}) {
    const [memeView,setMemeView]  = useContext(MemeViewContext)
    return (
        //returns the name of the meme and the url of the meme
    <div>
        <h1>{memeView.name}</h1>
        <img src={memeView.url} id="meme-view-image"></img>
        
       {/* <img src={memedata.url}></img> */}
       <Link to="/memes">
       <button id="meme-view-back">Back to Memes</button>
       </Link>
    </div>
    );
}

export default MemeView;