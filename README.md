# JConverter
JConverter es un módulo con servicios para calcular medidas de peso basado en el patrón de diseño JS revelador.
[Para ver detalles sobre el procedimiento ejecutado durante el desarrollo del taller, presiona click sobre el enlace]( https://sites.google.com/view/memodevs)

## Descripción del mecanismo de conversión JConverter
-	Como paso inicial se crea una instancia del modulo sin parámetros de entrada y tendrá como retorno el numero cero 0.
-   Cada unidad de medida en el contexto de la aplicación tendrá solo 2 caracteres, es decir: 'tl' para representar toneladas, 'kg' para representar Kilogramos, 'lb' para representar Libras y 'mg' para representar finalmente miligramos.
-	Una vez creado el objeto, se procede a ingresar los parámetros siguiendo un orden específico que define los parámetros de conversión, seguido de un valor numérico como tercer parámetro, es decir, si quiero convertir de Kilos a Libras el orden ideal sería:  'kg', 'lb' para los dos primeros parametros de entrada, y un valor entero numérico como tercer y último parámetro.
-	Unidad origen: corresponde al parametro número 1 según el orden. ('kg', ...
-	Unidad Destino: corresponde al parametro número 1 según el orden. ('...', 'lb')

## Instalación
```
npm install jConverter
```

## Métodos que incorpora
```
- Actualmente la función cuenta con algunos servicios básicos para desplegar una vista agradable y sencilla al cliente
- Estos servicios se exponen desde el retorno de función, y a su vez realiza el llamado a miembros propios (funciones con otro nombre interno)
para así lograr un desacople de responsabilidades y 100% modular.
```

```
iniciar: sin parámetros de entrada
getMedidas: sin parametros de entrada
calcularMedidas: con parametros ('kg', 'lb', 94)
getObjOrigen: sin parametros, retorna todo el objeto origen
getObjDestino: sin parametros, retorna todo el objeto destino
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
- [Twitter Jaime Diaz](https://twitter.com/jdiaz0017)
- [Sitio en google de Jaime Diaz](https://sites.google.com/view/memodevs/)

## Licencia
[MIT](https://opensource.org/licenses/MIT)