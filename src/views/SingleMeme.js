//uses data passed down from memes collection to create a 
//meme template
//
import React from 'react';
import MemesCollection from './MemesCollection';

function SingleMeme({memedata}) {
    return (
        <div>
            <p>{memedata.name}</p>
           {/* <img src={memedata.url}></img> */}
        </div>
    );
}

export default SingleMeme;