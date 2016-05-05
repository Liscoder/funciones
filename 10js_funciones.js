//**********PREGUNTA #10
function cantidad(){ 
	var numero= parseInt(prompt("Ingrese el numero"));
	digitos(numero);
	function digitos(numero){
		var cont=0;
		do{
			if(numero/10!=0){
				cont=cont+1;
				numero=Math.floor(numero/10);
			}
		}while((numero/10)!=0);

		document.write("La cantidad de dígitos es: "+cont)
	}
	
}
              