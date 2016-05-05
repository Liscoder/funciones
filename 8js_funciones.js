//**********PREGUNTA #8
function primo(){ 
	var numero= parseInt(prompt("Ingrese el numero"));
	prim(numero);

	function prim(numero){
		var cont=0;
		for(i=2;i<numero;i++){
			if(numero%i==0){
				cont=cont+1;
			}
		}
		if(cont>0){
			document.write("Este numero no es primo")
		}else{
			document.write("Este numero es primo");
		}
		return;
	}
}
              