function mostrar()
{
	var multiplicaion;
	var suma;
	var cont;
	var num;
	var acum;
	var prom;
	var rta;
	multiplicaion=1
	suma=0
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
			if(num>0)
			{
				suma=suma+num;
			}else
			{
				multiplicaion=multiplicaion*num;
			}
			
	}
	document.getElementById('suma').value=suma;
	document.getElementById('producto').value=multiplicaion;



}