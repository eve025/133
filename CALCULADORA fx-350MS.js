var convert = 0;

function mostrar(tecla){
	let resultado = document.querySelector('.resultado');
	resultado.value += tecla;
}

function borrarTodo(){
	let resultado = document.querySelector('.resultado');
	resultado.value = " ";
}

function borrar(){
	let resultado = document.querySelector('.resultado');
	let array = resultado.value;
	let n = array.length-1;
	let newArray = " ";
	for(let i=0;i<n;i++){
		newArray += array[i];
	}
	resultado.value = newArray;
}

function degrees(){
	convert = 0;
	let mode = document.querySelector('#modeRad');
	mode.style.display = "none";

	let anterior = document.querySelector('#modeGrad');
	anterior.style.display = "block";

	let btnGrad = document.querySelector('.cambio');
	btnGrad.setAttribute("onclick", "radians()");
	btnGrad.textContent = "Rad";

	let radianes = document.querySelectorAll('.rad');
	radianes.forEach(function(btn){
		convert = 1;
	});
}

function radians(){
	convert = 0;
	let mode = document.querySelector('#modeGrad');
	mode.style.display = "none";

	let anterior = document.querySelector('#modeRad');
	anterior.style.display = "block";

	let btnRad = document.querySelector('.cambio');
	btnRad.setAttribute("onclick", "degrees()");
	btnRad.textContent = "Grad";
}

function calcular(){
	// alert(convert)
	let resultado = document.querySelector('.resultado');
	let calculated, string, numero, operacion, tecla = "";

	try{
		if(convert == 0){
			calculated = eval(resultado.value);
			resultado.value = calculated;
		}
		else if(convert == 1){
			string = resultado.value;
			numero = string.replace(/[^0-9]+/g, "");
			// alert(numero)
			let grados = numero * (Math.PI/180);
			// alert(typeof(numero)) //es un string

			// resultado.value = grados;
			// alert(typeof(grados.toString()))

			operacion = string.replace(/[0-9]+/g, "");
			for(let letra=0;letra < operacion.length-1; letra++){
				tecla += operacion[letra];
			}

			// alert(tecla + grados +")");
			// alert(tecla)
			// alert(typeof(operacion))

			let newString = tecla + grados + ")";
			// // let newString = grados;
			// alert(newString)
			calculated = eval(newString);
			resultado.value = calculated;
		}
		// else{
		// 	calculated = eval(resultado.value);
		// 	numero = calculated * (180/Math.PI);
		// 	resultado.value = numero;
		// }
	}
	catch(error){
		resultado.value = "Syntax error!";
		alert(error);
	}
}

function scientific(){
	// alert(convert);
	let cambio = document.querySelector(".switch");
	cambio.setAttribute("onclick", "backToNormal()");
	let normal = document.querySelector("#normal");
	normal.style.display = "none";

	let cientifica = document.querySelector("#cientifica");
	cientifica.style.display = "block";

}

function backToNormal(){
	// alert(convert);
	let cambio = document.querySelector(".switch");
	cambio.setAttribute("onclick", "scientific()");
	let cientifica = document.querySelector("#cientifica");
	cientifica.style.display = "none";

	let normal = document.querySelector("#normal");
	normal.style.display = "block";
}