'use strict';

const tbody = document.querySelector('#table-body');

let data_satellite = JSON.parse(localStorage.getItem('data_satellite'));
//se combierte el elemento enviado a json y recorro su lista de missiones
const show_data = () => {
    document.querySelector('#name-planet').innerText = ` ${data_satellite.name}`;
    data_satellite.satellites.forEach(obj_fate => {
        let row = tbody.insertRow();
        row.insertCell().innerHTML = obj_fate.name;
    })

}
show_data()