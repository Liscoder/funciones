//**********PREGUNTA #1
function paridad(){ 
	var numero= parseInt(prompt("Ingrese el numero"));
	par(numero);
	function par(dato){
		if(dato%2==0){
			document.write("Este es par");
			return;
		}else{
			document.write("Este numero es impar");
			return;
		}
	}
}
              