'use strict';

const tbody = document.querySelector('#tbl-planetas tbody');
const filtro_nombre = document.querySelector('#txt_filtro_nombre');

let lista_planetas = [];

if (localStorage.getItem('listas_planetas')) {
    lista_planetas = JSON.parse(localStorage.getItem('listas_planetas'));
}

const mostrar_planetas = (plista_planetas) =>{
    tbody.innerHTML = '';
    plista_planetas.forEach(obj_planeta => {
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

mostrar_planetas(lista_planetas);

filtro_nombre.addEventListener('keyup', () => {
    let filtro = filtro_nombre.value.toLowerCase();
    let planetas_filtrados = lista_planetas.filter((planeta) => planeta.nombre.toLowerCase().includes(filtro));
    mostrar_planetas(planetas_filtrados);
});