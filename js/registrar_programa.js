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

const agregar_programa = (nombre, fecha_inicio, fecha_final, alcance, misiones) => {
    let nuevo_programa = {
        
        'nombre': nombre,
        'fecha_inicio': fecha_inicio,
        'fecha_final': fecha_final,
        'alcance': alcance,
        'misiones': misiones
    };
    programas.push(nuevo_programa);

    localStorage.setItem('lista_programas', JSON.stringify(programas));

    Swal.fire({
        'icon': 'success',
        'title': 'Producto agregado correctamente',
        'confirmButtonText': 'Entendido'
    }).then(() => {
        window.location.href = 'lista_programas.html';
    });

};

const validar = () => {
    let error = false;
    const inputs_requeridos = document.querySelectorAll('[required]');
    inputs_requeridos.forEach(input => {
        if (input.value == '') {
            input.classList.add('input_error');
            error = true;
        } else {
            input.classList.remove('input_error');
        }
    });
    
};

const registrar_programa = () => {
    let error = validar();

    if (error) {
        console.log('Por favor rellene los campos en blanco');
    } else {
        let nombre = txt_nombre.value;
        let fecha_inicio = txt_fecha_inicio.value;
        let fecha_final = txt_fecha_final.value;
        let alcance = txt_alcance.value;
        let misiones = txt_misiones.value;

        agregar_programa(nombre, fecha_inicio, fecha_final, alcance, misiones);
    }

};

btn_registrar_prog.addEventListener('click', registrar_programa);