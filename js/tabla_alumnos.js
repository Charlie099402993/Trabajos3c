var yo = {
    nombre: "Carlos Apreza",
    edad: 18,
    matricula: 20253088,
    imagen: "imagen/png"

};

var bd_alumnos= [];
bd_alumnos.push(yo);
bd_alumnos.push({
        nombre: "Carlos",
        edad: 18,
        matricula: 20253088,
        imagen: "imagen/png"

    }



)

function  add_alumnos(){
    let alumno=bd_alumnos.pop();
    let fila=document.createElement("tr");
    fila.innerHTML=`
            <td>${alumno.nombre}</td>
            <td>${alumno.edad}</td>
            <td>${alumno.matricula}</td>
            <td><img  width="50" src="../Img/perrito.jpg"></td>
            
            
            `;
    let tabla =document.getElementById("tablaAlumnos");
    tabla.appendChild(fila);

}
document.getElementById("add").addEventListener("click", add_alumnos);
