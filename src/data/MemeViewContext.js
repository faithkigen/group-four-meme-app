import { createContext } from "react";
import { useState } from "react";

const MemeViewContext = createContext()
const MemeViewProvider = (props) =>{
const [memeView,setMemeView] = useState({})
return (
<MemeViewContext.Provider value={[memeView,setMemeView]}>
    {props.children}
</MemeViewContext.Provider>
    )
}
export {MemeViewContext}
export {MemeViewProvider}