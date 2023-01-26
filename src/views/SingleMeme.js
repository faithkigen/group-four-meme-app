//uses data passed down from memes collection to create a 
//meme template
//
import React from 'react';
import MemesCollection from './MemesCollection';
import { useState } from 'react';
import { useContext } from 'react';
import { MemeViewContext } from '../data/MemeViewContext';


function SingleMeme({memedata}) {
    const [memeView,setMemeView]  = useContext(MemeViewContext)
    return (
        <div onClick={setMemeView(memedata)}>
            <p>{memedata.name}</p>
            <img src={memedata.url}></img>
        </div>
    );
}

export default SingleMeme;