import React from "react";

import { MdOutlineEmail } from 'react-icons/md'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import "./contact.css";



export const Contact = () => {
    return (
        <section id="contact" >
            <h5>Entre em Contato</h5>
            <h2>Meu Contato</h2>


            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className="contact__option-icon" />
                        <h4>Email</h4>
                        <h5>vitorregison01@gmail.com</h5>
                        <a href="mailto:vitorregison01@gmail.com" target="_blank">Enviar Messagem</a>
                    </article>

                    <article className="contact__option">
                        <FaWhatsapp className="contact__option-icon" />
                        <h4>WhatsApp</h4>
                        <h5>+55(85)98852-3147</h5>
                        <a href="https://api.whatsapp.com/send/?phone=5585988523147" target="_blank">Enviar Messagem</a>
                    </article>

                    <article className="contact__option">
                        <FaInstagram className="contact__option-icon" />
                        <h4>Instagram</h4>
                        <h5>@vitor_regison6</h5>
                        <a href="https://www.instagram.com/vitor_regison6/" target="_blank">Enviar Messagem</a>
                    </article>
                </div>
                
                <form action="">
                    <input type="text" name="name" placeholder="Seu nome Completo" required />
                    <input type="email" name="email" placeholder="seu email" required />
                    <textarea name="message" rows="7" placeholder="Sua Mensagem" required></textarea>
                <button type="submit" className="btn btn-primary">Enviar Mensagem</button>
                </form>
            </div>
        </section >
    )
}