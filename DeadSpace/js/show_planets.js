'use strict';

const tbody = document.querySelector('#table-body');
let galaxy = get_bodies();

const show_celestialBodys = () => {
    galaxy.forEach(obj_cb => {
        if (obj_cb.type == 'Planeta') {
            let row = tbody.insertRow();
            row.insertCell().innerHTML = obj_cb.name;
            if (obj_cb.satellites.length > 0) {
                row.insertCell().innerHTML = obj_cb.satellites.length;
            } else {
                row.insertCell().innerHTML = '--';
            }
            let buttom = document.createElement('button');
            buttom.type = "button";
            buttom.innerText = 'Agregar';
            buttom.classList.add('button-tables');
            row.insertCell().appendChild(buttom);

            buttom.addEventListener('click', () => {
                localStorage.setItem('selected_planet', JSON.stringify(obj_cb));
                window.location.href = `formSatellite.html?name=${obj_cb.name}`;
            });
        }
    });
}
show_celestialBodys()