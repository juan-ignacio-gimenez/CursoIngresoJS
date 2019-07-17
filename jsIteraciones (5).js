function mostrar()
{

var sexo;

sexo=prompt("ingrese f ó m .");

while(sexo!='f'&&sexo!='m')
{
    sexo=prompt("ingrese f ó m .");
}


document.getElementById('Sexo').value=sexo;

}