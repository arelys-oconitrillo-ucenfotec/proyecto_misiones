'use strict';

const obtener_planetas = () => {
    let lista_planetas = [];
    if (localStorage.getItem('listas_planetas')) {
        lista_planetas = JSON.parse(localStorage.getItem('listas_planetas'));
    }
    return lista_planetas;
};

const buscar_planeta = (pnombre) => {
    obtener_planetas();
    let planeta;
    lista_planetas.forEach(obj_planeta => {
        if (obj_planeta.codigo == pnombre) {
            planeta = obj_planeta;
        }
    });

    return planeta;
};

console.log(buscar_planeta('tierra'));
console.log(buscar_planeta('pluton'));


const modificar_planetas = (pplaneta) => {
    let lista_planetas = obtener_planetas();
    lista_planetas.forEach((obj_planeta, i) => {
        if (obj_planeta.nombre == pplaneta.nombre) {
            lista_planetas.push(pplaneta);
        }
    });

    localStorage.setItem('listas_planetas', JSON.stringify(lista_planetas));

};