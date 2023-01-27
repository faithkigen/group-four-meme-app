
import React from 'react';
import MemesCollection from './MemesCollection';
import { useState } from 'react';
import { useContext } from 'react';
import { MemeViewContext } from '../data/MemeViewContext';


function SingleMeme({memedata}) {

    return (
        <div >
            <p>{memedata.name}</p>
            <img src={memedata.url} className="memeImage"></img>
        </div>
    );
}

export default SingleMeme;