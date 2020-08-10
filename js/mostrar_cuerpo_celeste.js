'use strict';

let cuerpo_celeste = JSON.parse(localStorage.getItem('cuerpo_celeste'));
let boton = document.querySelector('#boton_atras');

const obtener_parametro_url = () => {
    const location = new URL(window.location.href);
    const parametros = new URLSearchParams(location.search);

    let nombre = parametros.get('nombre');
    return nombre;
};


let nombre_cuerpo_celeste = obtener_parametro_url('nombre');

const retornar_cuerpos_celestes = () => {
    let cuerpos_celestes;

    if (localStorage.getItem('listas_cuerpos_celestes')) {
        cuerpos_celestes = JSON.parse(localStorage.getItem('listas_cuerpos_celestes'));
    }

    let cuerpos_celestes_filtrados = cuerpos_celestes.filter((obj) => obj.nombre == nombre_cuerpo_celeste);

    if (cuerpos_celestes_filtrados.length == 0) {
        return cuerpos_celestes;
    } else {
        return cuerpos_celestes_filtrados;
    }
};

let cuerpos_celestes = retornar_cuerpos_celestes();


if (cuerpos_celestes) {
    document.querySelector('.tipo').innerText = cuerpos_celestes[0].tipo;
    document.querySelector('.nombre').innerText = `Nombre: ${cuerpos_celestes[0].nombre}`;
    document.querySelector('.masa').innerText = `Masa: ${cuerpos_celestes[0].masa}`;
    document.querySelector('.temperatura').innerText = `Temperatura media: ${cuerpos_celestes[0].temperatura}`;
    document.querySelector('.duracion').innerText = `Duración de un día: ${cuerpos_celestes[0].duracion_dia}`;
}

boton.addEventListener('click', () => {
    window.location.href = 'listar_cuerpos_celestes.html';
});