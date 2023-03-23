
let i=0
const img =document.querySelector("#img")
boton.addEventListener('click',formularioevento)
img.addEventListener('click',formularioevento)


function formularioevento(){
    const nombre=document.getElementById('nombre').value;
const apellido=document.querySelector('#apellido').value;
const area=document.querySelector('#area').value;
const usuario=document.querySelector('#usuario').value;
const edad=document.querySelector('#edad').value;
const direccion=document.querySelector('#direccion').value;
const email=document.querySelector('#email').value; 

let nombreCompleto=nombre+" "+apellido;
let nuevoUsuario =[{"nombrecompleto":nombreCompleto,"apellido":apellido,"area":area,"usuario":usuario,"edad":edad,"direccion":direccion,"email":email}]

localStorage.setItem(localStorage.length, JSON.stringify(nuevoUsuario));

    location.href="index.html"

}

 





