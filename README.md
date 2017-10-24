# JConverter
JConverter es un módulo con servicios para calcular medidas de peso basado en el patrón de diseño JS revelador.
[Para ver detalles sobre el procedimiento ejecutado durante el desarrollo del taller, presiona click sobre el enlace]( https://sites.google.com/view/memodevs)

## Descripción del mecanismo de conversión JConverter
-	Como paso inicial se crea una instancia del modulo sin parámetros de entrada
-	Una vez creado el objeto, se procede a ingresar los parámetros siguiendo un orden específico que define los parámetros de conversión, seguido de un valor numérico como tercer parámetro.
-	Unidad origen: corresponde al parametro número 1 según el orden.
-	Unidad Destino: corresponde al parametro número 1 según el orden.

## Instalación
```
npm install j-converter
```

## Uso
```
import jConverter from 'jConverter'

// solo inicializa el modulo con unos datos por defecto para no generar error.
let inicio = jConverter(); // inicializa el módulo
inicio.iniciar() // crea valores por defecto.

// se crea un array de JSON donde cada objeto representa una unidad de medida.
let datos = jConverter.getMedidas() // obtiene todas las unidades de medida configuradas.

// se calcula el resultado a partir del objeto creado, indicando la unidad origen y destino a convertir seguido del valor.
let resultadoA = inicio.calcularMedidas('lb','kg', 188)
let resultadoB = inicio.calcularMedidas('kg','lb', 94)

// obtiene las medidas en formato JSON
let medidasCatch = JSON.stringify(datos)

// unidades validadas
console.log("validación de unidades básico: "+(resultadoA==resultadoB))
```

## Créditos
- [Jaime Diaz](https://twitter.com/jdiaz0017)

## Licencia
[MIT](https://opensource.org/licenses/MIT)