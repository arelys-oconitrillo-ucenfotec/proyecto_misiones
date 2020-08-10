'use strict';

const sct_card = document.querySelector('#card');

let lista_estrellas = [];

if (localStorage.getItem('listas_estrellas')) {
    lista_estrellas = JSON.parse(localStorage.getItem('listas_estrellas'));
}

const mostrar_estrellas = () => {
    lista_estrellas.forEach(obj_estrella => {
        console.log(lista_estrellas);
        let contenedor = document.createElement('div');

        let nombre = document.createElement('h1');
        nombre.innerText = obj_estrella.nombre;

        let boton = document.createElement('button');
        boton.type = 'button';
        boton.innerText = 'Ver';

        contenedor.appendChild(nombre);
        contenedor.appendChild(boton);

        sct_card.appendChild(contenedor);

        boton.addEventListener('click', () => {
            lista_estrellas = JSON.parse(localStorage.getItem('listas_estrellas'));
            window.location.href = `mostrar-cuerpo-celeste.html?tipo=${obj_estrella.nombre}`;
        });
    });
};

mostrar_estrellas();