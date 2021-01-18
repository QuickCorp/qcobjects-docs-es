### CONFIG

CONFIG es una clase inteligente que maneja los ajustes generales de tu aplicación. Puedes tener las propiedades ya sea desde config.json o desde la memoria previamente guardado en la llamada set().

#### Uso desde memoria:

1.- En su código inicial, configura los valores iniciales de CONFIG:
```javascript
CONFIG.set('someSettingProperty','some initial value');
```
2.- Luego puede acceder a él desde cualquier parte de su código utilizando el método get:
```javascript
var someSettingProperty = CONFIG.get('someSettingProperty');
```

#### Uso desde config.json:

1.- Necesitas indicar primero que estas usando el archivo config.jso mediante el ajuste "useConfigService" el valor para la verdad.

```javascript
CONFIG.set('useConfigService',true); // using config.json for custom settings config
```
2.-Una vez  peparaste el valor anterior QCObjects lo sabra y mirara el siguiente ajuste dentro del archivo config.json en la carpeta basePath de tu aplicación.

#### Uso desde config.json encriptado:

También existe una forma de usar el archivo encriptado config.json con el fin de proteger tus ajustes, robots que pueden robar tu data no protegida desde la aplicación web (como las llaves de arrastre API)

El archivo encriptado json va en https://config.qcobjects.dev, pon tu configuración dominantes y tu contenido config.json. La herramienta encriptará tu json y podrás copiar el contenido incriptado para insertarlo en tu archivo config.json. QCObjects sabrá si la data esta encriptada y tu proceso para decodificar la data sera mas transparente para ti.

#### Propiedades dinámicas de CONFIG

A veces necesitaras establecer el valor de la fuente que no sea estática, como el ENV vars u otras fuentes personalizadas de data dinámica. Para tener valor usando CONFIG de una fuente dinámica tienes que usar un procesador. Existen procesadores comunes predefinidos como $ENV (solo si esta disponible en CLI, Collab o Node) y $config (disponible en todos los ambientes).

Los procesadores son llamados como una meta de valor ya sea en el config.json o en la Clase CONFIG.

```json
// file: config.json
{
	"domain":"localhost",
	"env1":"$ENV(ENV1)",
	"customSettings":{
		"value1":"$config(domain)"
	}
}
```

```javascript
let value1 = CONFIG.get("customSettings").value1;
// value1 = "localhost";

let env1 = CONFIG.get("env1");
//env1 = (environment variable ENV1)
```

```javascript
// sets the key "api_key" of the CONFIG settings to a dynamic processor $ENV that recovers the value of API_KEY from the environment variables
CONFIG.set("api_key","$ENV(API_KEY)");

let api_key = CONFIG.get("api_key");
// api_key will contain the value of the system API_KEY environment var
// ($ENV processor returns a valid value only on Node.js , QCObjects CLI and QCObjects Collab engine)
```
