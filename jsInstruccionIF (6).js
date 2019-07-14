function mostrar()
{
//tomo la edad  
    var edad;

    edad=document.getElementById('edad').value;

    if(edad>=18)
    {
        alert("es mayor de edad" + edad);
    }else
    {
        if(edad>12)
        {
            alert("es adolecente" + edad);
        }
    }if(edad<=12)
    {
        alert("es un niño" + edad);
    }

    



}//FIN DE LA FUNCIÓN