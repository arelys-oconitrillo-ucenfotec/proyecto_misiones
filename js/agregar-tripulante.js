'use strict';

const input_nombre = document.querySelector('#txt-nombre');
const boton = document.querySelector('#btn-guardar');

let lista_tripulantes = [];

if (localStorage.getItem('lista_tripulantes')) {
    lista_tripulantes = JSON.parse(localStorage.getItem('lista_tripulantes'));
}


const validar = () => {
    const inputs_requeridos = document.querySelectorAll('[required]');
    let tamano = inputs_requeridos.length;
    let error = false;
    for (let i = 0; i < tamano; i++) {
        //Recorre el arreglo y si algún campo no se ha llenado lo marca en rojo
        if (inputs_requeridos[i].value == '') {
            error = true; //Error es true si el campo está vacío
            inputs_requeridos[i].classList.add('input_error'); //Clase que viene desde el css
        }
        //Si el campo ya se llenó desmarca el campo en rojo
        else {
            inputs_requeridos[i].classList.remove('input_error');
        }
    }
    return error;
};

const registrar_tripulante = () => {
    let error = validar();

    if (error) {
        swal.fire({
            icon: 'warning',
            title: 'No se puede registrar el tripulante',
            text: 'Por favor rellene los campos resaltados en el formulario'
        });
    } else {
        let mision_json = JSON.parse(localStorage.getItem('mision_seleccionada'));
        let mision;
        let tripulante;

        mision = new Mision(mision_json.nombre, mision_json.fecha_lanzamiento, mision_json.duracion, mision_json.datos_interes, mision_json.resultado, mision_json.nave);

        mision_json.tripulantes.forEach(tripulante_json => {
            let tripulante = new Tripulante(tripulante_json.nombre);

            mision.agregar_tripulante(tripulante);

        });

        tripulante = new Tripulante(input_nombre.value);

        mision.agregar_tripulante(tripulante);
        localStorage.setItem('mision_seleccionada', JSON.stringify(mision));

        lista_tripulantes.push(tripulante);
        localStorage.setItem('lista_tripulantes', JSON.stringify(lista_tripulantes));

        modificar_misiones(mision);
    }

};

boton.addEventListener('click', registrar_tripulante);