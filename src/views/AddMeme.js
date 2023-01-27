import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { MemesDataContext } from "../data/MemesDataContext";
import axios from "axios";
function AddMeme(props) {
  //imports the context which stores all the data for the page
  const [memesData,setMemesData] = useContext(MemesDataContext)
  //creates a state variable which defaults to an object with required properties
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
    //prenets default form submission behaviour which is refreshing of the page
    e.preventDefault();
    //attempts to add the new meme to the server
    axios.post("https://api.imgflip.com/get_memes",newMeme,{
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
    })
    .then(r => console.log(r))
    .catch(e => console.log(e))
 //allows the page to render optimistically
 
    setMemesData([newMeme, ...memesData])
  }
  return (
    //provides a form that allows a user to add a neww meme to the page 
    <form onSubmit={addNewMeme}>
      <input
        type="text"
        //updates the name property on the state object as soon as the user enters 
        //input
        onChange={(e) => {
          setNewMeme({ ...newMeme, name: e.target.value });
          
        }}
        placeholder="Enter the meme name"
      ></input>
      <input
        type="text"
        placeholder="Enter the meme url"
         //updates the url property on the state object as soon as the user enters 
          //input
        onChange={(e) => {
          setNewMeme({ ...newMeme, url: e.target.value });
        }}
      ></input>
      <button type="submit" onClick={()=>{setNewMeme({
        //generates an id for the new meme 
      ...newMeme,
      id: `${Math.floor(Math.random() * Math.pow(10, 9))}`,
    })}}>Add Meme</button>
    </form>
  );
}

export default AddMeme;


