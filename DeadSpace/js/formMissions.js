'use strit';
const input_name = document.querySelector('#txt-name');
const input_crew = document.querySelector('#txt-crew')
const input_relese = document.querySelector('#txt-relese');
const input_time = document.querySelector('#txt-lenghtTime');
const input_data = document.querySelector('#txt-dataPrincipal');
const input_result = document.querySelector('#slt-result');
const input_ship = document.querySelector('#txt-ship');


const btn_save = document.querySelector('#btn-save');
const get_parametersUrl = () => {
    const location = new URL(window.location.href);
    const parameters = new URLSearchParams(location.search);
    let name = parameters.get('name'); //.toLowerCase()
    return name;
};
const exist_name = () => {
    let list = JSON.parse(localStorage.getItem('selected_program'));
    let error = false;

    list.missions.forEach(obj_miss => {
        if (obj_miss.name == input_name.value) {
            error = true;
            Swal.fire({
                icon: 'error',
                text: "Ya se ha registrado una misión con este nombre",
                confirmButtonColor: '#006600',
                confirmButtonText: 'Aceptar',
            })
        }
    })

    return error
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
const clean_form = () => {
    input_name.value = '';
    input_crew.value = '';
    input_relese.value = '';
    input_time.value = '';
    input_data.value = '';
    input_result.value = '';
    input_ship.value = '';

}
const man_with_a_mission = () => {
    let error = form_validata();
    if (error) {
        console.log('error en la capa 8')
    } else {
        let slt_program = JSON.parse(localStorage.getItem('selected_program'));
        let name_program = get_parametersUrl()
        let program;
        let mission;
        program = new Space_program(slt_program.type, slt_program.name, slt_program.date_start, slt_program.date_end, slt_program.descrip_scope);
        //con el poder del prisma lunar vuelvo hacer el programa espacial en su forma humilde
        slt_program.missions.forEach(obj_miss => {
            let mission = new Missions(obj_miss.type, obj_miss.name, obj_miss.crew, obj_miss.relase_date, obj_miss.length_time, obj_miss.important_data, obj_miss.result, obj_miss.name_ship, obj_miss.belong_program);
            program.add_mission(mission);
            //esto es lo que guardo en lista de misiones de programas una nueva misión
        });
        //luego de lo anterior ya puedo utilizar las funciones de essa clase como lo es agregar misión
        mission = new Missions('Misión', input_name.value, input_crew.value, input_relese.value, input_time.value, input_data.value, input_result.value, input_ship.value, name_program);
        //aqui se llama la clase de las misiones
        let list_fate = JSON.parse(localStorage.getItem('fate_select'));
        //aqui tomo de local los destinos selecionados
        if (list_fate) {
            if (list_fate.length > 0) {
                list_fate.forEach((obj_fate, i) => {
                    mission.add_destinations(obj_fate);
                    localStorage.removeItem('fate_select');
                    // list_fate.splice(i, list_fate.length);
                });
                localStorage.setItem('fate_select', JSON.stringify(list_fate));
            }
        }
        //aqui se recorre la lista de los destinos y se va agregando a las lista de los destinos dentro de las misisones
        //aqui puedo meter los destinos de una vez ya que apenas estoy llamando a mi clase de misiones
        program.add_mission(mission);
        localStorage.setItem('selected_program', JSON.stringify(program));
        modify_program(program);
        //con esta función se bremplaza el programa anterior por el mism pero ya con los datos actualizados;

        Swal.fire({
            icon: 'info',
            text: "Misión Guardada",
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


btn_save.addEventListener('click', man_with_a_mission);