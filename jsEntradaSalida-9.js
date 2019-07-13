/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;

    var resultado;

    var importe;

    sueldo=document.getElementById('sueldo').value;

    sueldo=parseInt(sueldo);

    resultado=document.getElementById('resultado').value;

    importe=sueldo*10/100+sueldo;
    

    alert("el resultado es " + importe);


	
}
