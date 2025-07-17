// import Header from './Components/Header';
import Login from './Components/Login'
import Layout from "./Components/Layout";
import Dashboard from './Components/Dashboard';
import './App.css';
import {Route,Routes } from 'react-router-dom';

function App() {
  return (
    
    <div className="App">
     {/* <Header/> */}
{/*section homework etc  */}
<Routes>
     <Route path="/" element={<Login/>}/>
  <Route path="/dashboard" element={<Layout><Dashboard/></Layout>}/> 
  </Routes>
    </div>
    
  );
}

export default App;
