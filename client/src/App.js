import './App.css';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
import CreateAdmin from './pages/CreateAdmin';
import Events from './pages/Events';
import { Header } from './component/Header';

function App() {
  const [login, setlogin] = useState(false);
  const [Adminpre, setAdminpre] = useState("");
const loginnxt=(res)=>{
  {res.data!==false?setlogin(true):setlogin(false)}
  // console.log(res.data)
  setAdminpre(res.data);
}
  useEffect(() => {
    axios.get("/login/loggedIn")
    .then((res)=>{loginnxt(res)})
 }, [])

  return (
    <div className="App">
      {login?<Header Adminpre={Adminpre}/>:<></>}
      <Routes>
        <Route exact path='/' element={login?<Home Adminpre={Adminpre}/>:<Login login={login} setlogin={setlogin} />}/>
        <Route  path='/event' element={login&&(Adminpre==="Superadmin")?<Events/>:<Login login={login} setlogin={setlogin}/>}/>
        <Route  path='/createadmin' element={login&&(Adminpre==="Superadmin")?<CreateAdmin/>:<Login login={login} setlogin={setlogin}/>}/>
      </Routes>
    </div>
  );
}

export default App;
