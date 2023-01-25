import Authenticator from './Authenticator'
import Login from './Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    // <Router>
    //   <div>
    //     <Routes>
    //       <Route path="/" element={<Login />} />
    //       <Route path="/auth" element={<Authenticator />} />
    //     </Routes>
    //     <footer/>
    //   </div>
    // </Router>
    <main className="App">
      {/* <Authenticator /> */}
      <Login />
     {/* <div>App</div> */}
    </main>
  );
}

export default App;
