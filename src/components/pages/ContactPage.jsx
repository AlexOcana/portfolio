import "./ContactPage.css"
import github from '../../assets/github.png'
import pdf from '../../assets/pdf.png'

const ContactPage = () => {

    return (
        <>
            <div className="AllContect">
                <h1>Contact me if you want me to be on your team !!!" </h1>

                <h6>Please click on the following icons to go to my diferents sites : </h6>
            </div>
            <div class="links">
                <div class="link">
                    <a className='HoverLinks' href="https://github.com/AlexOcana" target="_blank">
                        <img src={github} alt="GitHub"></img>
                        <h6>GitHub Profile</h6>
                    </a>
                    <a className='HoverLinks' href="Alejandro Ocaña.pdf" download><img src={pdf} alt="Imagen 1" style={{ width: '70px', }} ></img>
                        <h6>Download my CV</h6></a></div>
            </div >
            <div className="Section2">
                <a href="mailto:ocanamonsalve.alejandro@gmail.com">Send me an email clicking here</a>
            </div>
        </>
    )
}

export default ContactPage