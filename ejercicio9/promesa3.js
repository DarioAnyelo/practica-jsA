let promise = new Promise(resolve => {
    setTimeout(() => resolve("hecho!"), 1000);
  });
  
  promise.then(alert); // muestra "Error: ¡Vaya!" después de 1 segundo


  
  