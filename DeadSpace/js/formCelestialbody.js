'use strict';
//inputs
const input_name = document.querySelector('#txt-name');
const input_mass = document.querySelector('#txt-mass');
const input_tempM = document.querySelector('#txt-tempM');
const input_durationDay = document.querySelector('#txt-durationDay');
const date_planet = document.querySelector('#data-planet');
const date_star = document.querySelector('#data-star');
const date_satellite = document.querySelector('#data-satellite');
//btn de guardar
const btn_save = document.querySelector('#btn-save');
//arreglo donde se guardaran los datos de los cuerpos celestes
let galaxy = get_bodies();

const check_name = () => {
    let error = false;
    if (check_exists(input_name.value)) {
        Swal.fire({
            icon: 'error',
            text: "Ya se existe este nombre registrado",
            confirmButtonColor: '#006600',
            confirmButtonText: 'Aceptar',
        })
        error = true;
    }
    return error;
};

const form_validata = () => {
    let name = check_name();
    let inputs_required = document.querySelectorAll('[required]');
    let error = false;
    inputs_required.forEach(input => {
        if (input.value == '' || name == true) {
            input.classList.add('error');
            error = true;

        } else {
            input.classList.remove('error');
        }
    });
    return error
};

//funcion donde se guardan los datos de cada cuerpo celeste
const save_celestial_body = () => {
    let error = form_validata();
    /*me devulve la respuesta de la validacion si la respuesta es true me 
    dice que hay un error en los campos y si es false procede a guardarla*/
    if (error) {
        console.log('Formulario error')
    } else {
        let name = input_name.value;
        let mass = input_mass.value;
        let tempM = input_tempM.value;
        let durationDay = input_durationDay.value;
        let new_celetialBody;
        let type_celestialBody = document.querySelector('input[type=radio]:checked').value;
        switch (type_celestialBody) {
            //dependiendo el tipo del cuerpo celeste se guarda los datos
            case "Planeta":
                let distanceSun = document.querySelector('#txt-distanceSun').value;
                let yearDuration = document.querySelector('#txt-yearDuration').value;
                new_celetialBody = new Planet(name, mass, tempM, durationDay, distanceSun, yearDuration)
                break
            case 'Estrella':
                let age = document.querySelector('#txt-age').value;
                let composition = document.querySelector('#txt-composition').value;
                let luminous = document.querySelector('#txt-luminous').value;
                let size = document.querySelector('#txt-size').value;
                new_celetialBody = new Star(name, mass, tempM, durationDay, age, composition, luminous, size)
                break
        }
        galaxy.push(new_celetialBody);
        localStorage.setItem('list_celestialBody', JSON.stringify(galaxy))

        Swal.fire({
            icon: 'info',
            text: "Cuerpo Celeste Guardado",
            showCancelButton: true,
            confirmButtonColor: '#006600',
            cancelButtonColor: '#0088ff',
            confirmButtonText: 'Registrar otro',
            cancelButtonText: 'Inicio',
        }).then((result) => {
            if (result.value) {
                window.location.reload();
            } else {
                window.location.href = '../index.html';
            }
        })
    }
};
//los botonones que me despliegan los datos para llenar dependiendo el tipo de formulario
document.querySelector('#rbt-planet').addEventListener('click', () => {
    date_planet.classList.toggle('secret');
});
document.querySelector('#rbt-star').addEventListener('click', () => {
    date_star.classList.toggle('secret');
});

//boton que almacena los datos

btn_save.addEventListener('click', save_celestial_body);