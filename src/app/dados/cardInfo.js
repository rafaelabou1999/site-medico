import  Filosofia from  "@/../public/card-filosofia.jpg" ;
import  Checkup from  "@/../public/card-checkup.jpg" ;
import  Atero from  "@/../public/card-atero.webp" ;
import  Risco from  "@/../public/card-risco.jpg" ;

const cardInfo = [
    {
        id: 1,
        title: 'Risco Cirúrgico: entenda melhor seu significado',
        description:'O objetivo do risco cirúrgico é garantir que sua cirurgia seja realizada com máxima segurança. Nesta consulta o cardiologista fará...',
        imagem: Risco

    },
    {
        id: 2,
        title: 'Aterosclerose: você sabe como se proteger?',
        description: 'Ateroesclerose é uma doença inflamatória das artérias, onde placas de gordura e cálcio se acumulam na parede dos vasos sanguíneos',
        imagem: Atero

    },
    {
        id: 3,
        title: 'Hora do Check-up',
        description: "Você já parou para pensar na importância de cuidar do seu coração? Um check-up cardiológico pode identificar precocemente diversos problemas",
        imagem: Checkup

    }, 
   
    {
        id: 4,
        title: 'Medicina e Filosofia',
        description: 'Se uma pessoa volta a própria atenção para suas escolhas racionais e suas ações, ela conseguirá conquistar a possibilidade de prevenção - Epicteto',
        imagem: Filosofia

    },
 
    
]

export default cardInfo;