import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import Loader from 'react-loaders'
import { useEffect, useRef, useState } from 'react'
import envelope from '../../assets/images/envelope.png'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_gumnakn',
        'template_5913ixo',
        refForm.current,
        'tYAbLiDFWaLh4KKF4'
      )
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send, please try again later')
        }
      )
  }
  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <div className="contact-me">
            <h1>
              <AnimatedLetters
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
                letterClass={letterClass}
              />
            </h1>
            <div className="contact-card">
              <div className="contact-card-content">
                <span>
                  <FontAwesomeIcon icon={faPhone} color="white" /> 8882190865
                </span>
                <br />
                <span>
                <FontAwesomeIcon icon={faEnvelope} color="white" />{' '}
                vishalkr00700@gmail.com
                </span>
              </div>
            </div>
          </div>
          <p>
            Hi, you can reach out to me for any query or just to say Hello I
            would really appreciate that. Just fill out the below form.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" value="SEND" className="flat-button" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="envelope-image">
          <p>
            To, <br />
            Vishal Kumar
          </p>
          <img src={envelope} alt="envelope" />
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
