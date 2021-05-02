'use strict';
const tbody = document.querySelector('#table-body');
const input_search = document.querySelector('#txt-search');
const input_missions = document.querySelector("#slt-missions");
let space_programs = get_programs();

const show_spacePrograms = (space_programs) => {
    space_programs.forEach(obj_prog => {
        let row = tbody.insertRow();
        row.insertCell().innerHTML = obj_prog.name;
        row.insertCell().innerHTML = obj_prog.date_start;
        row.insertCell().innerHTML = obj_prog.date_end;
        row.insertCell().innerHTML = obj_prog.descrip_scope;
        if (obj_prog.missions.length > 0) {
            row.insertCell().innerHTML = obj_prog.missions.length;
        } else {
            row.insertCell().innerHTML = '--';
        }
    });
}

input_search.addEventListener('keyup', () => {
    tbody.innerHTML = ''
    let filter = input_search.value.toLowerCase();
    let name_filter = space_programs.filter((obj_pg) => obj_pg.name.toLowerCase().includes(filter))
    show_spacePrograms(name_filter);
})
input_missions.addEventListener('change', () => {
    let filter = input_missions.value;
    tbody.innerHTML = ''
    if (filter == '') {
        show_spacePrograms(space_programs);
    } else if (filter == '1') {
        tbody.innerHTML = ''
        let yes_have = space_programs.filter(obj_m => (obj_m.missions.length > 0))
        show_spacePrograms(yes_have)
    } else if (filter == '0') {
        tbody.innerHTML = ''
        let not_have = space_programs.filter(obj_m => (obj_m.missions == ''))
        show_spacePrograms(not_have)
    }
})

show_spacePrograms(space_programs);