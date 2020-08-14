'use strict';

const input_nombre = document.querySelector('#txt-nombre');
const boton = document.querySelector('#btn-guardar');

let lista_tripulantes = [];

if (localStorage.getItem('lista_tripulantes')) {
    lista_tripulantes = JSON.parse(localStorage.getItem('lista_tripulantes'));
}

const registrar_tripulante = () => {
    let mision_json = JSON.parse(localStorage.getItem('mision_seleccionada'));
    let mision;
    let tripulante;

    mision = new Mision(mision_json.nombre, mision_json.fecha_lanzamiento, mision_json.duracion, mision_json.datos_interes, mision_json.resultado, mision_json.nave);

    mision_json.tripulantes.forEach(tripulante_json => {
        let tripulante = new Tripulante(mision_json.nombre);

        mision.agregar_tripulante(tripulante);
        
    });

    tripulante = new Tripulante(input_nombre.value);

    mision.agregar_tripulante(tripulante);
    localStorage.setItem('mision_seleccionada', JSON.stringify(mision));

    lista_tripulantes.push(tripulante);
    localStorage.setItem('lista_tripulantes', JSON.stringify(lista_tripulantes));

    modificar_misiones(mision);
};

boton.addEventListener('click', registrar_tripulante);