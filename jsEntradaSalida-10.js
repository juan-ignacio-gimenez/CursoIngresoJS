/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo;
    
    var resultado;

    var importe;

    sueldo=document.getElementById('importe').value;

    sueldo=parseInt(sueldo);

    resultado=document.getElementById('resultado').value;

    importe=sueldo-sueldo*0.25;

    alert("el resultado es " + importe);
}
