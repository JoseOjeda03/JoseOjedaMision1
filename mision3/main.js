document.addEventListener('DOMContentLoaded',()=> {

    mostrar();
	
}); 

const boton = document.querySelector('#button')
let searching ="";
const docencia =document.querySelector('#docencia')
const search= document.querySelector("#search");
const Tecnologia =document.querySelector('#Tecnologia')

search.addEventListener('input',(e)=>{
    searching =e.target.value;
    
    
    if(searching !=""){
        
        getBuscarrr(searching);
    } else{
        mostrar();
        console.log("holas")
   
    
    }

    
    
    })
boton.addEventListener('click',ir)
function ir(){
    location.href="formulario.html"
}
let contDocencia =0;
let contTec =0;
let contMark =0;

function getBuscarrr(searching){
    docencia.innerHTML=" "
    for (let j = 0; j < localStorage.length; j++) {
        var z = JSON.parse(localStorage.getItem(j));

        if(z[0]["nombrecompleto"]===searching){
            console.log("mAMITA")
             
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


    }


}

function mostrar(){
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


}
  
  




