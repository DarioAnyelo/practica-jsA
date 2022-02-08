
let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Vaya!")), 1000);
  });
  
  // reject ejecuta la segunda función en .then
  promise.then(
    result => alert(result), // no se ejecuta
    error => alert(error) // muestra "Error: ¡Vaya!" después de 1 segundo
  );