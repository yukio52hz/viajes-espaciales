'use strict';
const tbody = document.querySelector('#table-body');
let galaxy = planet_satellites_stars();

const show_celestialBodys = () => {
    let list_fate = [];
    //hago una lista para meter los destinos
    galaxy.forEach(obj_cb => {
        let row = tbody.insertRow();
        row.insertCell().innerHTML = obj_cb.name;

        let buttom = document.createElement('button');
        buttom.type = "button";
        buttom.classList.add('button-tables');
        buttom.innerText = 'Agregar';
        row.insertCell().appendChild(buttom);

        buttom.addEventListener('click', () => {
            list_fate.push(obj_cb);
            //por cada click meto el destino seleccionado al la lista
            localStorage.setItem('fate_select', JSON.stringify(list_fate));
            Swal.fire({
                icon: 'suscces',
                text: "Destino Agregado",
                confirmButtonColor: '#006600',
                confirmButtonText: 'Aceptar',
            })

        });
    });
}
show_celestialBodys();