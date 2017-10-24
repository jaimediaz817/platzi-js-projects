// Code goes here

// -------------------------------------------
/*  PATRON DE DISEÑO MODERADOR */
// -------------------------------------------
	export default function jConverter(){
	//var jConverter = function(uMedidaOrigen = 'kl', uMedudaDestino = 'lb', valor = 0) {
	  
	  // variables de instancia
	  let uMedidaOrigen = 'kg'
	  let uMedudaDestino = 'lb'
	  let valor = 0
	  let orden = null
	  
	  //add
	  let objOrigen = null
	  let objDestino = null
	  
	  // variables iniciales
	  let origen = uMedidaOrigen
	  let destino = uMedudaDestino
	  let val = valor
	  let array=[]
	  //console.log(origen+destino+" <== unidades IN")
	  
	  //Getters and Setters...
	  var setOrigen = function(origenIn){
		origen = origenIn
	  }
	  var setDestino = function(destinoIn){
		destino = destinoIn
	  }
	  var getOrigen = function(){
		return origen
	  }
	  var getDestino= function(){
		return destino
	  }
	  var setOrden = function(ordenIn){
		orden = ordenIn
	  }
	  var getOrden = function(){
		return orden
	  }
	  // *****
	  var setObjetoOrigen = function(objIn){
		objOrigen = objIn
	  }
	  var setObjetoDestino = function(objIn){
		objDestino = objIn
	  }
	  var getObjetoOrigen = function(){
		return objOrigen
	  }
	  var getObjetoDestino = function(){
		return objDestino
	  }
	  // *****
	  //--------------------------------------------------------------------------
	  var crearMedidas = function(){
		var medidasTest = [{
		  "unidad": "tl",
		  "nombre": "Tonelada",
		  "orden": 1,
		  "referenciaEq": 1,
		  "equivalencia": 1000
		}, {
		  "unidad": "kg",
		  "nombre": "Kilogramo",
		  "orden": 2,
		  "referenciaEq": 1,
		  "equivalencia": 2.2046
		}, {
		  "unidad": "lb",
		  "nombre": "Libra",
		  "orden": 3,
		  "referenciaEq": 1,
		  "equivalencia": 0.4535
		}, {
		  "unidad": "gr",
		  "nombre": "Gramo",
		  "orden": 4,
		  "referenciaEq": 1,
		  "equivalencia": 10000
		}];      
		return medidasTest;
	  }
	  	  
	  //--------------------------------------------------------------------------
	  var inicializar = function(){
		//------------------------------
		// reglas de negocio 
		//------------------------------
		// 1 # crear medidas		
		let med = crearMedidas();		
		
		// 2 #  ORDENAR: medidas PENDIENTE VALIDAR: si valor != entonces ordene
		var orden = _ordenarUnidadesIniciales(med)
		setOrden(orden)	
		
		// 3 #  Procesar / ejecutar formula => Salida
		var resultado = _calcularConversionUnidades(orden[0], orden[1].unidad,orden[2].unidad, val)		
		//return "OK"
		return resultado;
	  }
	  
	  //--------------------------------------------------------------------------	  
	  var _ordenarUnidadesIniciales = function(medidas) {
		/*let unidadOrigen = origen
		let unidadDestino = destino*/
		//console.log("_ordenarUnidadesIniciales:"+origen+", destino: "+destino+", medidas: "+medidas)
		// retorno parte I
		var ordenRetornado = {
		  origen: 0,
		  destino: 0
		};
		// retorno parte II y III (unidad 1 y unidad 2 como objetos)
		var objUnidadOrigen = null
		var objUnidadDestino = null
		/*var retorno2 = [{
		  origen: 0,
		  destino: 0
		}, {}, {}]*/
		var flag1=false
		var flag2=false
		
		medidas.forEach(function(currentItem, index, arr) {
		  
		  
		  // validando medidas
		  if (origen == currentItem.unidad) {
			ordenRetornado.origen = currentItem.orden
			objUnidadOrigen = currentItem
			setObjetoOrigen(objUnidadOrigen)
			flag1=true
		  }
		  if (destino == currentItem.unidad) {
			ordenRetornado.destino = currentItem.orden
			objUnidadDestino = currentItem
			setObjetoDestino(objUnidadDestino)
			flag2=true
		  }
		})		
		//return ordenRetornado;
		return [
		  ordenRetornado, objUnidadOrigen, objUnidadDestino
		];
	  }
	  //--------------------------------------------------------------------------
	  // propuesta #1 
	  /**
		D E S A C O P L A D O   => INICIO
		Lleva a cabo el proceso de calculo de la formula
		state: [DESACOPLADO]
	  **/
	  var _calcularConversionUnidades = function(orden, uOrigen, uDestino, valor) {
		//if(orden.origen){console.log("OK")}else{console.log("KO")}
		let operacion = 0.00
		//  calculo
		if (orden.origen > orden.destino) {
		  // origen mayor a destino VERDADERO (DIVIDIR)
		  operacion = procesarFormulaConversion(uOrigen, uDestino, valor)
		} else {
		  // destino menor al origen
		  operacion = procesarFormulaConversion(uOrigen, uDestino, valor)
		}
		//
		return operacion;
	  }
	  /**  D E S A C O P L A D O  => FINAL **/
	  
	  var procesarFormulaConversion = function(origenIn, destinoIn, valor){
		var resultadoFormula=0
		// *****
		// de Toneladas a demás unidades...
		if (origenIn == "tl"){}
		
		// de kilos a demás unidades
		if (origenIn == "kg"){
		  switch(String(destinoIn)){
			case "tl":
			  break;
			case "lb":
			  resultadoFormula=(valor*2)			  
			  break;
			case "gr":
			  break;
		  }
		}
		// de libras a demás unidades
		if (origenIn == "lb"){		  
		  switch(String(destinoIn)){
			case "tl":
			  break;          
			case "kg":
			  resultadoFormula=(valor/2)			  
			  break;
			case "gr":
			  break;            
		  }        
		}
		// de gramos a todas las unidades...
		if (origenIn == "tl"){}
		// retorno		
		return resultadoFormula
	  }
	  
	  var realizarOperacion = function(origenIn,destinoIn,valor){
		setOrigen(origenIn)  
		setDestino(destinoIn)
		let orden = _ordenarUnidadesIniciales(crearMedidas())		
		// 3 #  Procesar / ejecutar formula => Salida		
		var resultado = procesarFormulaConversion(orden[1].unidad,orden[2].unidad,valor)
		//procesarFormulaConversion
		return resultado;
	  }
	  
	  // retorno -----------------------------------------------------------------
	  return {
		//ordenar: _ordenarUnidadesIniciales(origen,destino,val),
		iniciar: inicializar,
		getMedidas: crearMedidas,
		calcularMedidas: realizarOperacion,
		getObjOrigen: getObjetoOrigen,
		getObjDestino: getObjetoDestino
	  };
	}
  

//  }())
  
  