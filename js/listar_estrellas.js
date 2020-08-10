'use strict';

const tbody = document.querySelector('#tbl-estrellas tbody');
const filtro_nombre = document.querySelector('#txt_filtro_nombre');


let lista_estrellas = [];

if (localStorage.getItem('listas_estrellas')) {
    lista_estrellas = JSON.parse(localStorage.getItem('listas_estrellas'));
}

const mostrar_estrellas = (plista_estrellas) =>{
    tbody.innerHTML = '';
    plista_estrellas.forEach(obj_estrella => {
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

mostrar_estrellas(lista_estrellas);

filtro_nombre.addEventListener('keyup', () => {
    let filtro = filtro_nombre.value.toLowerCase();
    let estrellas_filtrados = lista_estrellas.filter((estrella) => estrella.nombre.toLowerCase().includes(filtro));
    mostrar_estrellas(estrellas_filtrados);
});