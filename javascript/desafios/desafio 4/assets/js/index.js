const propiedades = [
  {
    nombre: "Casa de campo",
    descripcion: "Un lugar ideal para despejarse y tener paz",
    src:"./assets/images/casa1.jpg",
    cuartos: 2,
    metros: 200,
  },
  {
    nombre: "Casa de playa",
    descripcion: "Disfruta de la brisa marina",
    src:"./assets/images/casa2.jpg",
    cuartos: 3,
    metros: 200,
  },
  {
    nombre: "Casa en el centro",
    descripcion: "Ten cerca de ti todo lo que necesitas",
    src:"./assets/images/casa3.jpg",
    cuartos: 2,
    metros: 160,
  },
  {
    nombre: "Departamento 1",
    descripcion: "Comodidad y calidad de vida",
    src:"./assets/images/casa4.jpg",
    cuartos: 2,
    metros: 180,
  },
  {
    nombre: "Departamento 2",
    descripcion: "Desde las alturas todo se ve mejor",
    src:"./assets/images/casa5.jpg",
    cuartos: 1,
    metros: 220,
  },
  {
    nombre: "Mansión",
    descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
    src:"./assets/images/casa6.jpg",
    cuartos: 4,
    metros: 300,
  }
];


let cantidad= document.getElementById("cantidad")
let minimo=document.getElementById("minimo")
let maximo=document.getElementById("maximo")
let total=document.getElementById("total")
let propiedadesInmuebles= document.querySelector(".propiedades")

let btn=document.querySelector(".btn").addEventListener("click", buscarProps)

let modelo=""
let contador=0

for(let casas of propiedades){
contador++

modelo+=`
  <div class="propiedad">
    <div class="img" style="background-image: url('${casas.src}')"></div>
    <section>
      <h5>${casas.nombre}</h5>
      <div class="d-flex justify-content-between">
        <p>Cuartos: ${casas.cuartos}</p>
        <p>Metros: ${casas.metros}</p>
      </div>
      <p class="my-3">${casas.descripcion}</p>
      <button class="btn btn-info ">Ver más</button>
    </section>
  </div>

`
propiedadesInmuebles.innerHTML= modelo
total.innerHTML=contador
}


function buscarProps(){
let modelo=""
let contador= 0
if(cantidad.value == "" || minimo.value == "" || maximo.value == ""){ 
  alert ("Faltan datos por llenar")
  
}else{
  for(let casas of propiedades){
    if(+cantidad.value == casas.cuartos && +minimo.value <= casas.metros && +maximo.value >= casas.metros){
      contador++ 
      modelo+=`
      <div class="propiedad">
        <div class="img" style="background-image: url('${casas.src}')"></div>
        <section>
          <h5>${casas.nombre}</h5>
          <div class="d-flex justify-content-between">
            <p>Cuartos: ${casas.cuartos}</p>
            <p>Metros: ${casas.metros}</p>
          </div>
          <p class="my-3">${casas.descripcion}</p>
          <button class="btn btn-info ">Ver más</button>
        </section>
      </div>

`
    propiedadesInmuebles.innerHTML= modelo
    total.innerHTML= contador
      
    }
     
  }
  if(contador==0){
    propiedadesInmuebles.innerHTML= "<h2>No hay resultados para tu busqueda</h2>"
    total.innerHTML=0
  }
}
}
