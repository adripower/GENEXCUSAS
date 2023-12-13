function indice(){
    // Generar un índice aleatorio entre 0 y 3
   return Math.floor(Math.random() * 4);
}

let quien =["El perro ","El gato ","Un ninja ","Un alien "];
let que =["se lo comio ","lo escondio ","lo rompio ","se le olvido "];
let donde =["en casa ","en el trabajo ","en la calle ","no se acuerda"];
let cuando =["mientras jugaba ","mientras dormia ","cuando venia ","cuando cantaba "];




// Seleccionar el elemento del array que corresponde al índice
let elemento1 = quien[indice()];
let elemento2 = que[indice()];
let elemento3 = donde [indice()];
let elemento4 = cuando [indice()];

// Mostrar el elemento seleccionado en la consola
console.log(elemento1,elemento2,elemento3,elemento4);
