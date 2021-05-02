'use strict';
class Celestial_Body {
    constructor(type, name, mass, medium_temp, duration_day) {
        this.type = type;
        this.name = name;
        this.mass = mass;
        this.medium_temp = medium_temp;
        this.duration_day = duration_day;
    }
}
//todos son cuerpos celestiales por eso eredan de el pero todos cacateristicas diferentes
class Planet extends Celestial_Body {
    constructor(name, mass, medium_temp, duration_day, distance_averageSun, one_yearDuration) {
        super('Planeta', name, mass, medium_temp, duration_day)
        this.distance_averageSun = distance_averageSun;
        this.one_yearDuration = one_yearDuration;
        this.satellites = [];
    }
    add_satelite(obj_satellites) {
        this.satellites.push(obj_satellites);
        //un mismo push de siempre 
    }
}
class Star extends Celestial_Body {
    constructor(name, mass, medium_temp, duration_day, age, composition, luminous_intesi, size) {
        super('Estrella', name, mass, medium_temp, duration_day)
        this.age = age;
        this.composition = composition;
        this.luminous_intesi = luminous_intesi;
        this.size = size;
    }
}
class Satellite extends Celestial_Body {
    constructor(belong_planet, name, distance_celestialBody, principal_characteristics) {
        super('Satélite', name)
        this.belong_planet = belong_planet;
        this.distance_celestialBody = distance_celestialBody;
        this.principal_characteristics = principal_characteristics;
    }
}
//Programa espacial//

class Space_program {
    constructor(type, name, date_start, date_end, descrip_scope) {
        this.type = type;
        this.name = name;
        this.date_start = date_start;
        this.date_end = date_end;
        this.descrip_scope = descrip_scope;
        this.missions = [];
    }
    add_mission(obj_mission) {
        this.missions.push(obj_mission);
    }
}
class Missions {
    constructor(type, name, crew, relase_date, length_time, important_data, result, name_ship, belong_program) {
        this.type = type;
        this.name = name;
        this.crew = crew;
        this.relase_date = relase_date;
        this.length_time = length_time;
        this.important_data = important_data;
        this.result = result;
        this.name_ship = name_ship;
        this.belong_program = belong_program;
        this.destination_place = [];
    }
    add_destinations(obj_destination) {
        this.destination_place.push(obj_destination)
    }
}