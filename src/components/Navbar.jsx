import { Link } from "react-router-dom"

const Navbar = () => {

    return (
        <>
            <h1>Navbar</h1>

            <Link to={'/pepe'}>Ir a HomePage</Link>
        </>
    )
}

export default Navbar