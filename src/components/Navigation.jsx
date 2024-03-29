import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import './Navigation.css'
import { Link } from "react-router-dom";
import Logo2 from '../assets/Logo2.png'

const Navigation = () => {
    return (

        <Navbar sticky="top" bg="dark" data-bs-theme="dark">
            <Container className="Navigationbar gap-2">
                <Link to={"/"}><img src={Logo2}></img></Link>
                <Nav className="me-auto gap-2">
                    <Link className="text-white text-decoration-none HoverLinks" to={"/Proyects"}>Proyects</Link>
                    <Link className="text-white text-decoration-none HoverLinks" to={'/Contact'}>Contact</Link>
                </Nav>
            </Container>
        </Navbar >

    );
}

export default Navigation;