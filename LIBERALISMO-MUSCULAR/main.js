/*==========================================CALCULADORA IMC==========================================*/

	calc = document.getElementById("calc");
	kg = document.getElementById("kg");
	m = document.getElementById("m");
	imc = document.getElementById("imc");
	lectura = document.getElementById("lectura");

	calc.onclick = function(){
		if(kg.value!="" && m.value!=""){
			imcx = (kg.value / ((m.value*m.value)/10000));
			imc.innerHTML = imcx.toFixed(2);
			console.log(imcx);

			if(imcx<18.5){ lectura.innerHTML = "Peso inferior al normal"; }
			else if(imcx>=18.5 && imcx<=24.9){ lectura.innerHTML = "Peso normal"; }
			else if(imcx>=25 && imcx<=29.9){ lectura.innerHTML = "Peso superior al normal"; }
			else if(imcx>30){ lectura.innerHTML = "Peso muy alto"; }

		}else{
			alert("Tenés que ingresar tu peso y altura master.")
		}

	};
/*==========================================CALCULADORA IMC==========================================*/
	calcularMacros = document.getElementById("calc-macros");
	kgMacros = document.getElementById("kg-macros");
	altura = document.getElementById("m-macros");
	edad = document.getElementById("edad-macros");
	seleccionSexo = document.getElementById("sexo");
	sexo = seleccionSexo.value;
	objetivo = document.getElementById("objetivo");
	seleccionObjetivo = objetivo;
	calorias = document.getElementById("calorias");
	proteina = document.getElementById("proteina");
	grasa = document.getElementById("grasa");
	fibra = document.getElementById("fibra");

	calcularMacros.onclick = function(){
		funcion1();
		funcion2();
	  }

	function funcion1(){
		if(kgMacros.value!="" && altura.value!="" && edad.value!="" && seleccionSexo.value==="Hombre"){
			caloriasx = ((10*kgMacros.value) + (6.25*altura.value)-(5*edad.value)+(5));
			calorias.innerHTML = caloriasx.toFixed(2);
			console.log(caloriasx);						
		} else if (kgMacros.value!="" && altura.value!="" && edad.value!="" && seleccionSexo.value==="Mujer"){
			caloriasx = ((10*kgMacros.value) + (6.25*altura.value)-(5*edad.value)-(161));
			calorias.innerHTML = caloriasx.toFixed(2);
			console.log(caloriasx);
		} else if (kgMacros.value!="" && altura.value!="" && edad.value!="" && seleccionSexo.value==="Helicoptero Apache"){
			calorias.innerHTML = "¿Cómo que sos un helicóptero?";
		} else {
			alert("Completá todos los datos qleadaso.")
		}
	}

	function funcion2(){
		if(seleccionObjetivo.value==="Subir de peso"){
			calorias.innerHTML = caloriasx.toFixed(2) * 1.2;					
		} else if(seleccionObjetivo.value==="Bajar de peso"){
			calorias.innerHTML = caloriasx.toFixed(2) * .8;
		} else if(seleccionSexo.value==="Helicoptero Apache"){
			calorias.innerHTML = caloriasx.toFixed(2);
      	} else(calorias.innerHTML = caloriasx);
	}




/*==========================================MENU SIDE NAV==========================================*/

/* Set the width of the side navigation to 250px */
function openNav() {
      document.getElementById("mySidenav").style.width = "100%";
  }
  
  /* Set the width of the side navigation to 0 */
  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }

  