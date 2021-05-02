'use strict';
const tbody = document.querySelector('#table-body');

let spacePrograms = get_programs();

const show_programs = () => {
    spacePrograms.forEach(obj_pro => {
        let row = tbody.insertRow();
        row.insertCell().innerHTML = obj_pro.name;
        if (obj_pro.missions.length > 0) {
            row.insertCell().innerHTML = obj_pro.missions.length;
        } else {
            row.insertCell().innerHTML = '--';
        }
        let buttom = document.createElement('button');
        buttom.type = "button";
        buttom.classList.add('button-tables');
        buttom.innerText = 'Agregar';
        row.insertCell().appendChild(buttom);

        buttom.addEventListener('click', () => {
            localStorage.setItem('selected_program', JSON.stringify(obj_pro));
            window.location.href = `formMissions.html?name=${obj_pro.name}`;
        });
    });
}
show_programs();