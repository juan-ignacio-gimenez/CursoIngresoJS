function mostrar()
{
//tomo la edad  
    var edad;

    edad=document.getElementById('edad').value;

    if(edad>=18)
    {
        alert("es mayor de edad " + edad);
    }else
    {
        alert("es menor de edad " + edad);
    }

}//FIN DE LA FUNCIÓN