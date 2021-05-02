'use strict';
const input_name = document.querySelector('#txt-name');
const input_distance_planet = document.querySelector('#txt-distance_celestialBody');
const input_descrip = document.querySelector('#txt-characteristics');

const btn_save = document.querySelector('#btn-save');

const get_parametersUrl = () => {
    const location = new URL(window.location.href);
    const parameters = new URLSearchParams(location.search);
    let name = parameters.get('name'); //.toLowerCase()
    return name;
};
const exist_name = () => {
    let list = JSON.parse(localStorage.getItem('selected_planet'));
    let error = false;

    list.satellites.forEach(obj_sat => {
        if (obj_sat.name == input_name.value) {
            error = true;
            Swal.fire({
                icon: 'error',
                text: "Ya se ha registrado un satallite con este nombre",
                confirmButtonColor: '#006600',
                confirmButtonText: 'Aceptar',
            })
        }
    })

    return error
}
const clean_form = () => {
    input_name.value = '';
    input_distance_planet.value = '';
    input_descrip.value = '';
}
const form_validata = () => {
    let name = exist_name();
    let inputs_required = document.querySelectorAll('[required]');
    let error = false;
    inputs_required.forEach(input => {
        if (input.value == '' || name == true) {
            input.classList.add('error');
            error = true;
            return error
        } else {
            input.classList.remove('error');
        }
    });
    return error
};
const add_sate_sate = () => {
    let error = form_validata()
    if (error) {

    } else {
        let name_planet = get_parametersUrl();

        let slt_planet = JSON.parse(localStorage.getItem('selected_planet'));
        //tomo el planeta selecionado
        let planet;
        //donde voy almacenar el planeta para volverlo a convertir en mis datos
        let satellite;
        planet = new Planet(slt_planet.name, slt_planet.mass, slt_planet.medium_temp, slt_planet.duration_day, slt_planet.distance_averageSun, slt_planet.one_yearDuration)

        slt_planet.satellites.forEach(obj_sate => {
            let satellite = new Satellite(obj_sate.belong_planet, obj_sate.name, obj_sate.distance_celestialBody, obj_sate.principal_characteristics);
            planet.add_satelite(satellite);
        });
        //luego de convertirlo en mis datos le digo que es lo que se guarda el mi lista de satelites;

        satellite = new Satellite(name_planet, input_name.value, input_distance_planet.value, input_descrip.value)

        planet.add_satelite(satellite);
        localStorage.setItem('selected_planet', JSON.stringify(planet));
        modify_celestialBody(planet);
        Swal.fire({
            icon: 'info',
            text: "Satételite Guardado",
            showCancelButton: true,
            confirmButtonColor: '#006600',
            cancelButtonColor: '#0088ff',
            confirmButtonText: 'Registrar otro',
            cancelButtonText: 'Inicio',
        }).then((result) => {
            if (result.value) {
                clean_form();
            } else {
                window.location.href = '../index.html';
            }
        })
    }
}

btn_save.addEventListener('click', add_sate_sate);