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
    url: "",
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
    
  return <>
    <button>Update Meme</button>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter New Meme Name"
          onChange={(e) => {
            setUpdatedMeme({ ...updateMeme, name: e.target.value });
          }}
        ></input>
        <input
          type="text"
          placeholder="Enter New Image Url"
          onChange={(e) => {
            setUpdatedMeme({ ...updateMeme, url: e.target.value });
          }}
        ></input>
        <button type="submit">Change Meme</button>
      </form>
         
         </>;
}

export default UpdateMeme;
