function mostrar()
{
	var cont;
	var num;
	var acum;
	var prom;
	var rta;
	rta="s";
	cont=0;
	acum=0;

	while(rta=="s")
	{
		
		cont=cont+1;

		num=prompt("ingrese primer valor");
		
		
		

		while(isNaN(num))
		{
			num=prompt("ERROR INGRESE UN NUMERO");
		}
			num=parseInt(num);
			acum+=num;
			rta=prompt("desea ingresar mas numeros");
			
	}
	prom=acum/cont;
	document.getElementById('suma').value=acum;
	document.getElementById('promedio').value=prom;
}