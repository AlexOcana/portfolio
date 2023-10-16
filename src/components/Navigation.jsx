import { Container, Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import './Navigation.css'

const Navigation = () => {
    return (

        <Navbar sticky="top" bg="dark" data-bs-theme="dark">
            <Container className="Navigationbar">
                <Nav.Link href="/"><img src="public/Logo2.png"></img></Nav.Link>
                <Nav className="me-auto">
                    <Nav.Link href="/Proyects">Proyects</Nav.Link>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav>
            </Container>
        </Navbar >


    );
}

export default Navigation;