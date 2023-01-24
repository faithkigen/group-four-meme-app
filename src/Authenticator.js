import { useRef, useState, useEffect } from "react";

// install fortawesome using // 
// npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons 
// @fortawesome/react-fontawesome

import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// USER_REGEX is going to validate the username
//[a-zA-z] - must start with a lower or upper case letter
//[a-zA-Z0-9_-]{3,23} - must be between 3 and 23 characters long(lower, uppercase, numbers, hyphens, and underscores)
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

// PWD_REGEX is going to validate the password
// (?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;



const Authenticator = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState("");                 //tied to user input
    const [validName, setValidName] = useState(false);    //tied to whether the name is valid or not
    const [userFocus, setUserFocus] = useState(false);    //tied to whether we have focus on the input field or not

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchingPwd, setMatchingPwd] = useState("");
    const [validMatchingPwd, setValidMatchingPwd] = useState(false);
    const [matchingPwdFocus, setMatchingPwdFocus] = useState(false);

  return (
    <div>Authenticator</div>
  )
}

export default Authenticator

