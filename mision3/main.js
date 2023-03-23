const boton = document.querySelector('#button')
const docencia =document.querySelector('#docencia')

const Tecnologia =document.querySelector('#Tecnologia')

boton.addEventListener('click',ir)
function ir(){
    location.href="formulario.html"
}
let contDocencia =0;
let contTec =0;
let contMark =0;




  
  for (let j = 0; j < localStorage.length; j++) {
    var z = JSON.parse(localStorage.getItem(j));

        console.log("hola")
        
        let html= ` 
    
           
            <tr>
            <td class="text-center"> ${z[0]["area"]}</td>
            <td class="text-center"> ${z[0]["nombrecompleto"]}</td>
            <td class="text-center"> ${z[0]["usuario"]}</td>
            <td class="text-center text-[#C9231B]"> ${z[0]["email"]}</td>
            <td class="text-center"> ${z[0]["edad"]}</td>
            </tr>
          
         
    
        
        
        
        `
        docencia.innerHTML+=html


    }




