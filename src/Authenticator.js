import { useRef, useState, useEffect } from "react";
import {faCheck,faTimes,faInfoCircle,} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";


// USER_REGEX is going to validate the username
//[a-zA-z] - must start with a lower or upper case letter
//[a-zA-Z0-9_-]{3,23} - must be between 3 and 23 characters long(lower, uppercase, numbers, hyphens, and underscores)
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;

// PWD_REGEX is going to validate the password
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Authenticator = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState(""); //tied to user input
    const [validName, setValidName] = useState(false); //tied to whether the name is valid or not
    const [userFocus, setUserFocus] = useState(false); //tied to whether we have focus on the input field or not

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchingPwd, setMatchingPwd] = useState("");
    const [validMatchingPwd, setValidMatchingPwd] = useState(false);
    const [matchingPwdFocus, setMatchingPwdFocus] = useState(false);

    const [errMsg, setErrMsg] = useState(""); // error msg if an error exists
    const [success, setSuccess] = useState(false); // if the form submits successfully

    useEffect(() => {
        // sets the focus when the component loads
        userRef.current.focus();
    }, []);

    useEffect(() => {
        // here the username is validated
        const result = USER_REGEX.test(user);
        console.log(result);
        console.log(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        console.log(result);
        console.log(pwd);
        setValidPwd(result);
        const match = pwd === matchingPwd;
        setValidMatchingPwd(match); // match does the comparison of the passwords
    }, [pwd, matchingPwd]);

    useEffect(() => {
        setErrMsg("");
    }, [user, pwd, matchingPwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();    // stops the form from submitting
        // const v1 = USER_REGEX.test(user);
        // const v2 = PWD_REGEX.test(pwd);
        // if (v1 || v2) {
        //     setErrMsg("Invalid Entry");
        //     return;     // validates the user input  // use the rest api to work on that
        // }
        console.log(user, pwd);
        setSuccess(true);     // going to use axios to validate the inputs
    }

    return (        // section for the jsx  
    <>
    {success ? (
        <section>
            <h1>Congratulations!</h1>
            <p>
                <a href="#">Sign In</a>
            </p>
        </section>
    ) : (
        <section>
            <p     // the <p> tag is going to display the error msg if an error exists
                ref={errRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
            >
                {errMsg}
            </p>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">
                    Username:
                    <span className={validName ? "valid" : "hide"}> 
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validName || !user ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                        </span>
                </label>
                <input
                    type="text"
                    id="username"  // id of username
                    ref={userRef}  // reference to the input field
                    autoComplete="off"  // disable autocomplete not to see previous values
                    onChange={(e) => setUser(e.target.value)}  //ties the input to the value of the input field/userState
                    required
                    aria-invalid={validName ? "false" : "true"}
                    aria-describedby="uidnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                />
                <p id="uidnote" className={userFocus && user
                    && !validName ? "instructions" : "offscreen"}>
                    <FontAwesomeIcon icon={faInfoCircle} />
                    4 to 24 characters. <br />
                    Should start with a lower or upper case letter. <br />
                    Letters, numerals, underscores, and hyphens allowed. <br />
                </p>
                <label htmlFor="password">
                    Password:
                    <span className={validPwd ? "valid" : "hide"}> 
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validPwd || !pwd ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                        </span>
                </label>
                <input
                type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}  
                    required
                    aria-invalid={validPwd ? "false" : "true"}
                    aria-describedby="pwdnote"
                    onFocus={() => setUserFocus(true)}
                    onBlur={() => setUserFocus(false)}
                    />
                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                        8 to 24 characters. <br />
                        Should start with a lower or upper case letter, a number and a special
                        character. <br />
                        Allowed special characters: <span aria-label="exclamation mark">!</span>
                        <span aria-label="question mark">?</span><span aria-label="at symbol">@</span>
                        <span aria-label="dollar sign">$</span><span aria-label="percent">%</span>
                        <span aria-label="hashtag">#</span>
                    </p>
                    <label htmlFor="confirm_pwd">
                    Confirm Password:
                    <span className={validMatchingPwd &&  matchingPwd? "valid" : "hide"}> 
                        <FontAwesomeIcon icon={faCheck} />
                    </span>
                    <span className={validMatchingPwd || !matchingPwd ? "hide" : "invalid"}>
                        <FontAwesomeIcon icon={faTimes} />
                        </span>
                        </label>
                        <input
                        type="password"
                        id="confirm_pwd"
                        onChange={(e) => setMatchingPwd(e.target.value)}  
                    required
                        aria-invalid={validMatchingPwd? "false" : "true"}
                        aria-describedby="confirmpwdnote"
                        onFocus={() => setUserFocus(true)}
                        onBlur={() => setUserFocus(false)}
                        />
                        <p id="confirmpwdnote" className={matchingPwdFocus && !validMatchingPwd ? "instructions" :
                         "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the initial password input field.
                            </p>
                            {/*   button is diasbled until the input states are true */}
                            <button disabled={!validName || !validPwd || !validMatchingPwd ? true : false}>
                                Sign Up</button>
            </form>
            <p>
                Already have an account? <br/>
                <span className="line">
                    {/* { insert router link to login page} */}
                    <a href="/">Sign In</a>
                    </span>
            </p>
        </section>
    )}
    </>
    );
};

export default Authenticator;

