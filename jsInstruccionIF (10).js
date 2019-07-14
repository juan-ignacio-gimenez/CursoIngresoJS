function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var nota;

	nota=Math.round(Math.random()*10);

	if(nota>8&nota<11)
	{
		alert("excelente" + nota);
	}else
	{
		if(nota>4)
		{
			alert("Aprobo" + nota);
		}else
		{
			alert("vamos, la proxima se puede" + nota);
		}
	}

}//FIN DE LA FUNCIÓN