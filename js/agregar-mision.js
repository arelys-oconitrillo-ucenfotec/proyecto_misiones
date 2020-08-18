'use strict';

const input_nombre = document.querySelector('#txt-nombre');
const input_fecha = document.querySelector('#txt-fecha');
const input_duracion = document.querySelector('#txt-duracion');
const input_datos = document.querySelector('#txt-datos');
const input_resultado = document.querySelector('#txt-resultado');
const input_nave = document.querySelector('#txt-nave');
const slt_cuerpos_container = document.querySelector('#slt-cuerpos-container');
const boton = document.querySelector('#btn-guardar');

let lista_misiones = [];

if (localStorage.getItem('lista_misiones')) {
    lista_misiones = JSON.parse(localStorage.getItem('lista_misiones'));
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

const crear_select_cuerpos = () => {
    let cuerpos_celestes = obtener_cuerpos();
    let select_cuerpos = document.createElement('div');
    select_cuerpos.id = 'slt_cuerpos';

    cuerpos_celestes.forEach(cuerpo => {
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.id = cuerpo.nombre;
        input.name = cuerpo.nombre;
        input.value = cuerpo.nombre;

        let label = document.createElement('label');
        label.innerText = cuerpo.nombre;
        label.setAttribute('for', cuerpo.nombre);

        select_cuerpos.appendChild(input);
        select_cuerpos.appendChild(label);
    });

    slt_cuerpos_container.appendChild(select_cuerpos);
};

const registrar_mision = () => {
    let nombre = input_nombre.value;
    if (buscar_mision(nombre)) {
        //sweet alert, ya existe una tienda con ese código
    } else {
        let programa_json = JSON.parse(localStorage.getItem('programa_seleccionado'));
        let programa;
        let mision;

        programa = new Programa(programa_json.nombre, programa_json.fecha_inicio, programa_json.fecha_final, programa_json.alcance);

        programa_json.coleccion_misiones.forEach(mision_json => {
            let mision = new Mision(mision_json.nombre, mision_json.fecha_lanzamiento, mision_json.duracion, mision_json.datos_interes, mision_json.resultado, mision_json.nave);

            programa.agregar_mision(mision);

        });

        mision = new Mision(input_nombre.value, input_fecha.value, input_duracion.value, input_datos.value, input_resultado.value, input_nave.value);

        let cuerpos_celestes = obtener_cuerpos();
        let checkboxes_cuerpos_celestes = document.querySelectorAll('#slt_cuerpos input');

        checkboxes_cuerpos_celestes.forEach(checkbox => {
            if (checkbox.checked) {
                cuerpos_celestes.forEach(cuerpo_json => {
                    let cuerpo;
                    if (cuerpo_json.nombre == checkbox.value) {
                        if (cuerpo_json.tipo == 'Estrella') {
                            cuerpo = new Estrella(cuerpo_json.nombre, cuerpo_json.masa, cuerpo_json.temperatura, cuerpo_json.duracion_dia, cuerpo_json.tipo_cuerpo_json_celeste, cuerpo_json.edad, cuerpo_json.composicion, cuerpo_json.intensidad_lumi, cuerpo_json.tamanno);
                            mision.agregar_cuerpos_destino(cuerpo);
                          

                        } else {
                            if (cuerpo_json.tipo == 'Planeta') {
                                cuerpo = new Planeta(cuerpo_json.nombre, cuerpo_json.masa, cuerpo_json.temperatura, cuerpo_json.duracion_dia, cuerpo_json.tipo_cuerpo_json_celeste, cuerpo_json.distancia_sol, cuerpo_json.duracion_anno, cuerpo_json.cant_satelites);
                                mision.agregar_cuerpos_destino(cuerpo);
                                

                            } else {

                                if (cuerpo_json.tipo == 'Satélite') {
                                    cuerpo = new Satelite(cuerpo_json.nombre, cuerpo_json.masa, cuerpo_json.temperatura, cuerpo_json.duracion_dia, cuerpo_json.tipo_cuerpo_json_celeste, cuerpo_json.distancia_sol, cuerpo_json.duracion_anno, cuerpo_json.cant_satelites);
                                    mision.agregar_cuerpos_destino(cuerpo);
                                    
                                }
                            }
                        }
                    }


                });
            }
        });

        programa.agregar_mision(mision);
        localStorage.setItem('programa_seleccionado', JSON.stringify(programa));

        lista_misiones.push(mision);
        localStorage.setItem('lista_misiones', JSON.stringify(lista_misiones));

        modificar_programas(programa);
        modificar_misiones(mision);
    }


};

crear_select_cuerpos();

boton.addEventListener('click', registrar_mision);