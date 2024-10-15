import React from "react";

import {ContainerS,H1,Image} from '../styled'
import ImageList from '../assets/list-not.png'

function Section(){
    return(
        <ContainerS>
        
        <div className="text-title">
        <H1>QUAL É A SUA TAREFA?</H1>
        <h2>A organização de tarefas vai te ajudar a alcançar grandes metas!</h2>
        </div>
        
        <Image>
        <img src={ImageList} alt="list"></img>
        </Image>
        </ContainerS>
    )
}



export default Section;