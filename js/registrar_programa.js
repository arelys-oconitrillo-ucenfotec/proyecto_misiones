'use strict';

const txt_nombre = document.querySelector('#txt-nombre');
const txt_fecha_inicio = document.querySelector('#txt-fecha-inicio');
const txt_fecha_final = document.querySelector('#txt-fecha-final');
const txt_alcance = document.querySelector('#txt-alcance');
const txt_misiones = document.querySelector('#txt-misiones');
const btn_registrar_prog = document.querySelector('#btn-registrar-prog');

let programas = [];

if (localStorage.getItem('lista_programas')) {
    programas = JSON.parse(localStorage.getItem('lista_programas'));
}

const registrar_programa = () => {
    let nombre = txt_nombre.value;
    let fecha_inicio = txt_fecha_inicio.value;
    let fecha_final = txt_fecha_final.value;
    let alcance = txt_alcance.value;
    let misiones = txt_misiones.value;
    let obj_programa;

    programas.push(obj_programa);
    localStorage.setItem('lista_programas', JSON.stringify(programas));

    obj_programa = new Programa (nombre, fecha_inicio, fecha_final, alcance, misiones)
    programas.push(obj_programa);
};

btn_registrar_prog.addEventListener('click', registrar_programa);