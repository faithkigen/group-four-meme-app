import axios from "axios";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MemesDataContext } from "../data/MemesDataContext";
//recieves data about the specific meme the button is on through props from MemesCollectionComponent
function UpdateMeme({ memedata }) {
//imports the context which stores all the data for the page
  const [memesData, setMemesData] = useContext(MemesDataContext);
//creates a state variable which defaults to an object with the properties
//the user will not change already filled and the rest as an empty string
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
    //prevents default form submission behaviour which is refreshing the page
    e.preventDefault();
    //attempts to send the updated meme to the server
   axios.patch("https://api.imgflip.com/get_memes",updateMeme,{
    headers:{
      'Content-Type': 'application/json'
    }})
    .then(r => console.log(r))
    .catch(e => console.log(e))
    //allows the page to render optimistically
    //first, the meme that the user is trying to update is filtered out
    let filteredMeme = memesData.filter((meme) => {
      return meme.name !== memedata.name;
    });
    //a copy of it is then added to the remaining memes, plus the changes the 
    //user has made
    setMemesData([updateMeme, ...filteredMeme]);
  }
    
  return (<>
   {/* provides a user with a form that allows them to make changes to a meme */}
    <button>Update Meme</button>
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter New Meme Name"
          //updates the name property on the state object as soon as the user enters 
          //input
          onChange={(e) => {
            setUpdatedMeme({ ...updateMeme, name: e.target.value });
          }}
        ></input>
        <input
          type="text"
          placeholder="Enter New Image Url"
          //updates the url property on the state object as soon as the user enters 
          //input
          onChange={(e) => {
            setUpdatedMeme({ ...updateMeme, url: e.target.value });
          }}
        ></input>
        <button type="submit">Change Meme</button>
      </form>
</>)
;
}

export default UpdateMeme;
