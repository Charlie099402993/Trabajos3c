var yo = {
    nombre: "Carlos",
    edad: 18,
    matricula: 20253088,

    imagen: "Img/perrito.jpg"
};

var bd_alumnos = [];

bd_alumnos.push(yo);

bd_alumnos.push({
    nombre: "Carlos",
    edad: 18,
    matricula: 20253088,
    imagen: "Img/pumas.jpg"
});

function add_alumnos() {

    let alumno = bd_alumnos.shift();

    if(alumno == undefined){
        alert("No hay alumnos");
        return;
    }

    let fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${alumno.nombre}</td>
        <td>${alumno.edad}</td>
        <td>${alumno.matricula}</td>
        <td>
            <img width="50" src="${alumno.imagen}">
        </td>
    `;

    let tabla = document.getElementById("tablaAlumnos");

    tabla.appendChild(fila);
}

document.getElementById("add").addEventListener("click", add_alumnos);

function agregar_alumnos(){

    let nombre = document.getElementById("Nombre").value;
    let edad = document.getElementById("edad").value;
    let matricula = document.getElementById("Matricula").value;
    let imagen = document.getElementById("Imagen").value;

    let nuevo_alumno = {
        nombre: nombre,
        edad: edad,
        matricula: matricula,
        imagen: imagen
    };

    bd_alumnos.push(nuevo_alumno);

    document.getElementById("Agregar_alumno").reset();

    alert("Alumno creado con exito !");
}

document.getElementById("add_Alumno").addEventListener("click", agregar_alumnos);