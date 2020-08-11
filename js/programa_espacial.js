'use strict';

class Programa {
    constructor(nombre, fecha_inicio, fecha_final, alcance, misiones) {
        this.nombre = nombre;
        this.fecha_inicio = fecha_inicio;
        this.fecha_final = fecha_final;
        this.alcance = alcance;
        this.coleccion_misiones = [];
    };

    agregar_mision = (obj_mision) => {
        this.lista_programas.push(obj_mision);
    };
};