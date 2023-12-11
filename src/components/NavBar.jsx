import { Link } from "react-router-dom"




const NavBar  = () => {


return (
<div>
    <nav>
    <Link to='/'>HomePage</Link>
    <Link to='/comments'>Comments</Link>
    <Link to='/newcomment'>Add Comment</Link>
    </nav>

</div>

)


}


export default NavBar