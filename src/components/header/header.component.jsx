import React from 'react';
 
import './header.styles.scss';

const Header = () => (<header>
    <h1>AdaptaMaterialEscolar</h1>
    <ul className='links-container'>
        <li>Inicio</li>
        <li>Ayuda</li>
        <li>Contacto</li>
    </ul>
</header>);

export default Header;