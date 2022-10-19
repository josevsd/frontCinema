
const acao = () =>{
    let modal = document.querySelector('.modal');
    let modalUm = document.queryCommandValue('.modalDois')

    modal.style.display = 'block';
    modalUm.style.display = 'none';
}

const fechar = () =>{
    let modal = document.querySelector('.modal');
    let modalDois = document.querySelector('.modalDois') 
    let modalTres = document.querySelector('.modalTres')
    let modalQuatro = document.querySelector('.modalQuatro')
    let modalCinco = document.querySelector('.modalCinco')
    let modalSeis = document.querySelector('.modalSeis')
    let modalSete = document.querySelector('.modalSete')

    modalSete.style.display= 'none'
    modalSeis.style.display= 'none'
    modalCinco.style.display= 'none'
    modalQuatro.style.display= 'none'
    modalTres.style.display= 'none'
    modalDois.style.display= 'none'
    modal.style.display = 'none';
}


const abrirDois = () =>{
    let modal = document.querySelector('.modalDois');
    setData()
    modal.style.display = 'block';
    

}

const abrirTres = () =>{
    let modal = document.querySelector('.modalTres');
    
    modal.style.display = 'block';
}

const abrirQuatro = () =>{
    let modal = document.querySelector('.modalQuatro');
    
    modal.style.display = 'block';
}


const abrirCinco = () =>{
    let modal = document.querySelector('.modalCinco');
    
    modal.style.display = 'block';
}

const abrirSeis = () =>{
    modal = document.querySelector('.modalSeis');
    
    modal.style.display = 'block';
}

const abrirSete = () =>{
    modal = document.querySelector('.modalSete');
    
    modal.style.display = 'block';
}

const setData = () =>{
    let local = localStorage
    // let nomes = " Orfã: A origem"

    // localStorage.setItem("nome", nome)
    // let data ={
    //     nome: nomes,
    //     "capac_max": 100,
    //     "horario": " 15:00 e 18:00",
    //     "ing_vendas": "",
    //     "id_filme": ""
    // }
    // local.setItem("sala", JSON.stringify(data));
    
    const sala = JSON.parse(local.getItem('sala'))
    
    const testCont = document.querySelector("#teste")
    const horas = document.querySelector("#horas")
    const Capaci = document.querySelector('#Capa')


    console.log(testCont)

    Capaci.textContent = sala.capac_max
    testCont.textContent = sala.nome
    horas.textContent = sala.horario
}






