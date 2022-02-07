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
//------------respuesta-A-------------------------------
const soloNombres = tasks.map((task) => task.name);
console.log(soloNombres);

//------------respuesta-B--------------------------------
const sumaduration = tasks.map((task) => task.duration);
const sumatotal = sumaduration.reduce((A,B) => A + B );
console.log(sumatotal);

//-----------respuesta-c----------------------------------
const valor = tasks.map((task)=> task.duration );
const menorduration = Math.min(...valor);
console.log(menorduration);

//-----------respuesta-D----------------------------------
const valor = tasks.map((task)=> task.duration );
const mayorduration = Math.max(...valor);
console.log(mayorduration);

//-----------respuesta -E----------------------------------
const tarea = tasks.filter((task) => task.duration < 140);
console.log(tarea);

//------------Respuesta-F---------------------------------------
const mayorDurationA = tasks.filter((task) => task.duration > 240);
console.log(mayorDurationA);
