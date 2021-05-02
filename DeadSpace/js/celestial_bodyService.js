'use strict';
const get_bodies = () => {
    let galaxy = [];
    if (localStorage.getItem('list_celestialBody')) {
        galaxy = JSON.parse(localStorage.getItem('list_celestialBody'));
    }
    return galaxy
}
const get_programs = () => {
    let space_programs = [];
    if (localStorage.getItem('list_spacePrograms')) {
        space_programs = JSON.parse(localStorage.getItem('list_spacePrograms'));
    }
    return space_programs
}
const check_exists = (name) => {
    get_bodies();
    let celestial_body;
    galaxy.forEach(obj_cb => {
        if (obj_cb.name == name) {
            celestial_body = obj_cb;
        }
    });
    return celestial_body;
    //comprueba si un nombre ya fue registrado no creo que existan cuerpos celestes
    //con el mismo nombre xd,solo recorre todo y comprueba uno por uno
};

const modify_celestialBody = (planet) => {
    let galaxy = get_bodies();
    galaxy.forEach((obj_planet, i) => {
        if (obj_planet.name == planet.name) {
            galaxy.splice(i, 1); //borra los datos
            galaxy.push(planet); //luego los volvemos a poner actualizados
        }
    });
    localStorage.setItem('list_celestialBody', JSON.stringify(galaxy));
};

const modify_program = (mission) => {
    let space_programs = get_programs();
    space_programs.forEach((obj_prom, i) => {
        if (obj_prom.name == mission.name) {
            space_programs.splice(i, 1);
            space_programs.push(mission);
        }
    });
    localStorage.setItem('list_spacePrograms', JSON.stringify(space_programs));
};
/*
const validate_special_name = (input_name) => {
    let error = false;
    let expre_name = /^[A-Z]/;
    let validate_name = expre_name.test(input_name.value);
    //test() me devulve un true si pasa y false si no;
    if (validate_name == false) {
        error = true;
    }
    return error
}*/