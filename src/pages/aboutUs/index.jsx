import css from './aboutUs.module.css'

export const AboutUs = () => {
    return (
        <>
            <div className={css.aboutus}>
                <h1>Sobre Nosotros</h1>
                <div className={css.aboutus__section}>
                    <div>
                        <h3>Ya sea para trabajar o para divertirte, ¡Te acompañamos en cada momento del dia!</h3>
                        <p>En Zahria creemos que todas las mujeres deben sentirse comodas y seguras en su propia piel y por eso nos esforzamos en ofrecer una alta variedad de prendas para acompañarte en cada momento del dia.</p>
                    </div>
                    <div>
                        <h3>Nuestra empresa</h3>
                        <p>Zahria es una empresa Argentina de indumentaria femenina. Nos especializamos en la confección de prenda para ocasiones especiales (por ejemplo, salir a cenar o a una fiesta) pero tambien para el dia a dia.</p>
                    </div>
                </div>
            </div>
        </>
    )
}