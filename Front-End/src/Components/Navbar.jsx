import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <header>
                <h1><Link to='/'>To do list App</Link></h1>
            </header>
            <div>
                <p><Link to='/create'>Create</Link></p>
            </div>
        </nav>
    )
}

export default Navbar