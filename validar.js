function validar(){
  let nombre , email, password, expresion;
  nombre = document.getElementById("nombre").value;
  email= document.getElementById("email").value;
  password= document.getElementById("password").value;
  
  // epresion que sera evaluada  para el e-mail
  expresion = /\w+@\w+\.+[a-z]/;

  if(nombre === "" || email === "" || password === ""){
    alert("Todos los campos son obligatorios");
    return false;
  }
  else if(nombre.length > 20){
    alert("El nombre es muy largo");
    return false;
  }
  else if(email.length > 100){
    alert("El e-mail es muy largo");
    return false;
  }
  else if(!expresion.test(email)){ //metodo test  que verifica sea igual  en el caso de que sea distinta//
    alert("e-mail no es valido");
  }
  else if(password.length > 20){
    alert("El password es mu largo");
    return false;
  }
}

