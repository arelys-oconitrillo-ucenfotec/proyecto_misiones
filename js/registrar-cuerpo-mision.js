'use strict';

const slt_cuerpos_container = document.querySelector('#slt-cuerpos-container');
//const slt_cuerpos_container = document.querySelector('#slt-cuerpos-container input[type=checkbox]:checked');
const boton = document.querySelector('#btn-guardar');

let lista_cuerpos = [];

if (localStorage.getItem('listas_cuerpos_celestes')) {
    lista_cuerpos = JSON.parse(localStorage.getItem('listas_cuerpos_celestes'));
}

const crear_select_cuerpos = () => {
    let cuerpos_celestes = obtener_cuerpos();
    let select_cuerpos = document.createElement('div');
    select_cuerpos.id = 'slt_cuerpos';

    cuerpos_celestes.forEach(cuerpo => {
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.id = cuerpo.nombre;
        input.name = cuerpo.nombre;
        input.value = cuerpo.tipo;

        let label = document.createElement('label');
        label.innerText = cuerpo.nombre;
        label.setAttribute('for', cuerpo.nombre);

        select_cuerpos.appendChild(input);
        select_cuerpos.appendChild(label);
    });

    slt_cuerpos_container.appendChild(select_cuerpos);
};

const registrar_destino = () => {
    let mision_json = JSON.parse(localStorage.getItem('mision_seleccionada'));
    let mision;
    let destino;

    mision = new Mision(mision_json.nombre, mision_json.fecha_lanzamiento, mision_json.duracion, mision_json.datos_interes, mision_json.resultado, mision_json.nave);

    mision_json.coleccion_cuerpos_destino.forEach(destino_json => {
        console.log(destino_json);
        if(destino_json.tipo == 'Planeta'){
            let destino = new Planeta(destino_json.nombre, destino_json.masa, destino_json.temperatura, destino_json.duracion_dia, destino_json.tipo_celeste, destino_json.distancia_sol, destino_json.duracion_anno, destino_json.cant_satelites);
            mision.agregar_cuerpos_destino(destino);

        } else {
            if(destino_json.tipo == 'Estrella'){
                let destino = new Estrella(destino_json.nombre, destino_json.masa, destino_json.temperatura, destino_json.duracion_dia, destino_json.tipo_cuerpo_celeste, destino_json.edad, destino_json.composicion, destino_json.intensidad_lumi, destino_json.tamanno);
                mision.agregar_cuerpos_destino(destino);
                
            } else {
                if (destino_json.tipo == 'Satélite'){
                    let destino = new Satelite(destino_json.nombre, destino_json.masa, destino_json.temperatura, destino_json.duracion_dia, destino_json.tipo_celeste, destino_json.distancia_sol, destino_json.duracion_anno, destino_json.cant_satelites);
                    mision.agregar_cuerpos_destino(destino);

                }
            }
        } 
    }); 


    
    let cuerpos_celestes = JSON.parse(localStorage.getItem('listas_cuerpos_celestes'));

    destino = cuerpos_celestes.filter((obj) => obj.tipo == document.querySelector('#slt-cuerpos-container input[type=checkbox]:checked').value);
    console.log(destino);
    
    mision.agregar_cuerpos_destino(destino);
    localStorage.setItem('mision_seleccionada', JSON.stringify(mision));

    modificar_misiones(mision);

    
};


crear_select_cuerpos();

boton.addEventListener('click', registrar_destino);