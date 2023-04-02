import React from "react";

import css from './footer.module.css'

import { BsInstagram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';

export const Footer = () => {
    return (
        <>
            <div className={css.footer}>
                <div className={css.footer__body}>
                    <div className={css.footer__body__categorias}>
                        <h4>Categorias</h4>
                        <p>Vestidos y Monos</p>
                        <p>Tops</p>
                        <p>Remeras</p>
                        <p>Shorts y Polleras</p>
                        <p>Pantalones</p>
                        <p>Abrigos</p>
                        <p>Sport</p>
                    </div>
                    <div className={css.footer__body__contactanos}>
                        <h4>Contactanos</h4>
                        <p>5401122334455</p>
                        <p>tunombre@gmail.com</p>
                    </div>
                    <div className={css.footer__body__redes}>
                        <h4>SIGAMOS CONECTADOS</h4>
                        <div>
                            <div>
                                <i><BsWhatsapp /></i>
                            </div>
                            <div>
                                <i><BsInstagram /></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.footer__footer}>
                    <p>Copyright Zahria 2023 - Todos los derechos reservados</p>
                </div>
            </div>
        </>
    )
}
    