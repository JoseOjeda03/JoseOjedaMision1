const boton = document.querySelector('#button')
const docencia =document.querySelector('#docencia')
boton.addEventListener('click',ir)
function ir(){
    location.href="formulario.html"
}


let nombreCompleto = localStorage.getItem('nombrecompleto');
let area = localStorage.getItem('area');
let usuario = localStorage.getItem('usuario');
let edad = localStorage.getItem('edad');
let  direccion = localStorage.getItem('direccion');
let  email = localStorage.getItem('email');
let contDocencia=0;


if(area === "Docencia" ){
    contDocencia+=2
    let html= `
    
    <td rowspan="${contDocencia}" >
    <div  class="flex justify-center  text-lg" >
        <p>Docencia</p>

     </div>
    
    </td>
    <tr>
        <td> ${nombreCompleto}</td>
        <td> ${usuario}</td>
        <td> ${email}</td>
        <td> ${direccion}</td>

      </tr>
      
     

    
    
    
    `

    docencia.innerHTML+=html




}
