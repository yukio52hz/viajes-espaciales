'use strict';
const tbody = document.querySelector('#t-body');

const slt_type = document.querySelector('#slt-cbody');
const input_search = document.querySelector('#txt-search');
let universe = deep_hollow();
//aqui cargo los json al comienso de una//
let space_programs = get_programs();
let galaxy = get_bodies();
if (localStorage.getItem('list_celestialBody') == null) {
    json_celestialBody.forEach(obj_cb => {
        galaxy.push(obj_cb)
        localStorage.setItem('list_celestialBody', JSON.stringify(galaxy))
    });
}
if (localStorage.getItem('list_spacePrograms') == null) {
    json_programs.forEach(obj_cb => {
        space_programs.push(obj_cb)
        localStorage.setItem('list_spacePrograms', JSON.stringify(space_programs))
    });
}
/*para solucionar el problema que se me racargaran las cosas pregunto si las lista entan vacias
cosas que solo deberia suceder una vez xd
*/
const show_plus_ultra = (universe) => {
    universe.forEach(obj_eye => {
        let row = tbody.insertRow();
        row.insertCell().innerText = obj_eye.type;
        row.insertCell().innerText = obj_eye.name;
        row.style.cursor = 'pointer';
        row.addEventListener('click', () => {
            localStorage.setItem('that_selected', JSON.stringify(obj_eye));
            window.location.href = `vistas/show_data.html?type=${obj_eye.type}`;
        });

    });
};
//aqui cargo todos los elementos de las lista para que se muestren//
//filtros//
input_search.addEventListener('keyup', () => {
    tbody.innerHTML = ''
    let filter = input_search.value.toLowerCase();
    let name_filter = universe.filter((obj_cb) => obj_cb.name.toLowerCase().includes(filter))
    show_plus_ultra(name_filter);
});
slt_type.addEventListener('change', () => {
    let filter = slt_type.value;
    tbody.innerHTML = ''
    if (filter == '') {
        show_plus_ultra(universe);
    } else if (filter == 'Planeta') {
        tbody.innerHTML = ''
        let filter_planet = universe.filter(obj_cb => (obj_cb.type == filter))
        show_plus_ultra(filter_planet);
    } else if (filter == 'Estrella') {
        tbody.innerHTML = ''
        let filter_start = universe.filter(obj_cb => (obj_cb.type == filter))
        show_plus_ultra(filter_start);
    } else if (filter == 'Satélite') {
        tbody.innerHTML = ''
        let filter_satellite = universe.filter(obj_cb => (obj_cb.type == filter))
        show_plus_ultra(filter_satellite);
    } else if (filter == 'Programa Espacial') {
        tbody.innerHTML = ''
        let filter_program = universe.filter(obj_cb => (obj_cb.type == filter))
        show_plus_ultra(filter_program);
    } else {
        tbody.innerHTML = ''
        let filter_mission = universe.filter(obj_cb => (obj_cb.type == filter))
        show_plus_ultra(filter_mission);
    }
});
show_plus_ultra(universe);