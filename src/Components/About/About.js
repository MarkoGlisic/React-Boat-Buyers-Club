import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="contact-banner">
        <h2>Contacts</h2>
        <Link to="/" className="back-to-home">
          Home
        </Link> 
        </div>
        <h3>ABOUT</h3>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur asperiores praesentium voluptate ducimus laudantium ea id quas nemo nulla doloremque earum illo provident rem iure consequuntur commodi maiores nesciunt hic, beatae nihil fugiat vitae sed! Porro magnam eligendi corporis aut quia ipsa sapiente, nulla, non molestiae labore ut minima optio?</p>
        </div>
    )
}

export default About
