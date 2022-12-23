//Ejercicio 3.1

// element= document.getElementById("ele1")
    
//     function pintar(){
//         element.style.backgroundColor = 'yellow'
//         }
   
//     element.addEventListener("click", pintar);

//Ejercicio 3.2

element= document.getElementById("ele1")
    
    function pintar(color="green") {
        element.style.backgroundColor = color
        }
   
    element.addEventListener("click", () => pintar ("yellow"));