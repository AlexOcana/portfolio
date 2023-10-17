import './ProyectsDetailsPage.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const ProyectsDetailsPage = () => {

    return (
        <>
            <h2>See the best proyects i have done in my carrer</h2>
            <div className='AllCards'>
                <Card className='CardStyle'>
                    <Card.Img variant="top" src="./public/proyectovideojuego.png" />
                    <Card.Body className='mt-2 text-center'>
                        <Card.Title>DOM VideoGame Proyect</Card.Title>
                        <Card.Text>
                            DOM-Powered Side-Scrolling Action Game!" Experience the exhilarating world
                            of side-scrolling action, reminiscent of Metal Slug, all brought to life through HTML,
                            CSS, and JavaScript. Battle your way through hordes of enemies and explosive encounters
                            while uncovering the secrets of web development. Get ready for a nostalgia-filled adventure in DOMSlug!
                        </Card.Text>
                        <Button variant="warning "><a className='text-decoration-none text-black' href="https://alexocana.github.io/PROYECTO-VIDEOJUEGO/" target='_blanck'>Enter to see</a></Button>
                    </Card.Body>
                </Card>

                <Card className='CardStyle2'>
                    <Card.Img variant="top" src="./public/videogames.jpeg" />
                    <Card.Body className='mt-2 text-center'>
                        <Card.Title>HBS Proyect VideoGames API</Card.Title>
                        <Card.Text>
                            Web application for searching video games using Node.js,
                            Axios, and Express. The application allows users to search
                            for video games and retrieve detailed information about
                            their favorite titles, making it a valuable resource for
                            gamers.
                        </Card.Text>
                        <Button variant="warning "><a className='text-decoration-none text-black' href="https://github.com/AlexOcana" target='_blanck'>Enter to see</a></Button>
                    </Card.Body>
                </Card>
                <Card className='CardStyle3'>
                    <Card.Img variant="top" src="./public/gymapp.png" />
                    <Card.Body className='mt-2 text-center'>
                        <Card.Title>REACT App for GYM</Card.Title>
                        <Card.Text>
                            Application for creating and managing gym routines built
                            using React, Node.js, MongoDB, Mongoose, and Express

                        </Card.Text>
                        <Button variant="warning "><a className='text-decoration-none text-black' href="https://gym4life.netlify.app/" target='_blanck'>Enter to see</a></Button>
                    </Card.Body>
                </Card>
            </div>

        </>
    )
}
export default ProyectsDetailsPage