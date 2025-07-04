
import './App.css';
import Layout from "./Pages/Layout"
import Dashboard from './Pages/Dashboard';
import  Login  from './Pages/Login';
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
 return(

<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}/>
  <Route path="/dashboard" element={<Layout><Dashboard/></Layout>}/>


</Routes>
</BrowserRouter>
 ) 
}
export default App