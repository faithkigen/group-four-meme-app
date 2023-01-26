import React from 'react';
import {Link} from "react-router-dom";
import { useContext } from 'react';
import { MemeViewContext } from '../data/MemeViewContext';
import { useState } from 'react';

function MemeView({memedata}) {
    const [memeView,setMemeView]  = useContext(MemeViewContext)
    return (
    <div>
        <p>{memeView.name}</p>
        <img src={memeView.url}></img>
       {/* <img src={memedata.url}></img> */}
       <Link to="/memes">
       <button>Back to Memes</button>
       </Link>
    </div>
    );
}

export default MemeView;