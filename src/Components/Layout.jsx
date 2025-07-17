import Sidebar from "./Sidebar"
import Header from "./Header"
import "./Layout.css"
export default function Layout({Children}) {
    return(
        <div className="Layout">
           <Sidebar/>
<div className="Main">
    
<Header/>
{Children}
    </div>
    </div>
    
    )
}