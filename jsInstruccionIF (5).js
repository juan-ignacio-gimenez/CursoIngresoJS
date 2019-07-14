function mostrar()
{
//tomo la edad  
    var edad;

    edad=document.getElementById('edad').value;

    if(edad<=12)
    {
        alert("no es adolecente" + edad);
    }else
    {
        if(edad>=18)
        {
            alert("no es adolecente" + edad);
        }
    }

}//FIN DE LA FUNCIÓN