import React from 'react'

import {ContainerM} from '../styled';


interface Props{
    children: React.ReactNode;
}

const Modal = ({children}: Props) =>{
   
   const closeModal = (e: React.MouseEvent): void =>{
      const modal = document.querySelector("#modal")
      modal!.classList.add("hide")
   };
   
   
   return(
      <ContainerM id="modal" className='hide'>
       <div className='fade' onClick={closeModal}></div>
       <div className='modal'>
       <h2>Texto do Modal</h2>
       {children}
       </div>
      
      </ContainerM>
   )
}

export default Modal;