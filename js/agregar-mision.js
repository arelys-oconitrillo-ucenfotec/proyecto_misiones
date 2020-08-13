'use strict';

const input_nombre = document.querySelector('#txt-nombre');
const input_fecha = document.querySelector('#txt-fecha');
const input_duracion = document.querySelector('#txt-duracion');
const input_datos = document.querySelector('#txt-datos');
const input_resultado = document.querySelector('#txt-resultado');
const input_nave = document.querySelector('#txt-nave');
const boton = document.querySelector('#btn-guardar');

let lista_misiones = [];

if (localStorage.getItem('lista_misiones')) {
    lista_misiones = JSON.parse(localStorage.getItem('lista_satelites'));
}

const registrar_mision = () => {
    let programa_json = JSON.parse(localStorage.getItem('programa_seleccionado'));
    let programa;
    let mision;

    programa = new Programa(programa_json.nombre, programa_json.fecha_inicio, programa_json.fecha_final, programa_json.alcance);

    programa_json.coleccion_misiones.forEach(mision_json => {
        let mision = new Mision(mision_json.nombre, mision_json.fecha_lanzamiento, mision_json.duracion, mision_json.datos_interes, mision_json.resultado, mision_json.nave);

        programa.agregar_mision(mision);
        
    });

    mision = new Mision(input_nombre.value, input_fecha.value, input_duracion.value, input_datos.value, input_resultado.value, input_nave.value);

    programa.agregar_mision(mision);
    localStorage.setItem('programa_seleccionado', JSON.stringify(programa));

    lista_misiones.push(mision);
    localStorage.setItem('lista_misiones', JSON.stringify(lista_misiones));

    modificar_programas(programa);
};

boton.addEventListener('click', registrar_mision);