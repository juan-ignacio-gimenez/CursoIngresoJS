/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;

    var ancho;

    var resultado;

    largo=document.getElementById('Largo').value;

    largo=parseInt(largo);

    ancho=document.getElementById('Ancho').value;

    ancho=parseInt(ancho);

    resultado=(largo+ancho)*2*3;

    alert("resultado " + resultado);



}
function Circulo () 
{
    var radio;

    var resultado;

    radio=document.getElementById('Radio').value;

    radio=parseInt(radio);

    resultado=radio*3.14*3;

    alert("resultado " + resultado);
}
function Materiales () 
{
    var cemento;

    var largo;

    var ancho;
    
    var cal;

    largo=document.getElementById('Largo').value;

    largo=parseInt(largo);

    ancho=document.getElementById('Ancho').value;

    ancho=parseInt(ancho);

    cemento=(largo*ancho)*2;

    cal=(largo*ancho)*3;

    alert("cemento " + cemento);

    alert("cal " + cal);

}