import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MemesDataContext } from "../data/MemesDataContext";

function UpdateMeme({ memedata }) {

  const [memesData, setMemesData] = useContext(MemesDataContext);
  const [updateMeme, setUpdatedMeme] = useState({
    box_count: memedata.box_count,
    captions: memedata.captions,
    height: memedata.height,
    id: memedata.id,
    name: "",
    url: "meme.randomImage",
    width: memedata.width,
  });
  console.log(updateMeme);
  function handleSubmit(e) {
    e.preventDefault();
    let filteredMeme = memesData.filter((meme) => {
      return meme.name !== memedata.name;
    });
    setMemesData([updateMeme, ...filteredMeme]);
  }
    
 
         
         
}

export default UpdateMeme;
