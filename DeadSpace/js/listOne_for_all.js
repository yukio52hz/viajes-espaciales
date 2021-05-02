'use strict';

const deep_hollow = () => {
    let universe = [];

    let galaxy = get_bodies();
    let space_programs = get_programs();

    galaxy.forEach(obj_cb => {
        universe.push(obj_cb)
        localStorage.setItem('of_everything', JSON.stringify(universe))
    });
    space_programs.forEach(obj_sp => {
        universe.push(obj_sp)
        localStorage.setItem('of_everything', JSON.stringify(universe))
    });
    galaxy.forEach(obj_cb => {
        if (obj_cb.type == 'Planeta') {
            if (obj_cb.satellites.length > 0) {
                obj_cb.satellites.forEach(obj_st => {
                    universe.push(obj_st)
                    localStorage.setItem('of_everything', JSON.stringify(universe))
                })
            }
        }
    });
    space_programs.forEach(obj_sp => {
        obj_sp.missions.forEach(obj_ms => {
            universe.push(obj_ms)
            localStorage.setItem('of_everything', JSON.stringify(universe))
        })
    });

    universe = JSON.parse(localStorage.getItem('of_everything'))

    return universe;
    /*Recorro todas la lista y formo una nueva con todos los datos se vierra podido hacer con
    map pero me da ansiedad o lo pense muy tarde */
}

const planet_satellites_stars = () => {
    let galaxy = get_bodies();
    let list_celestialBodySmash = [];
    galaxy.forEach(obj_cb => {
        list_celestialBodySmash.push(obj_cb)
        localStorage.setItem('celestial_body', JSON.stringify(list_celestialBodySmash))
    });
    galaxy.forEach(obj_cb => {
        if (obj_cb.type == 'Planeta') {
            if (obj_cb.satellites.length > 0) {
                obj_cb.satellites.forEach(obj_st => {
                    list_celestialBodySmash.push(obj_st)
                    localStorage.setItem('celestial_body', JSON.stringify(list_celestialBodySmash));
                })
            }
        }
    });
    list_celestialBodySmash = JSON.parse(localStorage.getItem('celestial_body'))

    return list_celestialBodySmash;
}
const missions = () => {
    let list_missions = [];
    let space_programs = get_programs();
    space_programs.forEach(obj_prog => {
        if (obj_prog.missions.length > 0) {
            obj_prog.missions.forEach(obj_miss => {
                list_missions.push(obj_miss);
                localStorage.setItem('misions', JSON.stringify(list_missions));
            });
        }
    });
    return list_missions;
}