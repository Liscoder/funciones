//**********PREGUNTA #1
function menor(){ 

for(var i=1;i<=3;i++){
	var numero= parseInt(prompt("Ingrese el numero"+i));
	if(i==1){
	var menor=numero;
	}else{
	if(numero<menor){
		menor=numero;
	}
	}
}
 document.write("El numero menor es : "+menor);
}
