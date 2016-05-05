//**********PREGUNTA #9
function multiplos(){ 
	var numero= parseInt(prompt("Ingrese el numero"));
	document.write("los numeros multiplos son: "+1+" "+numero);
	multiplos_numero(numero);
	function multiplos_numero(numero){

		for(i=2;i<numero;i++){
			if(numero%i==0){
				document.write(" "+i);
			}
		}
		return;

	}
}
              