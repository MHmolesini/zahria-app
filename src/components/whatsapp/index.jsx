import { BsWhatsapp } from 'react-icons/bs';

import css from './whatsapp.module.css'

export const Whatsapp = () => {
    return (
        <>
            <div className={css.whatsapp}>
                <i><BsWhatsapp /></i>
            </div>
        </>
    )
}