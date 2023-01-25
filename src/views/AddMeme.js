//This function component provides a form for adding memes
//It accesses the MemesDataContext to get memes fetched from the api
//When data is inputted in the form, it is added as the values of a state variable object that is initially empty which 
//holds all the required properties
//On submission of the form, the object is added to the MemesDataContext which holds all of the arrays on the page
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MemesDataContext } from "../data/MemesDataContext";
function AddMeme(props) {
  const [memesData,setMemesData] = useContext(MemesDataContext)
  const [newMeme, setNewMeme] = useState({
    box_count: 0,
    captions: 0,
    height: 0,
    id: "",
    name: "",
    url: "",
    width: 0,
  });

  function addNewMeme(e) {
    e.preventDefault();
    setMemesData([...memesData, newMeme])
    
  }
  return (
    <form onSubmit={addNewMeme}>
      <input
        type="text"
        onChange={(e) => {
          setNewMeme({ ...newMeme, name: e.target.value });
          
        }}
        placeholder="Enter the meme name"
      ></input>
      <input
        type="text"
        placeholder="Enter the meme url"
        onChange={(e) => {
          setNewMeme({ ...newMeme, url: e.target.value });
        }}
      ></input>
      <button type="submit" onClick={()=>{setNewMeme({
      ...newMeme,
      id: `${Math.floor(Math.random() * Math.pow(10, 9))}`,
    })}}>Add Meme</button>
    </form>
  );
}

export default AddMeme;
