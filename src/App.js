// import Authenticator from './Authenticator'
import Login from './Login';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Authenticator from './Authenticator';


function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Authenticator />} />
        </Route>
      </Routes>
  );
}

export default App;
