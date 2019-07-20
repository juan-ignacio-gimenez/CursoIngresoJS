/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var Fahrenheit;
    
    var centigrados;

    Fahrenheit=document.getElementById('Temperatura').value;

    Fahrenheit=parseInt(Fahrenheit);

    centigrados=(Fahrenheit-32)*5/9;

    alert("resultado " + centigrados);
}


function CentigradosFahrenheit () 
{
    var Fahrenheit;
    
    var centigrados;

    Fahrenheit=document.getElementById('Temperatura').value;

    Fahrenheit=parseInt(Fahrenheit);

    centigrados=(Fahrenheit*5/9)+32;

    alert("resultado " + centigrados);


}
