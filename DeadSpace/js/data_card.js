'use strict';
const mission = () => {
    let card = document.createElement('div');
    card.classList.add('card');
    let tittle = document.createElement('div');
    tittle.classList.add('title-name');
    let name = document.createElement('h2');
    name.innerText = list.name;

    let div_text = document.createElement('div');
    div_text.classList.add('text');

    let crew = document.createElement('p');
    crew.innerText = `Equipo: ${list.crew}`;

    let relase_date = document.createElement('p');
    relase_date.innerText = `Fecha de comienzo: ${list.relase_date}`;

    let length_time = document.createElement('p');
    length_time.innerText = `Duración de misión: ${list.length_time}`;

    let important_data = document.createElement('p');
    important_data.innerText = `Datos Importantes: ${list.important_data}`;

    let result = document.createElement('p');
    result.innerText = `Resultado de la missión: ${list.result}`;

    let name_ship = document.createElement('p');
    name_ship.innerText = `Nombre la nave: ${list.name_ship}`;

    let destination_place = document.createElement('p');
    name_ship.innerText = `Destinos: ${list.destination_place.length}`;

    tittle.appendChild(name);
    div_text.appendChild(crew);
    div_text.appendChild(relase_date);
    div_text.appendChild(length_time);
    div_text.appendChild(important_data);
    div_text.appendChild(result);
    div_text.appendChild(name_ship);
    div_text.appendChild(destination_place);


    card.appendChild(tittle);
    card.appendChild(div_text);
    container_sct.appendChild(card);
}

const planet = () => {
    let container_img = document.createElement('div');
    container_img.classList.add('pics');
    let img = document.createElement('img');
    img.src = `../img/${list.name}.jpg`;
    let card = document.createElement('div');
    card.classList.add('card');
    let tittle = document.createElement('div');
    tittle.classList.add('title-name');
    let name = document.createElement('h2');
    name.innerText = list.name;

    let div_text = document.createElement('div');
    div_text.classList.add('text');

    let mass = document.createElement('p');
    mass.innerText = `Masa: ${list.mass}`;

    let tem_m = document.createElement('p');
    tem_m.innerText = `Temperatura Media: ${list.medium_temp}`;

    let d_day = document.createElement('p');
    d_day.innerText = `Duración del dia: ${list.duration_day}`;

    let d_sun = document.createElement('p');
    d_sun.innerText = `Distancia del sol: ${list.distance_averageSun}`;

    let d_year = document.createElement('p');
    d_year.innerText = `Duración de un año: ${list.one_yearDuration}`;
    let n_sate = document.createElement('p');
    if (list.satellites.length > 0) {
        n_sate.innerText = `Numero satélites: ${list.satellites.length}`;
    } else {
        n_sate.innerText = '--';

    }

    container_img.appendChild(img);
    tittle.appendChild(name);
    div_text.appendChild(mass);
    div_text.appendChild(tem_m);
    div_text.appendChild(d_day);
    div_text.appendChild(d_sun);
    div_text.appendChild(d_year);
    div_text.appendChild(n_sate);

    card.appendChild(container_img);
    card.appendChild(tittle);
    card.appendChild(div_text);
    container_sct.appendChild(card);
}
const star = () => {
    let card = document.createElement('div');
    card.classList.add('card');
    let tittle = document.createElement('div');
    tittle.classList.add('title-name');
    let name = document.createElement('h2');
    name.innerText = list.name;

    let div_text = document.createElement('div');
    div_text.classList.add('text');

    let mass = document.createElement('p');
    mass.innerText = `Masa: ${list.mass}`;

    let tem_m = document.createElement('p');
    tem_m.innerText = `Temperatura Media: ${list.medium_temp}`;

    let d_day = document.createElement('p');
    d_day.innerText = `Duración del dia: ${list.duration_day}`;

    let age = document.createElement('p');
    age.innerText = `Edad: ${list.age}`;
    let composi = document.createElement('p');
    composi.innerText = `Composición: ${list.composition}`
    let l_intensi = document.createElement('p');
    l_intensi.innerText = `Intensidad luminica: ${list.liminous_intensi}`
    let size = document.createElement('p');
    size.innerText = `Tamaño: ${list.size}`

    tittle.appendChild(name);
    div_text.appendChild(mass);
    div_text.appendChild(tem_m);
    div_text.appendChild(d_day);
    div_text.appendChild(age);
    div_text.appendChild(composi);
    div_text.appendChild(l_intensi);
    div_text.appendChild(size);


    card.appendChild(tittle);
    card.appendChild(div_text);
    container_sct.appendChild(card);

}

const satellites = () => {
    let card = document.createElement('div');
    card.classList.add('card');
    let tittle = document.createElement('div');
    tittle.classList.add('title-name');
    let name = document.createElement('h2');
    name.innerText = list.name;

    let div_text = document.createElement('div');
    div_text.classList.add('text');
    let belongs_planet = document.createElement('p');
    belongs_planet.innerText = `Planeta que pertenece: ${list.belong_planet}`
    let dista_cb = document.createElement('p');
    dista_cb.innerText = `Distancia del Cuerpo Celetes: ${list.distance_celestialBody}`
    let descrip_sate = document.createElement('p');
    descrip_sate.innerText = `Caracteristicas: ${list.principal_characteristics}`

    tittle.appendChild(name);
    div_text.appendChild(belongs_planet);
    div_text.appendChild(dista_cb);
    div_text.appendChild(descrip_sate);
    card.appendChild(tittle);
    card.appendChild(div_text);
    container_sct.appendChild(card);
}

const program_space = () => {
    let card = document.createElement('div');
    card.classList.add('card');
    let tittle = document.createElement('div');
    tittle.classList.add('title-name');
    let name = document.createElement('h2');
    name.innerText = list.name;

    let div_text = document.createElement('div');
    div_text.classList.add('text');

    let data_star = document.createElement('p');
    data_star.innerText = `Fecha de lanzamiento: ${list.date_start}`;
    let data_end = document.createElement('p');
    data_end.innerText = `Fecha de fin: ${list.date_end}`;
    let descrip_s = document.createElement('p');
    descrip_s.innerText = `Descripción: ${list.descrip_scope}`;
    let n_mission = document.createElement('p');
    if (list.missions.length > 0) {
        n_mission.innerText = `Misiones: ${list.missions.length}`;
    } else {
        n_mission.innerText = '--';

    }

    tittle.appendChild(name);
    div_text.appendChild(data_star);
    div_text.appendChild(data_end);
    div_text.appendChild(descrip_s);
    div_text.appendChild(n_mission);
    card.appendChild(tittle);
    card.appendChild(div_text);
    container_sct.appendChild(card);
}

//en este js creo las cartas