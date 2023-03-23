
let i=0
const img =document.querySelector("#img")
boton.addEventListener('click',formularioevento)
img.addEventListener('click',regresar)

 function regresar(){
    location.href="index.html"
 }
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
 if(nombreCompleto == "" || apellido == "" || usuario == "" || direccion == "" || email == ""){
    alert("no s epueden guardar los datos si  estan nulos")
 }
 else{

  if(validar(usuario)){
    alert("ususario ya digitado")
  }
  else{
    localStorage.setItem(localStorage.length, JSON.stringify(nuevoUsuario));
    
    location.href="index.html"
  
  }

 }


}
function validar(usuarios){
    let j=0;
    let respuesta= false
    console.log(localStorage.length)
    for ( j = 0; j < localStorage.length; j++) {
        var z = JSON.parse(localStorage.getItem(j));
         console.log(z[0]["usuario"])
        if(z[0]["usuario"]== usuarios){
            console.log("mAMITA")
            respuesta= true

        } else{
            respuesta= false
           
        }


    }
    return respuesta
}

 





