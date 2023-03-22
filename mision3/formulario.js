

boton.addEventListener('click',formularioevento)

function formularioevento(){
    const nombre=document.getElementById('nombre').value;
const apellido=document.querySelector('#apellido').value;
const area=document.querySelector('#area').value;
const usuario=document.querySelector('#usuario').value;
const edad=document.querySelector('#edad').value;
const direccion=document.querySelector('#direccion').value;
const email=document.querySelector('#email').value; 





    let nombreCompleto=nombre +" "+ apellido;

    localStorage.setItem('nombrecompleto', nombreCompleto );
    localStorage.setItem('area', area);
    localStorage.setItem('usuario', usuario);
    localStorage.setItem('edad', edad );
    localStorage.setItem('direccion', direccion );
    localStorage.setItem('email', email );
    location.href="index.html"

}

 





