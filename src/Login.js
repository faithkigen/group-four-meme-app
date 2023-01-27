import { useRef, useEffect, useState, useContext } from "react";

function Login() {
  const userRef = useRef(); // sets the focus on the user input
  const errRef = useRef(); // sets the focus on the error input

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    // set the focus on the first input when the componentloads
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <>
      {success ? (
        <section className="landing-page">
          <h1>Welcome !</h1>
          <p>You have successfully logged in.</p>
          <br />
          <p>
            <a href="">Logout</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="asserive"
          >
            {errMsg}
          </p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username" // should match the htmlfor attribute
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password" // should match the htmlfor attribute
              ref={userRef}
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button> Sign In</button>
          </form>
          Need an Account?
          <br />
          <span className="line"> 
            {/* put router link here */}
            <a href="#">Sign UP</a>
          </span>
        </section>
      )}
    </>
  );
}

export default Login;
