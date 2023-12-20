import "./App.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTelegram, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faMobileAndroid } from '@fortawesome/free-solid-svg-icons'

function BodyContact() {
    return(
        <>
            <div className="body">
                <h1 className='intro2'>Contact</h1>
                <img src='/about-me-pic.JPG' className='my-pic2' alt='myPic'></img>
                <div className="my-contact">
                    <p>Hello there! Here are my social media accounts and Github. Feel free to contact me.</p>
                    <div className="soc-med">
                        <a href="https://www.facebook.com/rayven.ponce"><FontAwesomeIcon icon={faFacebook} /></a>
                        <a href="https://www.instagram.com/mrc_rayven"><FontAwesomeIcon icon={faInstagram} /></a>
                        <a href="t.me/@mrc_rayven"><FontAwesomeIcon icon={faTelegram} /></a>
                        <a href="mailto:rayvenponce@gmail.com"><FontAwesomeIcon icon={faGoogle} /></a>
                        <a href="https://www.linkedin.com/marc-rayven-ponce-a161a2211"><FontAwesomeIcon icon={faLinkedin} /></a>
                        <a href="https://github.com/Choowi123"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                    <p>Here is my contact number</p>
                    <div className="contact-num">
                        <p><FontAwesomeIcon icon={faMobileAndroid} /></p>
                        <p>09296441504</p>
                    </div>
                </div>
            </div>
        </>

    )
}
export default BodyContact