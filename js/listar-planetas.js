'use strict';

const tbody = document.querySelector('#tbl-planetas tbody');

let lista_planetas = [];

if (localStorage.getItem('listas_planetas')) {
    lista_planetas = JSON.parse(localStorage.getItem('listas_planetas'));
}

const mostrar_planetas = () =>{
    lista_planetas.forEach(obj_planeta => {
        console.log(lista_planetas);
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = obj_planeta.nombre;
        fila.insertCell().innerHTML = obj_planeta.masa;
        fila.insertCell().innerHTML = obj_planeta.temperatura;
        fila.insertCell().innerHTML = obj_planeta.duracion_dia;
        fila.insertCell().innerHTML = obj_planeta.distancia_sol;
        fila.insertCell().innerHTML = obj_planeta.duracion_anno;
        fila.insertCell().innerHTML = obj_planeta.cant_satelites;
        fila.insertCell().innerHTML = obj_planeta.coleccion_satelites;
    });
};

mostrar_planetas();