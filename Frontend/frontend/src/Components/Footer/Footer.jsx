import React from 'react';
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer' id='footer' >
    <div className="footer-content">
        <div className="footer-content-left">
            <img src="/img/logo.png" alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae obcaecati facilis porro numquam ipsam sed a magnam tenetur maiores! Temporibus!</p>
            <div className="footer-social-icons">
                <img src="/img/facebook_icon.png" alt="" />
                <img className='twitter-icon' src="/img/social.png" alt="" width={40} height={40}/>
                <img src="/img/linkedin_icon.png" alt="" />

            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>

            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>

        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>Phone No:+91 9887845918</li>
                <li>Mail Id:manishSolanki7879@gmail.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">
        Copyright 2024 © Tomoto.com-All Right Reserved.
    </p>
</div>
  );
}

export default Footer;
