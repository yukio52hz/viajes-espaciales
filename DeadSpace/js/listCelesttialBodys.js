'use strict';
const tbody = document.querySelector('#table-body');
const slt_type = document.querySelector('#slt-cbody');
const input_search = document.querySelector('#txt-search');
let galaxy = planet_satellites_stars();

const show_celestialBodys = (galaxy) => {
    galaxy.forEach(obj_cb => {
        let row = tbody.insertRow();
        row.insertCell().innerHTML = obj_cb.type;
        row.insertCell().innerHTML = obj_cb.name;
        if (obj_cb.type == 'Planeta') {
            row.insertCell().innerHTML = obj_cb.mass;
            row.insertCell().innerHTML = obj_cb.medium_temp;
            row.insertCell().innerHTML = obj_cb.duration_day;
            row.insertCell().innerHTML = obj_cb.distance_averageSun;
            row.insertCell().innerHTML = obj_cb.one_yearDuration;
            if (obj_cb.satellites.length > 0) {
                let icon = document.createElement('i');
                icon.classList.add('fas', 'fa-eye');
                icon.style.paddingLeft = '10px';
                let sate = document.createElement('p');
                sate.style.cursor = 'pointer';
                sate.innerText = obj_cb.satellites.length;
                sate.appendChild(icon);
                row.insertCell().appendChild(sate);
                sate.addEventListener('click', () => {
                    localStorage.setItem('data_satellite', JSON.stringify(obj_cb));
                    window.location.href = `show_dataSatellite.html`;
                })
            } else {
                row.insertCell().innerHTML = '--';
            }
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
        }
        if (obj_cb.type == 'Estrella') {
            row.insertCell().innerHTML = obj_cb.mass;
            row.insertCell().innerHTML = obj_cb.medium_temp;
            row.insertCell().innerHTML = obj_cb.duration_day;
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = obj_cb.age;
            row.insertCell().innerHTML = obj_cb.composition;
            row.insertCell().innerHTML = obj_cb.luminous_intesi;
            row.insertCell().innerHTML = obj_cb.size;
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
        }
        if (obj_cb.type == 'Satélite') {
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = '--';
            row.insertCell().innerHTML = obj_cb.belong_planet;
            row.insertCell().innerHTML = obj_cb.distance_celestialBody;
            row.insertCell().innerHTML = obj_cb.principal_characteristics;
        }

    });
}

input_search.addEventListener('keyup', () => {
    tbody.innerHTML = ''
    let filter = input_search.value.toLowerCase();
    let name_filter = galaxy.filter((obj_cb) => obj_cb.name.toLowerCase().includes(filter))
    show_celestialBodys(name_filter);
});
slt_type.addEventListener('change', () => {
    let filter = slt_type.value;
    tbody.innerHTML = ''
    if (filter == '') {
        show_celestialBodys(galaxy);
    } else if (filter == 'Planeta') {
        tbody.innerHTML = ''
        let filter_planet = galaxy.filter(obj_cb => (obj_cb.type == filter))
        show_celestialBodys(filter_planet);
    } else if (filter == 'Estrella') {
        tbody.innerHTML = ''
        let filter_start = galaxy.filter(obj_cb => (obj_cb.type == filter))
        show_celestialBodys(filter_start);
    } else {
        tbody.innerHTML = ''
        let filter_satellite = galaxy.filter(obj_cb => (obj_cb.type == filter))
        show_celestialBodys(filter_satellite);
    }
});
show_celestialBodys(galaxy)