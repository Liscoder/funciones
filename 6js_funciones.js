//**********PREGUNTA #6
function operacion(){ 
	opcion=prompt("¿Que operacion deseas realizar? suma,resta,multiplicar,division");
	realizar(opcion);
	function realizar(opcion){
		var num1=parseInt(prompt("INGRESE EL MAYOR NUMERO"));
		var num2= parseInt(prompt("INGRSE EL MENOR NUMERO"));
		var sum=0;
		var rest=0;
		var mult=0;
		var div=0;
		switch(opcion){
			case "suma": 
				sum=num1+num2;
				document.write("La suma es: "+sum);
				break;
			case "resta":
				ret=num1-num2;
				document.write("La resta es: "+rest);
				break;
			case "multiplicar":
				mult=num1*num2;
				document.write("La multiplicacion es: "+mult);
				break;
			case "division":
				div=num1/num2;
				document.write("La division es: "+div);
		}
		return;
	}

}
              