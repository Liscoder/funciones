//**********PREGUNTA #7
function cuadrado(){ 
	var num1=parseInt(prompt("Ingrese el primer numero"));
	var num2=parseInt(prompt("Ingrse el segundo numero"));
	cuadrado(num1,num2);
	function cuadrado(num1,num2){
		var suma=0;
		suma=num1+num2;
		suma=suma*suma;
		document.write("El cuadrado de la suma es: "+suma);
		return;
	}
}
              