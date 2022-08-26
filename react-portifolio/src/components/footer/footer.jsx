import React from "react";
import { MdOutlineEmail } from 'react-icons/md'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import LOGO from '../../assets/logo.png';
import "./footer.css";



export const Footer = () => {
    return (
        <footer id="footer" >
            <a href="#" className="footer__logo"><img src={LOGO} alt="" /></a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#services">Serviços</a></li>
                <li><a href="#portifolio">Portifólio</a></li>
                <li><a href="#contact">Contato</a></li>
            </ul>



            <div className="footer__socials">
                <a href="https://api.whatsapp.com/send/?phone=5585988523147" target="_blank"><FaWhatsapp/></a>
                <a href="https://www.instagram.com/vitor_regison6/" target="_blank"><FaInstagram/></a>

            </div>


            <div className="footer__copyright">
                <small>&copy;VRegison</small>

            </div>


        </footer>
    )
}