import { NavLink } from "react-router-dom";
import "./Sidebar.css"
export default function Sidebar() {
    return(
<div className="sidebar">
<h2 className="logo">School ERP</h2>
<ul>
<li><NavLink to="/DAshboard">Dashboard</NavLink></li>
<li><NavLink to="/Homework">Homework</NavLink></li>
<li><NavLink to="/Syllabus">Syllabus</NavLink></li>
<li><NavLink to="/Attendence">Attendence</NavLink></li>
<li><NavLink to="/Notices">Notices</NavLink></li>
<li><NavLink to="/Student's info">Students-info</NavLink></li>



</ul>

    
</div>


    )
}