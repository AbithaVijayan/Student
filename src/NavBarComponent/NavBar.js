import { NavLink } from "react-router-dom";
import './NavBar.css';
let NavBar=()=>{
    return(
        <header className="nav">
            <NavLink style={{textDecoration:'none'}} to="/home">HOME</NavLink>
            <NavLink style={{textDecoration:'none'}} to="/students/showall">SHOW STUDENTS</NavLink>
            <NavLink style={{textDecoration:'none'}} to="/students/add">ADD STUDENTS</NavLink>
            <NavLink style={{textDecoration:'none'}} to="/students/search">SEARCH STUDENT</NavLink>
        </header>
    );
}
export default NavBar;