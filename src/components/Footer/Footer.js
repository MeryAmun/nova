import React from 'react'
import './footer.css'
import { footerLogo, medium, telegram, twitter } from '../../assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer__image">
            <img src={footerLogo} alt="" />
        </div>
        <div className="footer__copy-right">
            <span className="footer__copy-text">© 2024 Nova, All rights reserved.</span>
            <div className="footer__socials">
       <Link to='https://twitter.com'>
        <div className="social-icon">
          <img src={twitter} alt="" />
        </div>
       </Link>
       <Link to='https://telegram.com'>
        <div className="social-icon">
          <img src={telegram} alt="" />
        </div>
       </Link>
       <Link to='https://medium.com'>
        <div className="social-icon">
          <img src={medium} alt="" />
        </div>
       </Link>
        </div>
        </div>
        
    </div>
  )
}

export default Footer