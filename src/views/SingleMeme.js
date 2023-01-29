
import React from 'react';
import MemesCollection from './MemesCollection';
import { useState } from 'react';
import { useContext } from 'react';
import { MemeViewContext } from '../data/MemeViewContext';

//returns a meme from data passed to it from the MemesCollection component
function SingleMeme({memedata}) {
    return (
        <div>
            <h2 id="meme-heading">{memedata.name}</h2>
            <img src={memedata.url} className="memeImage"></img>
        </div>
    );
}

export default SingleMeme;