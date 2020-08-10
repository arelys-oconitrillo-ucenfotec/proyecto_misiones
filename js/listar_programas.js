'use strict';
const tabla = document.querySelector('#tbl-programas tbody');

const obtener_programas = () => {
    let programas = [];

    if (localStorage.getItem('lista_programas')) {
        programas = JSON.parse(localStorage.getItem('lista_programas'));
    }

    return productos;
};

const mostrar_programas = () => {
    let productos = obtener_programas();
    tabla.innerHTML = '';

    productos.forEach(obj_programa => {
        let fila = tabla.insertRow();
        fila.insertCell().innerHTML = obj_programa.nombre;
        fila.insertCell().innerHTML = obj_programa.fecha_inicio;
        fila.insertCell().innerHTML = obj_programa.fecha_final;
        fila.insertCell().innerHTML = obj_programa.alcance;
        fila.insertCell().innerHTML = obj_programa.misiones;
    });
};

mostrar_programas();