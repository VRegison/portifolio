import React from "react";

import { BiCheck } from 'react-icons/bi'
import "./services.css";



export const Services = () => {
    return (
        <section id="services">
            <h5>Minha Experiência</h5>
            <h2>Experiência</h2>

            <div className="container services__container">
                <article className="service">
                    <div className="service__head">
                        <h3>Front End</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" size={25} />
                            <p>Junto a uma equipe, desenvolvi o front-end da aplicação mobile/desktop do help desk.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" size={25} />
                            <p>Desenvolvi páginas no ERP da empresa utilizando Javascript.</p>
                        </li> <li>
                            <BiCheck className="service__list-icon" size={25} />
                            <p>
                                Desenvolvi o front-end em uma página de cadastro de atletas, utilizando bootstrap.
                            </p>
                        </li> 
                       
                    </ul>
                </article>
                {/* end */}
                <article className="service">
                    <div className="service__head">
                        <h3>Back End</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" size={25} />
                            <p>Trabalhei diretamente com o ERP da empresa, desenvolvendo páginas e funções em PHP.</p>
                        </li>
                         <li>
                            <BiCheck className="service__list-icon" size={25} />
                            <p>Junto a uma equipe, desenvolvemos uma API em NodeJS, para o sistema Help Desk.</p>
                        </li> <li>
                            <BiCheck className="service__list-icon" size={25} />
                            <p>Desenvolvi uma API com MongoDB, utilizando nodeJS ,EJS e Mongoose.</p>
                        </li> <li>
                            <BiCheck className="service__list-icon" size={25} />
                            <p>Desenvolvi novas funcionalidades e manutenções em um BOT de whatsapp.</p>
                        </li>

                    </ul>
                </article>
                {/* end */}
                <article className="service">
                    <div className="service__head">
                        <h3>Tecnico</h3>
                    </div>

                    <ul className="service__list">
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Trabalhei utilizando a metodologia scrum.</p>
                        </li>
                        <li>
                            <BiCheck className="service__list-icon" />
                            <p>Utilizando também Git e Gitflow para o controle de versionamento.</p>
                        </li> <li>
                            <BiCheck className="service__list-icon" />
                            <p>Utilizando gitLab para realização de deploys.</p>
                        </li>
                    </ul>
                </article>

            </div>
        </section>
    )
}