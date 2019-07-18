function mostrar()
{

	var cont;
	var num;
	var acum;
	var prom;
	cont=0;
	acum=0;

	while(cont<5)
	{
		
		cont=cont+1;

		num=prompt("ingrese primer valor");
		
		
		

		while(isNaN(num))
		{
			num=prompt("ERROR INGRESE UN NUMERO");
		}
			num=parseInt(num);
			acum+=num;
	}
	prom=acum/cont;
	document.getElementById('suma').value=acum;
	document.getElementById('promedio').value=prom;

	

}