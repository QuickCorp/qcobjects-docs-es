### Processor

La clase estatica que usa para establecer el procesador personalizado para CONFIG.

#### Uso:

```javascript
Processor.setProcessor(processor)
```

Donde **processor** es el nombre de la función que recibe el argumento del procesador

#### Ejemplo:

Tienes que usar ese valor en tus ajustes de configuración en el valor **serviceURL** pero también necesitas configurar el **host** y los ajustes de **port** usando el valor analizado de esa url. Para analizar el valor de el ambiente SERVICE_URL la variable bajo demanda y rellenarlo con los ajustes de configuración en tu config.json, tu config.json se vera algo así:
 ```json
// file: config.json
{
	"serviceURL":"$ENV(SERVICE_URL)",
	"host":"$SERVICE_HOST(SERVICE_URL)",
	"port":"$SERVICE_PORT(SERVICE_URL)"
}
```

El **$SERVICE_HOST** y el **$SERVICE_PORT** procesadores no existen. Para definirlos tienes que usar:

```javascript
// execute the next code in your init.js file or before to load the CONFIG settings

let SERVICE_HOST = function (arg){
	var processorHandler = this; // to make this always works, do not use arrow functions to define your
	let serviceURL = new URL(processorHandler.processors.ENV(arg));
	return serviceURL.host;
}
let SERVICE_PORT = function (arg){
	var processorHandler = this; // to make this always works, do not use arrow functions to define your
	let serviceURL = new URL(processorHandler.processors.ENV(arg));
	return serviceURL.port;
}

Processor.setProcessor(SERVICE_HOST);
Processor.setProcessor(SERVICE_PORT);
```

Entonces solo necesita establecer su variable de entorno SERVICE_URL en su shell

Lo siguiente es para los sistemas operativos de Unix/Linux :
```shell
export SERVICE_URL="https://example.com:443/path-to-a-resource/"
```

Y su configuración se cargará dinámicamente de esta manera:

```json
{
	"serviceURL":"https://example.com:443/path-to-a-resource/",
	"host":"example.com",
	"port":"443"
}
```

Y consigue tus valores correspondientes en **CONFIG.get(value)**
