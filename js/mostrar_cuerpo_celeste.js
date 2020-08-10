'use strict';

const card_cuerpo_celeste = document.querySelector('#card');

const obtener_parametro_url = () => {
    const location = new URL(window.location.href);
    const parametros = new URLSearchParams(location.search);

    let tipo = parametros.get('tipo');
    return tipo;
};


let tipo_cuerpo_celeste = obtener_parametro_url('tipo');

const retornar_cuerpos_celestes = () => {
    let cuerpos_celestes = [];

    if (localStorage.getItem('listas_cuerpos_celestes')) {
        cuerpos_celestes = JSON.parse(localStorage.getItem('listas_cuerpos_celestes'));
    }

    console.log(cuerpos_celestes);

    let cuerpos_celestes_filtrados = cuerpos_celestes.filter((obj) => obj.tipo[0] == tipo_cuerpo_celeste);

    if(cuerpos_celestes_filtrados.length == 0){
        return cuerpos_celestes;
    } else {
        return cuerpos_celestes_filtrados;
    }
};

let cuerpos_celestes = retornar_cuerpos_celestes();

const mostrar_cuerpos_celestes = (pcuerpos_celestes) =>{
    card_cuerpo_celeste.innerHTML = '';

    pcuerpos_celestes.forEach(obj => {
        let card_cuerpos = document.createElement('div');
        card_cuerpos.classList.add('card');

        
    });
};

mostrar_cuerpos_celestes(cuerpos_celestes);