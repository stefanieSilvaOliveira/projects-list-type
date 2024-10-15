import styled from 'styled-components';


export const Container = styled.div`
          display: flex;
          align-items: center;
          justify-content: space-around;
          height: 110px;
          background-color: #000;


          @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            height: 50%;
            width: 100%;
      }

          ul{
            display: flex;
            list-style-type: none;


            @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            margin-top: 10px;
            margin-left: -10px;
          }
          }

          li{
            margin: 30px 20px 20px 30px;

            @media (max-width: 768px) {
              text-align: center;
              margin: 15px 20px;
          }
          }

          a{
            text-decoration: none;
            color: #fff;
            font-size: 16px;
            font-weight: 500;
            position: relative; 

            @media (max-width: 768px) {
            text-align: center;
            font-size: 15px;
          }

           &:hover::after {
           content: '';
           position: absolute;
           left: 0;
           right: 0;
           bottom: -5px; /* Distância da linha em relação ao texto */
           height: 2px; /* Espessura da linha */
           background: linear-gradient(to right, #EA98DA, #5B6CF9);
          
    }
    }
  
           button{
            height: 35px;
            width: 110px;
            margin-right: 80px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            border: none;
            cursor: pointer;
            font-size: 14px;
            font-weight: 500;
            color: #000;
            background: linear-gradient(to right, #EA98DA, #5B6CF9);
            box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
            transition: transform 0.2s, box-shadow 0.2s;

            @media (max-width: 768px) {
               position: absolute;
               top: 0%;
               right: 0%;
               margin: 20px 20px;  
               height: 30px;
               width: 90px; 
               font-size: 13px;
               font-weight: 500;
          }

            &:hover{
                box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
            }

            &:active{
                transform: translateY(4px);
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
            }
          }
`
export const Logo = styled.image`
      
       img{
        height: 150px;
        width: 150px;
        margin-left: -30px;
        margin-top: 20px;
        cursor: pointer;

        @media (max-width: 768px) {
            position: absolute;
            top: 0%;
            left: 0%;
            margin-top: -30px;
            margin-left: -5px;
           
          }
       }     
`
export const ContainerS = styled.div`   
             display: flex;
             justify-content: space-around;
             align-items: center;
             gap: 20px;
             background-color: #FFF;

             @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;    
           }

          
             .text-title{
              flex-direction: column;
              margin-top: -120px;

              @media (max-width: 768px) {
                 margin-top: 60px; 
                 text-align: center;
                 margin-right: 50px;
           }
             }

             h2{
              text-align: center;
              width: 400px;
              font-size: 13px;
              font-weight: 300;
              margin-left: 50px;
              margin-bottom: 10px;
              cursor: pointer;

              @media (max-width: 768px) {
               width: 300px;    
           }
             }
`
export const H1 = styled.h1`  
           text-align: center; 
           margin-bottom: 20px;
           margin-left: 50px;
           font-size: 45px;
           font-family: 'Title';
           color: #000;
           cursor: pointer;

           @media (max-width: 768px) {
            font-size: 40px; 
           }            
`        
export const Image = styled.image`
            margin-right: -100px;  
            
            @media (max-width: 768px) {
             display: none;
           }            
`
export const ContainerF = styled.div`
             display: flex;
             align-items: center;
             background-color: #FFF;

             form{
              display: flex;
              margin-top: -300px;
              margin-left: 200px;
              align-items: center;
              flex-direction: column;
             }

             @media (max-width: 768px) {
              margin: 300px 20px 20px -150px;
           }        

             label {
             font-size: 14px; 
             font-weight: 500;
             cursor: pointer;
             }
             
            input{
              width: 320px;
              height: 40px;
              border: 1px solid #9BA8AB;
              margin-bottom: 15px;
              outline: none; 
              font-size: 16px;
              font-weight: 400;
              text-align: center;
              cursor: pointer;
              box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1); /* Sombra delicada */
              transition: box-shadow 0.3s; /* Transição suave */

              input:focus {
              box-shadow: 0 4px 5px rgba(0, 0, 0, 0.3); /* Sombra ao focar */
              }
             
            }
            
             button{
              width: 150px;
              height: 40px;
              display: flex;
              justify-content: center;
              align-items: center;
              margin-top: 5px;
              background-color: #000;
              box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); 
              transition: box-shadow 0.3s, transform 0.1s;
              border: none;
              border-radius: 30px;
              font-size: 14px;
              cursor: pointer;
              font-weight: 400;
              color: #FFF;
             

              &:hover{
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
              }

              &:active {
             transform: scale(0.95); /* Efeito de clique leve */
             box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); /* Reduz a sombra ao clicar */
  }
              }    
`

export const ContainerList = styled.div`
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 15px;
          max-width: 400px;
          margin-left: 170px;
          margin-bottom: 10px;
          padding: 1rem;
          background: rgba(255, 255, 255, 0.2); /* Fundo semi-transparente */
          backdrop-filter: blur(10px); /* Desfoque do fundo */
          border-radius: 10px; /* Arredondamento das bordas */
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); /* Sombra delicada */

          @media (max-width: 768px) {
            margin-left: 100px; 
            width:200px;
           }        

          .list-content{
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          }

          h4{
            text-align: center;
            margin-left: 20px;
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: 400;
            color: #000;     
          }
          
          p{
            font-size: 18px;
            font-weight: 400;
            color: #000;

            @media (max-width: 768px) {
            font-size: 16px; 
            text-align: center;
           }        
          }
          
        .icon{
          display: flex;
          justify-content: center;
          margin-top: -30px;
          align-items: center;
          gap: 15px;
          margin-left: 300px;
          cursor: pointer;

          @media (max-width: 768px) {
         flex-direction: column;
         margin-right: 20px;
    }
          
        }
        
    .bi-pencil-fill {
     font-size: 18px; /* ajuste o tamanho do ícone conforme necessário */
     color: #000; /* ícone branco */
     transition: transform 0.2s ease, opacity 0.2s ease; /* transições suaves */
     cursor: pointer; /* muda o cursor para indicar que é clicável */
}

.bi-pencil-fill:hover {
    transform: scale(1.1); /* aumenta um pouco o ícone ao passar o mouse */
}

.bi-pencil-fill:active {
    opacity: 0.7; /* diminui a opacidade ao clicar */
}


.bi-trash3-fill {
     font-size: 18px; /* ajuste o tamanho do ícone conforme necessário */
     color: #000; /* ícone branco */
     transition: transform 0.2s ease, opacity 0.2s ease; /* transições suaves */
     cursor: pointer; /* muda o cursor para indicar que é clicável */
}

.bi-trash3-fill:hover {
    transform: scale(1.1); /* aumenta um pouco o ícone ao passar o mouse */
}

.bi-trash3-fill:active {
    opacity: 0.7; /* diminui a opacidade ao clicar */
}
`
export const ContainerM = styled.div`
         width: 90%;
         display: flex;

         @media (max-width: 768px) {
             width: 100%;
      }
        
        .fade{
          width: 100%;
          height: 100%;
          position: absolute;
          background-color: #000;
          opacity: 0.3 ;


        }
        .modal{
          position: absolute;
          top: 10%;
          left: 0%;
          right: 0;
          margin: 0 auto;
          width: 500px;
          height: 400px;
          z-index: 1;
          background-color: #fff;
          display: flex;
          flex-direction:column;
          justify-content: center;
          text-align: center; 
          }

        h2 div{
          margin-bottom: 1em;
           display: none;
        }

        h2{
          font-size: 15px;
          display: none;
         }
          

        .modal form{
        margin-top: 50px;
        margin-left: 95px;

        @media (max-width: 768px) {
        margin-left: 180px;
        margin-top: -200px;
    }
       }

`
