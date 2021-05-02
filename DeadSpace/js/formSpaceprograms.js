'use strict';
const input_nameProgram = document.querySelector('#name-program');
const input_dateStar = document.querySelector('#date-star');
const input_dateEnd = document.querySelector('#date-end');
const input_descrip = document.querySelector('#descrip-mission');
const btn_save = document.querySelector('#btn-save');
let space_programs = get_programs();
const clean_form = () => {
    input_nameProgram.value = '';
    input_dateStar.value = '';
    input_dateEnd.value = '';
    input_descrip.value = '';
}
const check_name = (name) => {
    get_programs();
    let error = false;
    space_programs.forEach(obj_ps => {
        if (obj_ps.name == name) {
            error = true;
            Swal.fire({
                icon: 'error',
                text: "Ya se ha registrado un progama con este nombre",
                confirmButtonColor: '#006600',
                confirmButtonText: 'Aceptar',
            })
        }
    });
    return error;
    //comprueba si un nombre ya fue registrado no creo que existan cuerpos celestes
    //con el mismo nombre xd,solo recorre todo y comprueba uno por uno
};

const form_validata = () => {
    let name = input_nameProgram.value;
    let check = check_name(name);
    let inputs_required = document.querySelectorAll('[required]');
    let error = false;
    inputs_required.forEach(input => {
        if (input.value == '' || check == true) {
            input.classList.add('error');
            error = true;
        } else {
            input.classList.remove('error');
        }
    });
    return error;
};
const save_spaceProgram = () => {
    let error = form_validata();
    if (error) {
        console.log('error campos ')
    } else {
        let name = input_nameProgram.value;
        let date_star = input_dateStar.value;
        let date_end = input_dateEnd.value;
        let descrip = input_descrip.value;
        let new_spaceProgram = new Space_program('Programa Espacial', name, date_star, date_end, descrip)
        space_programs.push(new_spaceProgram);
        localStorage.setItem('list_spacePrograms', JSON.stringify(space_programs));

        Swal.fire({
            icon: 'info',
            text: "Programa Guardado",
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
};

btn_save.addEventListener('click', save_spaceProgram);