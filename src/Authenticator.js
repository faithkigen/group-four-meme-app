import { useRef, useState, useEffect } from "react";

// install fortawesome using // 
// npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons 
// @fortawesome/react-fontawesome

import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// USER_REGEX is going to validate the username
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_-]{3,23}$/;

// PWD_REGEX is going to validate the password
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;