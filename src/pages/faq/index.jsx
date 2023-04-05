import { AiOutlinePlus } from 'react-icons/ai';
import css from './faq.module.css'
import { useState } from 'react';

export const Faq = () => {

    const [show, setShow] = useState(false)

    const ShowText = () => {
        if(show == true){
            setShow(false)
        } else {
            setShow(true)
        }
    }

    return (
        <>
            <div className={css.faq}>
                <h1>Preguntas Frecuentes</h1>
                <div className={css.faq__section}>
                    <div className={css.faq__section__question}>
                        <i onClick={ShowText}><AiOutlinePlus />click</i>
                        <div>
                            {
                                show && (<h3>Envios</h3>)
                            }
                            
                            <div className={css.faq__section__question__text}>
                                <p>Hacemos envios a todo el pais a traves de correo argentino<br/><br/>Si tu compra supera los $15.000 no se cobrara el envio.</p>
                            </div>
                        </div> 
                    </div>
                    <div className={css.faq__section__question}>
                        <i><AiOutlinePlus /></i>
                        <div>
                            <h3>Tiempos de entrega</h3>
                            <div className={css.faq__section__question__text}>
                                <p>Los tiempos de entrega aplican una vez preparado y despachado el pedido.<br/><br/><span><span>CABA y GBA:</span> Una vez despachado, las entregas se realizan en un tiempo de 2 a 5 dias habiles.</span><br/><span><span>Interior: </span>Los tiempos estimados de entrega son de 3 dias habiles para ciudades principales y hasta 7 dias para localidades remotas o de baja población.</span></p>
                            </div>
                        </div> 
                    </div>
                    <div className={css.faq__section__question}>
                        <i><AiOutlinePlus /></i>
                        <div>
                            <h3>Retiro de locales</h3>
                            <div className={css.faq__section__question__text}>
                                <p>Por el momento esta opcion no esta disponible</p>
                            </div>
                        </div> 
                    </div>
                    <div className={css.faq__section__question}>
                        <i><AiOutlinePlus /></i>
                        <div>
                            <h3>Cancelaciones</h3>
                            <div className={css.faq__section__question__text}>
                                <p><span>¿Puedo cancelar el pedido una vez esta confirmado?</span><br />Podes cancelar el pedido unicamente si no fue despachado y sera entregado en tu domicilio.<br />Luego, podes gestionar un cambio o devolución.</p>
                            </div>
                        </div> 
                    </div>
                    <div className={css.faq__section__question}>
                        <i><AiOutlinePlus /></i>
                        <div>
                            <h3>Devoluciones</h3>
                            <div className={css.faq__section__question__text}>
                                <p>Estamos comprometidos en ayudarte a conseguir el equipamiento adecuado para conseguir tus objetivos que respaldamos todos nuestros productos con una garantia de satisfaccion del 100%.<br /><br />Si no estas completamente satisfecho con tu compra por favor devolvela dentro de los 10 dias de recibida la misma. Los cambios aplican unicamente por talle, en caso de que la prenda sea de talle unico, no aplica la misma. Los costos de envio por los cambios, quedan a cargo del comprador.</p>
                            </div>
                        </div> 
                    </div>
                    <div className={css.faq__section__question}>
                        <i><AiOutlinePlus /></i>
                        <div>
                            <h3>Medios de pago</h3>
                            <div className={css.faq__section__question__text}>
                                <p>Aceptamos todos los medios de pago online. Debito, credito y Mercado Pago</p>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
            
        </>
    )
}