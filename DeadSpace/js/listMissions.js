'use strict';

const tbody = document.querySelector('#table-body');
const input_search = document.querySelector('#txt-search');
const input_missions = document.querySelector("#slt-fate");
let list_missions = missions();

const show_missions = (list_missions) => {
    list_missions.forEach(obj_miss => {
        let row = tbody.insertRow();
        row.insertCell().innerHTML = obj_miss.belong_program;
        row.insertCell().innerHTML = obj_miss.name;
        row.insertCell().innerHTML = obj_miss.crew;
        row.insertCell().innerHTML = obj_miss.relase_date;
        row.insertCell().innerHTML = obj_miss.length_time;
        row.insertCell().innerHTML = obj_miss.important_data;
        row.insertCell().innerHTML = obj_miss.name_ship;
        row.insertCell().innerHTML = obj_miss.result;
        if (obj_miss.destination_place.length > 0) {
            row.insertCell().innerHTML = obj_miss.destination_place.length;
            let icon = document.createElement('i');
            icon.classList.add('fas', 'fa-eye');
            icon.style.cursor = 'pointer';
            row.insertCell().appendChild(icon);
            icon.addEventListener('click', () => {
                localStorage.setItem('data_mission', JSON.stringify(obj_miss));
                window.location.href = `show_dataMission.html`;
            })
        } else {
            row.insertCell().innerHTML = '--';
            let icon = document.createElement('i');
            icon.classList.add('fas', 'fa-eye-slash');
            row.insertCell().appendChild(icon);
        }

    });
};


//los filtros//
input_search.addEventListener('keyup', () => {
    tbody.innerHTML = ''
    let filter = input_search.value.toLowerCase();
    let name_filter = list_missions.filter((obj_name) => obj_name.name.toLowerCase().includes(filter));
    show_missions(name_filter);
})
input_missions.addEventListener('change', () => {
    let filter = input_missions.value;
    tbody.innerHTML = ''
    if (filter == '') {
        show_missions(list_missions);
    } else if (filter == '1') {
        tbody.innerHTML = ''
        let missions_areFate = list_missions.filter(fate => (fate.destination_place.length > 0))
        show_missions(missions_areFate);
    } else if (filter == '0') {
        tbody.innerHTML = ''
        let missions_not_have = list_missions.filter(fate => (fate.destination_place.length == 0))
        show_missions(missions_not_have);
    }
})
show_missions(list_missions);