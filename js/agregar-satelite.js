'use strict';

const input_nombre = document.querySelector('#txt-nombre');
const input_masa = document.querySelector('#txt-masa');
const input_temperatura = document.querySelector('#txt-temperatura');
const input_duracion_dia = document.querySelector('#txt-duracion-dia');
const input_dist_satelite_cuerpo = document.querySelector('#txt-dist-satelite-cuerpo');
const input_caracteristicas = document.querySelector('#txt-caracteristicas');
const boton = document.querySelector('#btn-guardar');

let lista_satelites = [];
let lista_cuerpos_celeste = [];

if (localStorage.getItem('listas_cuerpos_celestes')) {
    lista_cuerpos_celeste = JSON.parse(localStorage.getItem('listas_cuerpos_celestes'));
}

if (localStorage.getItem('lista_satelites')) {
    lista_satelites = JSON.parse(localStorage.getItem('lista_satelites'));
}

const registrar_satelite = () => {
    let planeta_json = JSON.parse(localStorage.getItem('planeta_seleccionado'));
    let planeta;
    let satelite;

    planeta = new Planeta(planeta_json.nombre, planeta_json.masa, planeta_json.temperatura, planeta_json.duracion_dia, planeta_json.tipo_cuerpo_celeste, planeta_json.distancia_sol, planeta_json.duracion_anno, planeta_json.cant_satelites);

    planeta_json.coleccion_satelites.forEach(satel_json => {
        let satelite = new Satelite(satel_json.nombre, satel_json.masa, satel_json.temperatura, satel_json.duracion_dia, satel_json.tipo_cuerpo_celeste, satel_json.dist_satelite_cuerpo, satel_json.caracteristicas);

        planeta.agregar_satelite(satelite);
    });

    let planeta_seleccionado = [];

    if (localStorage.getItem('planeta_seleccionado')) {
        planeta_seleccionado = JSON.parse(localStorage.getItem('planeta_seleccionado'));
    }

    console.log(planeta_seleccionado);

    satelite = new Satelite(input_nombre.value, input_masa.value, input_temperatura.value, input_duracion_dia.value, input_dist_satelite_cuerpo.value, input_caracteristicas.value, planeta_seleccionado.nombre);

    planeta.agregar_satelite(satelite);
    localStorage.setItem('planeta_seleccionado', JSON.stringify(planeta));

    lista_satelites.push(satelite);
    localStorage.setItem('lista_satelites', JSON.stringify(lista_satelites));

    lista_cuerpos_celeste.push(satelite);
    localStorage.setItem('listas_cuerpos_celestes', JSON.stringify(lista_cuerpos_celeste));

    modificar_planetas(planeta);

};

boton.addEventListener('click', registrar_satelite);