'use strict';
const tbody = document.querySelector('#table-body');

let data_mission = JSON.parse(localStorage.getItem('data_mission'));
//se combierte el elemento enviado a json y recorro su lista de missiones
const show_data = () => {
    document.querySelector('#name-mission').innerText = `Nombre de la misión: ${data_mission.name}`;
    document.querySelector('#name-program').innerText = `Programa al que pertenece: ${data_mission.belong_program}`;
    data_mission.destination_place.forEach(obj_fate => {
        let row = tbody.insertRow();
        row.insertCell().innerHTML = obj_fate.name;
    })

}
show_data()