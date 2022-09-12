import logo from '../img/WEST.png';

const Nosotros = () => {
    return (
        <div className='nosotros'>
            <div className='nosotrosImg'>
                <img src={logo}></img>
            </div>
            <p>
                Tienda de consignación HYPE en la Argentina. Con mas de 10 años de experiencia en la industria de los sneakers y el hype, 
                traemos la experiencia y la cultura del streetwear y las marcas highend al país mediante nuestro sistema de consignación. 
                En WEST vas a encontrar productos únicos y 100% originales.
            </p>
        </div>
    )
}

export default Nosotros