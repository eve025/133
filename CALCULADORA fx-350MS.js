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

function asin(){
	mostrar('Math.asin('); ftIn();
} 

function acos(){
	mostrar('Math.acos('); ftIn();
} 
function atan(){
	mostrar('Math.atan('); ftIn();
}

function ftIn(){
	convert = 1;
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

	function ftIn(){
		convert = 1;
	}
}

function inverso(){
	let resultado = document.querySelector('.resultado');
	let calculated = (1 / resultado.value);
	resultado.value = calculated;
} 

function raiz(){
	mostrar('Math.sqrt(');
	convert = 0;
}

function cbrt(){
	mostrar('Math.cbrt(');
	convert = 0;
}

function pI(){
	mostrar('Math.PI');
	convert = 0;
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
	let resultado = document.querySelector('.resultado');
	let calculated, string, numero, operacion, tecla = "";

	try{
		if(convert == 0){
			calculated = eval(resultado.value);
			resultado.value = calculated;
		}
		else if(convert == 1){
			//se convierten a grados
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
		else if(convert == 2){
			calculated = eval(resultado.value);
			numero = calculated * (180/Math.PI);
			resultado.value = numero;
		}
	}
	catch(error){
		resultado.value = "Syntax error!";
		alert(error);
	}

	// alert(convert)
}

function scientific(){
	let cambio = document.querySelector(".switch");
	cambio.setAttribute("onclick", "backToNormal()");
	let normal = document.querySelector("#normal");
	normal.style.display = "none";

	let cientifica = document.querySelector("#cientifica");
	cientifica.style.display = "block";

}

function backToNormal(){
	let cambio = document.querySelector(".switch");
	cambio.setAttribute("onclick", "scientific()");
	let cientifica = document.querySelector("#cientifica");
	cientifica.style.display = "none";

	let normal = document.querySelector("#normal");
	normal.style.display = "block";
}
