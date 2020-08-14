'use strict';

const tbody = document.querySelector('#tbl-mision tbody');
let boton_atras = document.querySelector('#boton_atras');

let mision = JSON.parse(localStorage.getItem('mision'));

const obtener_parametro_url = () => {
    const location = new URL(window.location.href);
    const parametros = new URLSearchParams(location.search);

    let nombre = parametros.get('nombre');
    return nombre;
};

let nombre_mision = obtener_parametro_url('nombre');

const retornar_mision = () => {
    let misiones;

    if (localStorage.getItem('lista_misiones')) {
        misiones = JSON.parse(localStorage.getItem('lista_misiones'));
    }

    let misiones_filtradas = misiones.filter((obj) => obj.nombre == nombre_mision);

    if (misiones_filtradas.length == 0) {
        return misiones;
    } else {
        return misiones_filtradas;
    }
};

let misiones = retornar_mision();

console.log(misiones);

const mostrar_mision = () => {
    tbody.innerHTML = '';
    let fila = tbody.insertRow();
    fila.insertCell().innerHTML = misiones[0].nombre;
    fila.insertCell().innerHTML = misiones[0].tripulantes;
    fila.insertCell().innerHTML = misiones[0].fecha_lanzamiento;
    fila.insertCell().innerHTML = misiones[0].duracion;
    fila.insertCell().innerHTML = misiones[0].datos_interes;
    fila.insertCell().innerHTML = misiones[0].resultado;
    fila.insertCell().innerHTML = misiones[0].nave;
    fila.insertCell().innerHTML = misiones[0].coleccion_cuerpos_destino;

    let boton = document.createElement('button');
    boton.type = "button";
    boton.innerText = 'Agregar tripulante';
    fila.insertCell().appendChild(boton);
    boton.addEventListener('click', () => {
        localStorage.setItem('mision_seleccionada', JSON.stringify(mision));
        window.location.href = 'registrar-tripulante.html';
    });

};

if(misiones){
    mostrar_mision();
}


boton_atras.addEventListener('click', () => {
    window.location.href = 'listar-misiones.html';
});