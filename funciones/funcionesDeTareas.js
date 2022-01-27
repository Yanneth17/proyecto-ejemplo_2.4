let fs = require('fs');

function listarTareas(tareas){
    tareas.forEach(function(elemento) {
        console.log(elemento.titulo);
    });
}

function agregarTarea(tareas,nuevaTarea){
    tareas.push(nuevaTarea);
    fs.writeFileSync('./servicios/tareas.json', JSON.stringify(tareas,null,' '));
}

function eliminarTarea(tareas,cod){
    
    let tareasNuevas = tareas.filter(function(e){
        return e.codigo != cod;
    });
    fs.writeFileSync('./servicios/tareas.json', JSON.stringify(tareasNuevas,null,' '));
    
    return tareasNuevas;
}


function filtarTareas(tareas,estadoFiltrar){

    let tareasFiltradas = tareas.filter(function(e){
        return e.estado == estadoFiltrar;
    });

    return tareasFiltradas;
}

module.exports = {listarTareas,agregarTarea,eliminarTarea,filtarTareas};




