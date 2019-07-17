function mostrar()
{
	var numero;

	numero=prompt("ingrese un numero entre 0 y 9");
	numero=parseInt(numero);
	

	while(numero>9)
	{	
		
		numero=prompt("ingrese un numero entre 0 y 9");
		
		
	}
	document.getElementById('Numero').value=numero;






}//FIN DE LA FUNCIÓN