import { createContext,useState } from "react";
import Home from "../views/Home";

const NavigationContext = createContext()

const NavigationProvider = (props) =>{
  const [currentPage,setCurrentPage] = useState(<Home/>)
  return(
    <NavigationContext.Provider value={[currentPage,setCurrentPage]}>
     {props.children}
    </NavigationContext.Provider>
  )

}
export {NavigationContext}
export {NavigationProvider}