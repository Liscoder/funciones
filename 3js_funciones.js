//**********PREGUNTA #1
function ordenar(){ 
	var num1=parseInt(prompt("Ingrese el numero 1"));
	var num2=parseInt(prompt("Ingrese el numero2"));
	var num3=parseInt(prompt("Ingrese el numero3"));
	orden(num1,num2,num3);
	function orden(num1,num2,num3){
		if(num1>num2&&num1>num3){
			if(num2>num3){
				document.write("EL ORDEN ES : "+num1+num2+num3);
				return;
			}else{
				document.write("El orden es: "+num1+num2+num3);
				return;
			}
		}else{
			if(num2>num1&&num2>num3){
				if(num1>num3){
					document.write("El orden es: "+num2+ num1 +mum3);
					return;
				}else{
					document.write("El orden es: "+num2+ num3+num1);
					return;
				}
			}else{
				if(num3>num1&&num3>num2){
					if(num1>num2){
						document.write("El orden es: "+num3+num1num2);
						return;
					}else{
						document.write("El orden es: "+ num3,num2,num1);
						return;
					}
				}
			}
		}
	}

}
              