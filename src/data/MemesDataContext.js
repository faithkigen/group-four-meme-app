import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";

const MemesDataContext = createContext()

const MemesDataProvider = (props) =>{
const [memesData,setMemesData] = useState([])
useEffect(()=>{
    axios.get("https://api.imgflip.com/get_memes")
    .then(data => setMemesData(data.data.data.memes))
},[])
console.log(memesData)
return(
    <MemesDataContext.Provider value={[memesData,setMemesData]}>
        {props.children}
    </MemesDataContext.Provider>
)

}

export {MemesDataContext}
export {MemesDataProvider}