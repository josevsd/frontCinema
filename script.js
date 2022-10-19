const acao = () =>{
    let modal = document.querySelector('.modal');

    modal.style.display = 'block';
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