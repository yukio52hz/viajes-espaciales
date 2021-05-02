'use strict';
const list = JSON.parse(localStorage.getItem('that_selected'));
const container_sct = document.querySelector('#sct-cards');

const get_parametersUrl = () => {
    const location = new URL(window.location.href);
    const parameters = new URLSearchParams(location.search);
    let type = parameters.get('type'); //.toLowerCase()
    return type;
};
//tomo el parametro envido por url y dependiendo muestro una diferente carta
let type_body = get_parametersUrl()
if (list) {
    document.querySelector('#txt-type').innerText = list.type;
    switch (type_body) {
        case 'Planeta':
            planet();
            break
        case 'Estrella':
            star();
            break
        case 'Satélite':
            satellites();
            break
        case 'Programa Espacial':
            program_space();
            break
        case 'Misión':
            mission();
            break

    }

}