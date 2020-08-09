'use strict';

const tbody = document.querySelector('#tbl-satelites tbody');

let lista_satelites = [];

if (localStorage.getItem('listas_satelites')) {
    lista_satelites = JSON.parse(localStorage.getItem('listas_satelites'));
}

const mostrar_planetas = () =>{
    lista_satelites.forEach(obj_satelite => {
        console.log(lista_satelites);
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = obj_satelite.nombre;
        fila.insertCell().innerHTML = obj_satelite.masa;
        fila.insertCell().innerHTML = obj_satelite.temperatura;
        fila.insertCell().innerHTML = obj_satelite.duracion_dia;
        fila.insertCell().innerHTML = obj_satelite.dista_satelite_cuerpo_orbita;
        fila.insertCell().innerHTML = obj_satelite.caracteristicas;
        fila.insertCell().innerHTML = obj_satelite.planeta_pertenece;
    });
};

mostrar_planetas();