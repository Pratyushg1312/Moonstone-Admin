import './App.css';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [login, setlogin] = useState(false);

  useEffect(() => {
    axios.get("/login/loggedIn")
    .then((res)=>{setlogin(res.data)})
 }, [])

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={login?<Home/>:<Login login={login} setlogin={setlogin}/>}/>
      </Routes>
    </div>
  );
}

export default App;
