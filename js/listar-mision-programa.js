'use strict';

const tbody = document.querySelector('#tbl-mision tbody');
let boton_atras = document.querySelector('#boton_atras');

let programa = JSON.parse(localStorage.getItem('programa_seleccionado'));

const mostrar_mision = () => {
    programa.coleccion_misiones.forEach(obj_mision => {
        let fila = tbody.insertRow();
        fila.insertCell().innerHTML = obj_mision.nombre;
        fila.insertCell().innerHTML = obj_mision.tripulantes;
        fila.insertCell().innerHTML = obj_mision.fecha_lanzamiento;
        fila.insertCell().innerHTML = obj_mision.duracion;
        fila.insertCell().innerHTML = obj_mision.datos_interes;
        fila.insertCell().innerHTML = obj_mision.resultado;
        fila.insertCell().innerHTML = obj_mision.nave;
        programa.coleccion_misiones.forEach(obj_cuerpo_destino => {
            console.log(obj_cuerpo_destino.coleccion_cuerpos_destino);
            obj_cuerpo_destino.coleccion_cuerpos_destino.forEach(obj => {
                console.log(obj);
                fila.insertCell().innerHTML = obj.nombre;
            });
            
        });
        

    });



};

mostrar_mision();

boton_atras.addEventListener('click', () => {
    window.location.href = 'mostrar-programa.html';
});