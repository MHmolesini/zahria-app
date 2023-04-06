import { AiOutlinePlus } from 'react-icons/ai';
import "./faq.css"
import { data } from './preguntas'
import { useState } from 'react';

export const Faq = () => {

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i){
            return setSelected(null)
        }

        setSelected(i)
    }

    return (
        <>
            <div className='faq'>
                <h1>Preguntas Frecuentes</h1>
                <div className='faq__section'>
                    <div className='faq__section__question'>
                        {data.map((item, i) => {
                            return (
                                <>
                                    <i onClick={()=> toggle(i)}>{selected == i ? '-': <AiOutlinePlus />}</i>
                                    <div>
                                        <h3>{item.name}</h3>
                                        <div className={selected == i ? 'faq__section__question__show' : 'faq__section__question__text'}>
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

