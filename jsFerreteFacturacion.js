/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    var precio1;

    var precio2;

    var precio3;

    var resultado;

    precio1=document.getElementById('PrecioUno').value;

    precio1=parseInt(precio1);

    precio2=document.getElementById('PrecioDos').value;

    precio2=parseInt(precio2);

    precio3=document.getElementById('PrecioTres').value;
    
    precio3=parseInt(precio3);

    resultado=precio1+precio2+precio3;

    alert("resultado" + resultado);

}
function Promedio () 
{
    precio1=document.getElementById('PrecioUno').value;

    precio1=parseInt(precio1);

    precio2=document.getElementById('PrecioDos').value;

    precio2=parseInt(precio2);

    precio3=document.getElementById('PrecioTres').value;
    
    precio3=parseInt(precio3);

    resultado=(precio1+precio2+precio3)/3;

    alert("resultado" + resultado);
}
function PrecioFinal () 
{
    precio1=document.getElementById('PrecioUno').value;

    precio1=parseInt(precio1);

    precio2=document.getElementById('PrecioDos').value;

    precio2=parseInt(precio2);

    precio3=document.getElementById('PrecioTres').value;
    
    precio3=parseInt(precio3);

    resultado=(precio1+precio2+precio3)*0.21;

    alert("resultado" + resultado);
}