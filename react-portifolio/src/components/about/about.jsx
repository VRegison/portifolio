import React from "react";

import ME from '../../assets/me.jpeg'
import "./about.css";
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';




export const About = () => {
    return (
        <section id="about">
            <h5>Me Conheça</h5>
            <h2>Sobre mim</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about__icon" />
                            <h5>Experiência</h5>
                            <small>1.6+ anos Trabalhando</small>
                        </article>

                        <article className="about__card">
                            <FiUsers className="about__icon" />
                            <h5>Projetos</h5>
                            <small>6+ Completados</small>
                        </article>

                        <article className="about__card">
                            <VscFolderLibrary className="about__icon" />
                            <h5>Faculdade ADS</h5>
                            <small>1/5 Semestres Graduando</small>
                        </article>



                    </div>
                        <p>
                        Olá , sou Vitor Regison, um cara de Fortaleza/CE, a 1 ano e meio recebi a oportunidade de trabalhar junto a uma equipe de programadores, vivenciado o dia a dia de tal, foi onde me apaixonei pela área. Comecei a estudar feito louco kkk, ate pegar projetos pequenos, fui aprendendo  e adquirindo experiência, peguei projetos importantes, até ver como um programa poderia afetar a  vida e a rotina das pessoas, com isso eu aprendi a não apenas desenvolver por desenvolver, mas sim  desenvolver  sabendo onde eu vou afetar , como  e quem. Busco agora alcançar meus objetivos, e evoluir mais e mais.
                        </p>
                        <a href="#contact" className="btn btn-primary"> Vamos Conversar</a>
                </div>
            </div>
        </section>
    )
}