import Header from './Components/Header';
import Login from './Components/Login'
import Layout from "./Components/Layout";
import Dashboard from './Components/Dashboard'
import './App.css';

function App() {
  return (
    <div className="App">
     <Header/>
{/*section homework etc  */}
     <Route path="/" element={<Login/>}/>
  <Route path="/dashboard" element={<Layout><Dashboard/></Layout>}/> 
    </div>
  );
}

export default App;
