'use strict';

const tbody = document.querySelector('#tbl-estrellas tbody');

let lista_estrellas = [];

if (localStorage.getItem('listas_estrellas')) {
    lista_estrellas = JSON.parse(localStorage.getItem('listas_estrellas'));
}

const mostrar_planetas = () =>{
    lista_estrellas.forEach(obj_estrella => {
        console.log(lista_estrellas);
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = obj_estrella.nombre;
        fila.insertCell().innerHTML = obj_estrella.masa;
        fila.insertCell().innerHTML = obj_estrella.temperatura;
        fila.insertCell().innerHTML = obj_estrella.duracion_dia;
        fila.insertCell().innerHTML = obj_estrella.edad;
        fila.insertCell().innerHTML = obj_estrella.composicion;
        fila.insertCell().innerHTML = obj_estrella.intensidad_luminica;
        fila.insertCell().innerHTML = obj_estrella.tamanno;
    });
};

mostrar_planetas();