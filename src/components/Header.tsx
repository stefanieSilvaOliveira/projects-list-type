import React from "react";
import {Container,Logo} from '../styled'

import ImageLogo from '../assets/logo-list.png'



function Header(){
    return(
        <Container>
         <Logo>
        <img src={ImageLogo} alt="logo"></img>
        </Logo>   

        <ul>
        <li>
        <a href="#calendario">Caledário</a>
        </li>

        <li>
        <a href="#agenda">Agenda</a>
        </li>

        <li>
        <a href="#projetos">Projetos</a>
        </li>

        <li>
        <a href="#pessoal">Pessoal</a>
        </li>
        </ul>

        <button>COMEÇAR</button>
        </Container>
    )
}

export default Header;