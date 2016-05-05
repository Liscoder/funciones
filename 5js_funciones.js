//**********PREGUNTA #5
function frase(){ 

	var frase=prompt("Ingrese la frase");
	frase_entera=frase.toLowerCase();
	palabra=frase_entera.split(" ").join("");
	palindrome(palabra);
	
	function palindrome(palabra){
	for(var i=0;i<palabra.length;i++){
		if(palabra.charAt(i)==palabra.charAt(palabra.length-1-i)){
			document.write("Es palindrome");
			return;
		}else{
			document.write("No es plalindrome");
			return;
		}
	}
	}

}
              