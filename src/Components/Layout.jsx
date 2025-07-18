import Sidebar from "./Sidebar"
import Header from "./Header"
import "./Layout.css"
export default function Layout({children}) {
    return(
        <div className="Layout">
           <Sidebar/>
<div className="Main">
    
<Header/>
{children}
    </div>
    </div>
    
    )
}