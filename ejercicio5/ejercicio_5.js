const tasks = [
    {
        name: 'Write for Envato Tuts+',
        duration: 120,
    },

    {
        name: 'Work out',
        duration: 60,
    },

    {
        name: 'Procrastinate on Duolingo',
        duration: 240,
    }
];

const tasks = [
    {
        name: 'Write for Envato Tuts+',
        duration: 120,
    },

    {
        name: 'Work out',
        duration: 60,
    },

    {
        name: 'Procrastinate on Duolingo',
        duration: 240,
    }
];
/* ----------------Agregar con Push-------------------------- */
const agregarTasks = tasks.push({ name: "AGREGA-con->PUSH", duration: 100});
console.log(tasks);

/*  -----------Retornar el tamaño de un arreglo-----------------*/
const retornarTamanio = tasks.length;
console.log(retornarTamanio);

/* -----------Retornar la tareas por letras especifica...---------------------*/
let almaceArray = [];
tasks.forEach((buscarLetra) => {
    if(buscarLetra.name.toUpperCase().indexOf("W")===0){
        almaceArray.push(buscarLetra)
    }
});
console.log(almaceArray);