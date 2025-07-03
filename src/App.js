
import './App.css';
import  Login  from './Pages/Login';
import { BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
 return(

<BrowserRouter>
<Routes>
  <Route path="/" element={<Login/>}/>
  {/* <Route path="dashboard" element={<Layout><Dashboard /></Layout>}/> */}


</Routes>
</BrowserRouter>
 ) 
}
export default App