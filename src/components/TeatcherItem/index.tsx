import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
<header>
    <img src="https://avatars3.githubusercontent.com/u/56043351?s=460&u=beea8f6da9ff7b7d293af918fe27450155ebb7ab&v=4" alt="Felipe Pereira"/>
    <div>
        <strong>Felipe Pereira</strong>
        <span> Química</span>
    </div>
</header>
    <p>Entusiasta das melhores tecnologias de química avançada.
        <br /> <br /> 
       Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
    </p>
    <footer>
        <p>
            Preço/hora
            <strong>R$ 80,00</strong>
        </p>
        <button type="button">
            <img src={whatsappIcon} alt="Whatsapp"/>
            <p>Entrar em contato</p>
        </button>
    </footer>
</article>
    )
}

export default TeacherItem;