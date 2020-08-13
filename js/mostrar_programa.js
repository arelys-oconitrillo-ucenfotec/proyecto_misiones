'use strict';

const tbody = document.querySelector('#tbl-programa tbody');
let boton_atras = document.querySelector('#boton_atras');

let programa_espacial = JSON.parse(localStorage.getItem('programa_espacial'));

console.log(programa_espacial);

const mostrar_programa = () => {
    tbody.innerHTML = '';
    let fila = tbody.insertRow();
    fila.insertCell().innerHTML = programa_espacial.nombre;
    fila.insertCell().innerHTML = programa_espacial.fecha_inicio;
    fila.insertCell().innerHTML = programa_espacial.fecha_final;
    fila.insertCell().innerHTML = programa_espacial.alcance;
    fila.insertCell().innerHTML = programa_espacial.coleccion_misiones;

    let boton = document.createElement('button');
    boton.type = "button";
    boton.innerText = 'Agregar Misión';
    fila.insertCell().appendChild(boton);
    boton.addEventListener('click', () => {
        localStorage.setItem('programa_seleccionado', JSON.stringify(programa_espacial));
        window.location.href = 'registrar-mision.html';
    });


};

mostrar_programa();


boton_atras.addEventListener('click', () => {
    window.location.href = 'listar_programas.html';
});