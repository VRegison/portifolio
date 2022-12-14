import React from "react";

import { CTA } from './CTA'
import {HeaderSpocials} from './headerSocials'

import ME from '../../assets/me.png'
import "./header.css";



export const Header = () => {
    return (
        <header>
            <div className="container header__container">
                <h5>Olá, eu sou </h5>
                <h1>Vitor Regison</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <CTA />
                < HeaderSpocials/>

                <div className="me">
                    <img src={ME} alt='me' />
                </div>

                <a href="#contact" className="scroll__down">Scroll Down</a>
            </div>
        </header>
    )
}