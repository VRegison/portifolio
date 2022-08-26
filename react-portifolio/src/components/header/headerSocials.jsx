import React from "react";

import { BsLinkedin, BsGithub,BsInstagram } from 'react-icons/bs'
export const HeaderSpocials = () => {
    return (
        <div className="header__socials">
            <a href="https://www.linkedin.com/in/vitor-regison-01a5201ba/" target="_blank"><BsLinkedin size={28} /></a>
            <a href="https://github.com/VRegison/" target="_blank"><BsGithub size={28} /></a>
            <a href="https://www.instagram.com/vitor_regison6/" target="_blank"><BsInstagram size={28} /></a>
        </div>
    )
}