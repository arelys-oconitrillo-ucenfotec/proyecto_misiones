'use strict';

const tbody = document.querySelector('#tbl-satelites tbody');
const filtro_nombre = document.querySelector('#txt_filtro_nombre');

let lista_satelites = [];

if (localStorage.getItem('lista_satelites')) {
    lista_satelites = JSON.parse(localStorage.getItem('lista_satelites'));
}


const mostrar_satelites = (plista_satelites) =>{
    tbody.innerHTML = '';
    plista_satelites.forEach(obj_satelite => {
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

mostrar_satelites(lista_satelites);

filtro_nombre.addEventListener('keyup', () => {
    let filtro = filtro_nombre.value.toLowerCase();
    let satelites_filtrados = lista_satelites.filter((satelite) => satelite.nombre.toLowerCase().includes(filtro));
    mostrar_satelites(satelites_filtrados);
});