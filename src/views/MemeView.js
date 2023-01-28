import React from 'react';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { MemeViewContext } from '../data/MemeViewContext';
import { useState } from 'react';

function MemeView({memedata}) {
    const [memeView,setMemeView]  = useContext(MemeViewContext)
    return (
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