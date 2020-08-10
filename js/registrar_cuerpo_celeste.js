'use strict';
const input_nombre = document.querySelector('#txt-nombre');
const input_masa = document.querySelector('#txt-masa');
const input_temperatura = document.querySelector('#txt-temperatura');
const input_duracion_dia = document.querySelector('#txt-duracion-dia');
const info_estrella = document.querySelector('#info-estrella');
const info_planeta = document.querySelector('#info-planeta');
const info_satelite = document.querySelector('#info-satelite');
const btn_registrar = document.querySelector('#btn-registrar');

info_estrella.classList.add('ocultar');
info_planeta.classList.add('ocultar');
info_satelite.classList.add('ocultar');

let lista_estrellas = [];
let lista_planetas = [];
let lista_satelites = [];
let lista_cuerpos_celeste = [];

if (localStorage.getItem('listas_estrellas')) {
    lista_estrellas = JSON.parse(localStorage.getItem('listas_estrellas'));
}

if (localStorage.getItem('listas_planetas')) {
    lista_planetas = JSON.parse(localStorage.getItem('listas_planetas'));
}

if (localStorage.getItem('listas_satelites')) {
    lista_satelites = JSON.parse(localStorage.getItem('listas_satelites'));
}

if (localStorage.getItem('listas_cuerpos_celestes')) {
    lista_cuerpos_celeste = JSON.parse(localStorage.getItem('listas_cuerpos_celestes'));
}


const registrar_cuerpo_celeste = () => {
    let nombre = input_nombre.value;
    let masa = input_masa.value;
    let temperatura = input_temperatura.value;
    let duracion_dia = input_duracion_dia.value;
    let tipo_cuerpo_celeste = document.querySelector('input[type=radio]:checked').value;
    

    let obj_cuerpos_celestes;

    if (tipo_cuerpo_celeste == 'Estrella') {
        console.log(localStorage.getItem('listas_cuerpos_celestes'));
        let edad = document.querySelector('#txt-edad').value;
        let composicion = document.querySelector('#txt-composicion').value;
        let intensidad_lumi = document.querySelector('#txt-intensidad-lumi').value;
        let tamanno = document.querySelector('#txt-tamanno').value;

        obj_cuerpos_celestes = new Estrella(nombre, masa, temperatura, duracion_dia, tipo_cuerpo_celeste, edad, composicion, intensidad_lumi, tamanno);

        lista_estrellas.push(obj_cuerpos_celestes);
        localStorage.setItem('listas_estrellas', JSON.stringify(lista_estrellas));

        lista_cuerpos_celeste.push(obj_cuerpos_celestes);
        localStorage.setItem('listas_cuerpos_celestes', JSON.stringify(lista_cuerpos_celeste));

    } else {
        if (tipo_cuerpo_celeste == 'Planeta') {
            let distancia_sol = document.querySelector('#txt-dist-sol').value;
            let duracion_anno = document.querySelector('#txt-duracion-anno').value;
            let cant_satelites = document.querySelector('#txt-cant-satelites').value;
            
            obj_cuerpos_celestes = new Planeta(nombre, masa, temperatura, duracion_dia, tipo_cuerpo_celeste, distancia_sol, duracion_anno, cant_satelites);

            lista_planetas.push(obj_cuerpos_celestes);
            localStorage.setItem('listas_planetas', JSON.stringify(lista_planetas));

            lista_cuerpos_celeste.push(obj_cuerpos_celestes);
            localStorage.setItem('listas_cuerpos_celestes', JSON.stringify(lista_cuerpos_celeste));

        } else {
            if (tipo_cuerpo_celeste == 'Satélite') {
                let dist_satelite_cuerpo = document.querySelector('#txt-dist-satelite-cuerpo').value;
                let caracteristicas = document.querySelector('#txt-caracteristicas').value;
                let planeta_pertenece = document.querySelector('#txt-planeta-pertenece').value;
                obj_cuerpos_celestes = new Satelite(nombre, masa, temperatura, duracion_dia, tipo_cuerpo_celeste, dist_satelite_cuerpo, caracteristicas, planeta_pertenece);

                lista_satelites.push(obj_cuerpos_celestes);
                localStorage.setItem('listas_satelites', JSON.stringify(lista_satelites));

                lista_cuerpos_celeste.push(obj_cuerpos_celestes);
                localStorage.setItem('listas_cuerpos_celestes', JSON.stringify(lista_cuerpos_celeste));

            }
        }
    }

    console.log(lista_cuerpos_celeste);


};

btn_registrar.addEventListener('click', registrar_cuerpo_celeste);

document.querySelector('#rbt-estrella').addEventListener('click', () => {
    info_estrella.classList.remove('ocultar');
});

document.querySelector('#rbt-estrella').addEventListener('click', () => {
    info_satelite.classList.add('ocultar');
});

document.querySelector('#rbt-estrella').addEventListener('click', () => {
    info_planeta.classList.add('ocultar');
});

document.querySelector('#rbt-planeta').addEventListener('click', () => {
    info_planeta.classList.remove('ocultar');
});

document.querySelector('#rbt-planeta').addEventListener('click', () => {
    info_estrella.classList.add('ocultar');
});

document.querySelector('#rbt-planeta').addEventListener('click', () => {
    info_satelite.classList.add('ocultar');
});

document.querySelector('#rbt-satelite').addEventListener('click', () => {
    info_satelite.classList.remove('ocultar');
});

document.querySelector('#rbt-satelite').addEventListener('click', () => {
    info_estrella.classList.add('ocultar');
});

document.querySelector('#rbt-satelite').addEventListener('click', () => {
    info_planeta.classList.add('ocultar');
});

