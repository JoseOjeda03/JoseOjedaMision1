const btlogin=document.querySelector("#login");
btlogin.addEventListener("click",validar)
const emailLogin=document.querySelector("#email");
const usuarioLogin=document.querySelector("#usuario");
const mensaje=document.querySelector("#mensaje");

const main =async() => {
    
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  localStorage.setItem("json",JSON.stringify(data))
 

  data.forEach(element => {
        const{username,email}=element


        if(email==emailLogin.value && username == usuarioLogin.value){
          
            location.href="welcome.html"
            

        } else{
            mensaje.innerHTML=`  <p class="text-red-800">EL usuario o el Email esta mal</p>`
          
        }

  });


}

function validar(){
    
main()
}