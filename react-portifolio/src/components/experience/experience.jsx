import React from "react";

import { BsPatchCheckFill } from 'react-icons/bs'
import "./experience.css";



export const Experience = () => {
    return (
        <section id="experience">
            <h5>Quais Habilidades eu tenho</h5>
            <h2>Minha Experiência</h2>

            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Frontend Develop</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill  className="experience__details-icon"/>
                            <div>
                                <h4>HTML</h4>
                                <small className="text-light">Experiente</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>CSS</h4>
                                <small className="text-light">Experiente</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Experiente</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill  className="experience__details-icon"/>
                            <div>
                                <h4>Responsividade</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>


                    </div>
                </div>
                <div className="experience__backend">
                    <h3>Backend Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>PHP</h4>
                                <small className="text-light">Experiente</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill  className="experience__details-icon"/>
                            <div>
                                <h4>NodeJs</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill  className="experience__details-icon"/>
                            <div>
                                <h4>MYSQL</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>MongoDB</h4>
                                <small className="text-light">Intermediário</small>
                            </div>
                        </article>

                        <article className="experience__details">
                            <BsPatchCheckFill className="experience__details-icon" />
                            <div>
                                <h4>API</h4>
                                <small className="text-light">Experiente</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}