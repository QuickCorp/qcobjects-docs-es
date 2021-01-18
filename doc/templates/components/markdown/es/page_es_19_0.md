## Referencia

Aquí están los símbolos y conceptos esenciales de referencia [QCObjects](https://qcobjects.dev)

### QC_Object

Tipos básicos de todos los elementos

### ComplexStorageCache

Con **ComplexStorageCache** puedes manejar el cache de cualquier objeto y subirlo en el storage local.

#### Uso:

```javascript
var cache = new ComplexStorageCache({
                      index:object.id, // Object Index
                      load:(cacheController)=>{}, // A function to execute for the first time
                      alternate: (cacheController)=>{} // The alternate function to execute from the second time the source coude is loaded
                      });
```

#### Ejemplo:

```javascript
var dataObject = {id:1,
                  prop1:1,
                  prop2:2
                };

var cache = new ComplexStorageCache({
    index: dataObject.id,
    load: (cacheController) => {
      dataObject = {
              id:dataObject.id,
              prop1:dataObject.prop1*2, // changing a property value
              prop2:dataObject.prop2
            };
      return dataObject;
    },
    alternate: (cacheController) => {
      dataObject = cacheController.cache.getCached(dataObject.id); // setting dataObject with the cached value
      return;
    }
  });

// Next time you can get the object from the cache
var dataObjectCopyFromCache = cache.getCached(dataObject.id);
console.log(dataObjectCopyFromCache); // will show the very same object value than dataObject
```

### asyncLoad

La función **asyncLoad** carga el código una vez en el modo asyc. Esto es útil para asegurar que el proceso inicial no replica la ejecución y no es recargado después de un código sensible.

#### Uso:
```javascript
asyncLoad(()=>{
  // my code here
},args);
// Where args is an array of arguments, it can be the "arguments" special object
```

#### Ejemplo:
```javascript

let doSomething = (arg1,arg2)=>{
  asyncLoad((arg1,arg2)=>{
    console.log(arg1);
    console.log(arg2);
  },arguments);
};

doSomething(1,2); // the code of doSomething will be executed once after the rest of asyncLoad queue of functions and before the execution of Ready event.

```

### Class

Esto NO es una clase de definición de ECMAScript 2015 (mira [clase ECMAScript 2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) for reference).

Clase es una función especias que te ayuda a declarar la clase de una manera mas fácil y compatible. Funciona con cross-browser, y esperamos que ECMA pueda adoptar algo similar en el futuro. Para no dejar al Javascript confuso sobre esto, [QCObjects](https://qcobjects.dev) usa "Class" no "class" (note the Camel Case).

#### Uso:

```javascript
Class('MyClassName',MyClassDefinition);
```

Donde **MyClassDefinition** es un objeto junto a el **prototype** de QCObjects

#### Ejemplo:

```javascript
Class('MyClassName',InheritClass,{
  propertyName1:0, // just to declare purpose
  propertyName2:'',
  classMethod1: function (){
    // some code here
    // note you can use "this" object
    return this.propertyName1;
  },
  classMethod2: function () {
    // some code here
    return this.propertyName2;
  }
});

var newObject = New(MyClassName,{
    propertyName1:1, // this initializes the value in 1
    propertyName2:"some value"
});
console.log(newObject.classMethod1()); // this will show number 1
console.log(newObject.classMethod2()); // this will show "some value"
```


### Método QC_Append, append

Este es un método especial que hará tu vida mas fácil cuando quieras manipular el **DOM** dinámicamente. Puedes insertar un componente incluso **Component**, a un objeto **QCObjects** o a el elemento **DOM** dentro de otro **HTMLElement**.

##### Uso:

```javascript
[element].append([object or element]);
```
#### Ejemplo:

```javascript
// This will create a QCObjects class named "canvas" extending a HTMLCanvasElement with a customAttr property that has a "custom" value
Class('canvas',HTMLCanvasElement,{
  customAttr:'custom'
});

// This will declare an instance canvas1 from the class canvas
let canvas1 = New(canvas,{
            width:100,
            height:100,
          });

// This will append the canvas1 object to the document body
document.body.append(canvas1);

```



### El método \_super\_

Cuando extiendes una clase QCObject desde otra, puedes usar \_super\_ metodo para tener una instancia desde la definición de la clase central.

#### Uso:

```javascript

_super_('MySuperClass','MySuperMethod').call(this,params)
// where this is the current instance and params are method parameters
```

#### Ejemplo:

```javascript
Class('MySuperiorClass',InheritClass,{
  propertyName1:0, // just to declare purpose
  propertyName2:'',
  classMethod1: function (){
    // some code here
    // note you can use "this" object
    return this.propertyName1;
  },
});

Class('MyClassName',MySuperiorClass,{
  propertyName1:0, // just to declare purpose
  propertyName2:'',
  classMethod2: function () {
    // The next line will execute classMethod1 from MySuperiorClass
    // but using the current instance of MyClassName1
    return _super_('MySuperiorClass','classMethod1').call(this);
  }
});

var newObject = New(MyClassName,{
    propertyName1:1, // this initializes the value in 1
    propertyName2:"some value"
});
console.log(newObject.classMethod2()); // this will show the number 1
```

### New

Crea una instancia de objeto de una definición de clase de QCObject.

#### Uso:

```javascript
let objectInstance = New(QCObjectsClassName, properties);
// where properties is a single object with the property values
```
NOTA: En las propiedades del objeto puedes usar un solo valor o un captador también pero, solo se ejecutaran una vez.

#### Ejemplo:

```javascript
Class('MyCustomClass',Object);
let objectInstance = New(MyCustomClass,{
  prop1:1,
  get randomNumber(){ // this getter will be executed once
    return Math.random();
  }
});

console.log(objectInstance.randomNumber); // it will show console.log(objectInstance.prop1); // it will show number 1
```

### InheritClass

Una sola definición de clase común QCObjects es utilizada.

### ClassFactory

Usa la **ClassFactory** para tener una declaración de clase de fabrica para la clase,
también puedes usar la clase de fabrica desde un paquete o desde la fila apilada.

Para recuperar la clase de fabrica de la clase fila apilada simplemente usa el nombre de la clase llamándola directamente en el código.

#### Ejemplo:

```javascript
/* When you declare MyClass using Class() it is instantly added to the Class queue stack
* and you can get the factory either using ClassFactory() or calling the name MyClass straight in the code
*/
Class('MyClass',{
	a:1
})
console.log(MyClass == ClassFactory('MyClass')) // it will show true
```

```javascript
/* On the other hand, ClassFactory() will be so useful when you define a Class into a Package
*/
Package('org.quickcorp.package1',[
	Class('MyClass',{
		a:1
	})
])
console.log(MyClass == ClassFactory('MyClass')) // it will still show true
// The following line will show true as well
console.log(MyClass == ClassFactory('org.quickcorp.package1.MyClass'))
```

```javascript
/* The interesting thing is when you have declared more than one Class using the
* same name MyClass into different packages but with different property default values
* and even properties
*/
Package('org.quickcorp.package1',[
	Class('MyClass',{
		a:1
	})
])
Package('org.quickcorp.package2',[
	Class('MyClass',{
		a:2,
		b:1
	})
])
// The last declaration of MyClass will be the one survival in the Class queue
// so the reference MyClass in the code will point to that one
console.log(MyClass == ClassFactory('MyClass')) // it will still show true

// In this case as the MyClass defined in the org.quickcorp.package1 will not be the same
// as the one in the org.quickcorp.package2, but the MyClass in the package2 is the last one
// The following line will show false
console.log(MyClass == ClassFactory('org.quickcorp.package1.MyClass'))

// The following line will show true
console.log(MyClass == ClassFactory('org.quickcorp.package2.MyClass'))

// The following line will show false
console.log(ClassFactory('org.quickcorp.package1.MyClass') == ClassFactory('org.quickcorp.package2.MyClass'))
```

Los ejemplos anteriores están intencionalmente hechos para explicar y mostrar como el alcance de la definición de clase en QCObjects es protejida, llevada y reflejada en una ClassFactory.

Así que vas a querer usar la ClassFactory cuando necesites completar un control sobre el alcance cuando se extienden las Clases.

**Ejemplo**

```javascript
// When normally you extend a Class using the Class queue you do:
Class('MyExtendedClass',MyInheritClass,{
	extendedProp1: 'value of prop',
	extendedProp2: 2
})

```

```javascript
/* But to protect the scope from misleading by reference, you can asure that MyInheritClass
is the one you want to extend by declaring it into a package and then extend it
*/
Package('org.quickcorp.mypackage1',[
	Class('MyInheritClass',{
		sourceProp:1
	}),
])

// The following code is a definition of MyExtendedClass into a different package
// org.quickcorp.package2
// extending MyInheritClass using ClassFactory to retreive the Class from the source package
// org.quickcorp.mypackage1
Package('org.quickcorp.mypackage2',[
	Class('MyExtendedClass',ClassFactory('org.quickcorp.mypackage1.MyInheritClass'),{
		extendedProp1: 'value of prop',
		extendedProp2: 2
	})
])

// this will show the number 1 (as the inherited default value of sourceProp)
console.log(New(MyExtendedClass).sourceProp)

```

### \_Crypt

Con \_Crypt puedes codificar en serie objetos a passphrase

#### Ejemplo (1):

```javascript
 var _string = New(_Crypt,{string:'hello world',key:'some encryption md5 key'});
 console.log(_string._encrypt());
 console.log(_string._decrypt()); // decodes encrypted string to the source
 ```
 #### Ejemplo (2):

 ```javascript
 _Crypt.encrypt('hola mundo','12345678866');
 _Crypt.decrypt('nqCelFSiq6Wcpw==','12345678866');
```


### GLOBAL

**GLOBAL** es una clase especial de QCObject para conseguir alancé global. Tiene un conjunto y consigue un método que te ayude a manejar propiedades internas Globales.

#### Ejemplo:

```javascript
GLOBAL.set('globalProperty1','some value in global scope');
var globalProperty1 = GLOBAL.get('globalProperty1');
```

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

### waitUntil

WaitUntil es un ayudante solo en caso de que estés en problemas tratando de correr el código antes de que la condición sea real. El código dentro del waitUntil sera ejecutado una vez.

NOTA: Esto es útil en algunos casos pero no es recomendado para uso excesivo.

#### Uso:

```javascript
waitUntil(()=>{
  // the code that will be executed after the condition is true
},()=>{return condition;});
// where condition is what I want to wait for
```

#### Ejemplo:

```javascript
let someVar = 0;
waitUntil(()=>{
  console.log('someVar is present');
},()=>{return typeof someVar != 'undefined';});
// where condition is what I want to wait for
```


### Package

Define el paquete de QCObjects y regrésalo.

#### Uso:

```javascript
Package('packageName',[packageContent]);
```
Donde packageContent es una gama de clases de QCObjects. Si solo pasas el packageName param conseguirás el contenido declarado anteriormente.


#### Ejemplo (1):

```javascript
'use strict';
Package('org.quickcorp.main',[
  Class('Main',InheritClass,{
    propertyName1:'propertyValue1',
  }),
  Class('MyCustomClass',InheritClass,{
    propertyName2:'propertyValue2',
  }),
]);
```

#### Ejemplo (2):

```javascript
let mainPackage = Package('org.quickcorp.main'); // this will return the previously declared content of package 'org.quickcorp.main'
// mainPackage[0] will be the Main class definition.
// This is useful for code introspection
```

La técnica de carga de paquetes presente en QCObjects esta basada en una promesa y orientada al alcance. Puedes preguntar si un paquete fue cargado simplemente llamando la función Packege() pasando el nombre del paquete a un argumento.


### Import

Importa un paquete desde otro archivo JS.

#### Uso:

```javascript
Import (packagename,[ready],[external]);
```
Donde el packagename es el nombre del paquete, listo es una función que podrá ser ejecutada después de que el paquete es cargado y el externo es un valor bolean que indica si el archivo JS esta en el mismo origen o esta desde otro recurso externo.

#### Ejemplo (1):

```javascript
Import('org.quickcorp.main');
```
El código anterior intentara importar un archivo JS llamado 'org.quickcorp.main.js' desde un camino especifico en el valor de ajuste  **relativeImportPath** presente en tu **CONFIG**. Dentro del archivo tienes que definir el paquete mediante el uso del paquete ('org.quickcorp.main',[Class1, Class2...])

#### Ejemplo (2):

```javascript
Import('org.quickcorp.main',function (){
  console.log('remote import is loaded');
},true);
```

El código anterior esta vez esta tratando de cargar en el mismo paquete usando el camino externo mediante el **remoteImportsPath** ajustes presentes en tu **CONFIG**

NOTA: En los dos ejemplos anteriores no necesitas usar o especificar la extensión ".js". Esto esta usado por defecto y no puede ser cambiado por razones de seguridad.

### Export

Pon un símbolo(barra o función) en el alcance global.

#### Uso:

```javascript
Export('name of symbol');
```

#### Ejemplo:

```javascript
(()=>{
  // this is local scope
  let someFunction = (someLocalParam)=>{
    console.log(someLocalParam);
  };
  Export(someFunction); // now, someFunction is in the top level scope.
})();


// this is the top level scope
someFunction('this works');
```

### Cast

Usa el método Cast de cualquier elemento DOM para obtener las propiedades de otro tipo de objeto. Esto es útil para trasformar un tipo objeto a otro otorgándole mas flexibilidad a tu código.

#### Uso:

```javascript
let resultObject = [element or QCObjects type].Cast(objectToCastFrom);
```

Donde objectToCastFrom es un objeto para obtener propiedades desde y poner el objeto resultante regresado por el cast.

#### Ejemplo:

```javascript
Class('MyOwnClass',{
  prop1:'1',
  prop2:2
});

let obj = document.createElement('div').Cast(MyOwnClass);
```

El código anterior creara un objeto DOM y lo emitirá a MyOwnClass. Gracias a que MyOwnClass es un tipo clase de QCObject el objeto ahora tendrá propiedades prop1 y prop2 y ahora sera una instancia de objeto QCObject con una propiedad del cuerpo que es un elemento div.

### Tag

Etiquetar es una función útil para seleccionar cualquier elemento DOM usando selectores. Etiquetar siempre regresa a la lista de elementos que puedas mapear, ordenar y filtrar como cualquier otra lista.

#### Uso:

```javascript
var listOfElements = Tag(selector);
```

Donde el selector es un DOM selector de respuestas.

#### Ejemplo:

```html
<!DOCTYPE html>
<html>
    <head>
    	<title>Demo</title>
    	<script type="text/javascript" src="https://qcobjects.dev/QCObjects.js"></script>
    </head>
    <body>
    <div class="myselector">
    <p>Hello world</p>
    </div>
    <script>
    Ready(()=>{
      Tag('.myselector > p').map((element)=>{
        element.innerHTML = 'Hello world! How are you?';
      });
    });
    </script>
    </body>
</html>
```

En el código anterior el elemento párrafo fue creado dentro de un div con una clase css llamada myselector mediante html y luego es modificada dinámicamente usando la función etiqueta de QCObject. Si estas familiarizado con un framework selector query te encantara este.

### Ready

Asigna una función para correr después de que todo esta hecho mediante QCObject y después del evento window.onload. Úsalo para prevenir un error de objeto DOM 'indefinido'.

#### Uso:

```javascript
Ready(()=>{
  // My init code here!
});
```
Tenga en cuenta que si define los componentes dinámicos mediante el uso de una etiqueta "componente" en HTML, el contenido dinámico no activara eventos listos. Para atrapar el código cada vez que se carga un componente dinámico usa un método decontrolado hecho en su lugar.

Usaras implementación lista principalmente cuando quieras implementar QCObjects en conjunto con otro framework que lo necesite.

### Component Class

Un tipo clase de QCObject por componentes.

#### Propiedades

**[Component].domain**
Regresa una cadena con el dominio de tu aplicación. Se establece automáticamente por QCObjects al momento de cargar.

**[Component].basePath**
Regresa una cadena con un camino url base de tu aplicación. Se establece automáticamente por QCObjects al momento de cargar.

NOTA: Si quieres cambiar los componentes con base en un camino, tienes que usar _CONFIG.set('componentsBasePath','new path relative to the domain')_ en tu unidad de código.

**[Component].templateURI**
Es una cadena representando un componente plantilla URI relativo al dominio. Cuando este listo, el componente sera cargado a la plantilla y lo agregara al contenido interno dentro del cuerpo childs como parte del DOM. Para establecer esta propiedad es recomendado usar la función ayudante ComponentURI.

**[Component].tplsource**
Es la cadena representando a la fuente donde el template sera cargado. Puede ser "default" o "none". El valor "default" le dirá a QCOBject que cargue el template desde el contenido templateURI. El valor "none" le dirá a QCObject que no cargue el template desde ningún lado.

**[Component].url**
Es una cadena representando una url completa de un componente. Es automáticamente establecido por QCObjects cuando un componente es instanciado.

**[Component].name**
Es una cadena que representa el nombre de un componente. El nombre de un componente puede ser cualquier valor alphanumerico que identifique un tipo de componente. Sera internamente utilizado mediante ComponentURI para construir un tempalte URI normalizado.

**[Component].method**
Es una cadena que representa a un método HTTP o HTTPS. Por defecto cada componente esta configurad para usar el método "GET". En la mayoría de los casos no necesitas cambiar esta propiedad.

**[Component].data**
Es un objeto que representa los datos del componente. Cuando QCObject carga un template este conseguirá cada propiedad de los datos y la atará al nivel de template representado por la misma propiedad dentro del contenido del template entre los brackets dobles, ejemplo:  (example: {{prop1}} in the template content will represent data.prop1 in the component instance).
NOTA: Para refrescar los enlaces de datos para reconstruir el component (mira el uso de [Component].rebuild() para mas detalles ).

**[Component].reload**
Es un valor boolean el que dice cuando qcobjects es obligado a recargar el contenido de un componente en el template o no. Si el valor es cierto, el contenido del template sera remplazado por los actuales hijos DOM del elemento cuerpo. Si este valor es falso, el contenido del template sera añadido después de los hijos del componente cuerpo.

**[Component].cached**
Es un valor booleado el que le dice a QCObject si el componente necesita ser atrapado o no. Cuando el componente es atrapado, el contenido del template es cargado desde templateURI sera cargado una sola vez. Puedes configurar esta propiedad incluso como una propiedad estática de un componente de clase para configurarlo como un valor predeterminado para cada siguiente componente instancia de objeto o configurarlo de manera individual el valor de la propiedad en cada definición de componente. En un mundo donde el desempeño cuenta, para darle mas flexibilidad al comportamiento del cache es necesitado mas que nunca.

**[Component].routingWay**
Regresa una cadena representando la forma de enrutamiento. Un valor puede ser "hash", "pathname" o "search".
NOTA: Para cambiar el routingWay de cada componente es recomendado usar CONFIG.set('routingWay','value of a valid routing way')en tu unidad de código.

**[Component].validRoutingWays**
Regresa a la lista que representa la forma de enrutamiento. QCObject usa esto internamente para validar el routingWay el cual usa para construir los enrutamientos de componente.

**[Component].routingNodes**
Regresa al objeto NodeList representando la lista de nodes que fueron cargados por el creador de enrutamientos.

**[Component].routings**
Regresa a la lista con los componentes complicados cuando el componente fue instanciado.

**[Component].routingPath**
Regresa una cadena que representa el camino del enrutamiento actual.

**[Component].routingSelected**
Regresa un objeto que representa el componente de enrutamiento actual.

**[Component].subcomponents**
Regresa a la lista de componentes que son childs de las instancias de componentes.

**[Component].body**
Es un elemento DOM que representa el cuerpo del componente
NOTA:Cada vez que un cuerpo es configurado, sera activado el generador de rutas para este componente.

#### Métodos
**[Component].set('prop',value)**
Establece un valor para una propiedad de componente.

**[Component].get('prop')**
Devuelve el valor de una propiedad componente

**[Component].rebuild()**
Reconstruye un componente. Forzará una llamada para el cargador de componentes con este componente cuando sea necesario.

**[Component].Cast(ClassName or ComponentClassName)**
Devuelve el reparto de una definición de componente en otra. Esto es útil para combinar dinámicamente definiciones de componentes.

**[Component].route()**
Fuerza al generador de rutas de componentes a recargar las rutas del componente. Esto resultara en una reconstrucción de llamada cuando sea necesario.

**[Component].fullscreen()**
Pone el componente en modo de pantalla completa.

**[Component].closefullscreen()**
Cierra el modo de pantalla completa.

**[Component].css(css object)**
Establece las propiedades del css para el componente.

**[Component].append(component or QCObjects object)**
Agrega un componente como hijo del cuerpo del componente actual

**[Component].attachIn(selector)**
Adjunta un cuerpo de componente actual a cualquier elemento en el selector dado.

### Tag HTML Component

Una etiqueta HTML es una representación de una instancia de componente. Cada declaración de una etiqueta `<component></component>`generara una instancia relacionada con un componente QCObjects. Mientras una etiqueta de componente no es una instancia por si misma, incluso puedes definir algunas propiedades de instancia configurando el atributo de etiqueta relacionado cuando esté disponible.

#### Atributos disponibles

A continuación se muestra una lista de los atributos disponibles para una etiqueta de componente

##### El atributo name

**`<component name>`**
Establece el nombre de la instancia de componente relacionada creada por QCObjects.

###### Uso:

```html
<component name="name_of_component"></component>
```

###### Ejemplo:

```html
<!-- index.html -->
<!DOCTYPE html>
<html>
    <head>
    	<title>Demo</title>
    	<script type="text/javascript" src="https://qcobjects.dev/QCObjects.js"></script>
    </head>
    <body>
      <!-- this will load the contents of ./templates/main[.tplextension] file -->
      <component name="main"></component>
    </body>
</html>
```

##### El atributo cached

**`<component cached>`**
Establece la propiedad en caché si la instancia relacionada de un componente.

NOTA: Solo se puede establecer un valor de "verdadero" para indicar a QCObjects que el contenido de la plantilla del componente debe almacenarse en caché. Cualquier otro valor sera interpretado como falso.

###### Uso:

```html
<component name="name_of_component" cached="true"></component>
```

##### La declaración de la propiedad data
 **`<component data-property1 data-property2 ...>`**

Configura un valor estatico de las propiedades de los datos en una instancia de componente.

NOTA: La declaración de la etiqueta de propiedad de datos se pensó con el propósito de dar una forma simple de hacer mocking de un componente dinámico con asignaciones de Template. No lo uses pensando que es una forma bidireccional de datos. Mientras puedas tener un comportamiento de forma bidireccional accediendo a los objetos de datos desde una instancia de componente, no es lo mismo que la etiqueta de componente. La declaración de propiedad de datos en una etiqueta de componente es solo una forma de unión de datos debido a los componentes de arquitectura de árbol.

##### El atributo controllerClass

**`<component controllerClass>`**
Define un controlador de clase personalizado desde una instancia de componente.

###### Uso:

```html
<component name="name_of_component" controllerClass="ControllerClassName"></component>
```


##### El atributo viewClass

 **`<component viewClass>`**
Define una vista de clase personalizada para la instancia del componente

###### Uso:

```html
<component name="name_of_component" viewClass="ViewClassName"></component>
```

##### El atributo componentClass

**`<component componentClass>`**
Define un componente de clase personalizado para la instancia de un componente.

###### Uso:

```html
<component name="name_of_component" componentClass="ComponentClassName"></component>
```

##### El atributo effecClass

**`<component effectClass>`**
Define un efecto de clase personalizado para la instancia del componente

###### Uso:

```html
<component name="name_of_component" effectClass="EffectClassName"></component>
```

##### El atributo template-source

**`<component template-source>`**
Establece el tplsource de una propiedad relacionada con una instancia de un componente Posiblemente los valores son "none" o"default".

###### Uso:

```html
<component name="name_of_component" template-source="none"></component>
```

##### El atributo tplextension

**`<component tplextension>`**
Establece la propiedad de tplextension relacionada con una instancia de un componente. Posibles valores son cualquier archivo de extensión. El valor por defecto es "html"

###### Uso:

```html
<component name="name_of_component" tplextension="tpl.html"></component>
```


#### ComponentURI

Es una función ayudante la que te deja definir el templateURI por un componente en una forma normalizada

##### Ejemplo:

```javascript
var templateURI = ComponentURI({
  'COMPONENTS_BASE_PATH':CONFIG.get('componentsBasePath'),
  'COMPONENT_NAME':'main',
  'TPLEXTENSION':"tpl.html",
  'TPL_SOURCE':"default"
});

console.log(templateURI); // this will show something like "templates/components/main.tpl.html" depending on your CONFIG settings
```


#### componentLoader

Carga una instancia de componente en un nivel bajo y agrega el tempalte del componente a el cuerpo del componente. En la mayoría de los casos no necesitara llamar al componentLoader con el fin de cargar un componente. Esto es automáticamente llamado por QCObjects cuando sea necesario. ComponentLoader regresa una promesa que es resuelta cuando el componente se ha cargado y rechazado cuando el componente fallo.

##### Uso:

```javascript
 [Promise] componentLoader(componentInstance,load_async)
```

Donde componentInstance es una instancia de componente creada por _`New(ComponentDefinitionClass)`_

##### Ejemplo:

```javascript
componentLoader(componentInstance,load_async).then(
  (successStandardResponse)=>{
    // component load successful
    var request = successStandardResponse.request;
    var component = successStandardResponse.component;
  },(failStandardResponse)=>{
    // component load failed
    var component = failStandardResponse.component;
  });
```


#### buildComponents

Reconstruye cada componente que sea un elemento child del elemento DOM, quien posee el método. En la mayoría de los casos no necesitaras llamar a builcomponents con la intención de construir o reconstruir todos los componentes del DOM. Esto es automáticamente llamado por QCObjects cuando es necesario.


##### Uso:

```javascript
[element].buildComponents()
```

##### Ejemplo:

```javascript
document.buildComponents()
```


### Controller

Una clase QCObjects built-in para definir un contorlador.

### View

Una vista QCObjects built in para definir una vista.

### VO

Una clase QCObjects built-in para definir un valor de objeto.

### Service

Un tipo clase QCObjects para servicio.

#### Propiedades

**[Service].domain**
Regresa a una cadena que domina tu aplicación.Es automáticamente configurado por QCObjects a la hora de carga.

**[Service].basePath**
Regresa a la cadena con un camino base url para tu aplicación. Es automáticamente configurado por QCObjects a la hora de carga.

**[Service].url**
Una cadena representa el url completo del servicio. Puede ser absoluto o relativo para el basepath cuando es aplicado. Puede ser también un url externo.

NOTA: Para cargar un servicio de un recurso externo necesitaras expecificar el parámetro al verdadero usando serviceLoader.

**[Service].name**
Una cadena representando el nombre de un componente. El nombre de un servicio puede ser de cualquier valor alphanumerico que identifique la instancia del servicio. No es una identificación única, sino solo un nombre descriptivo.

**[Service].method**
Una cadena representando a un metodo HTTP o a HTTPS. Los posibles valores son :"GET", "POST", "PUT", ... cualquier otro sera aceptado mediante servicios de llamadas REST.

**[Service].data**
Es un objeto representando al servicio de datos. Cuando QCObjects carga el servicio recibe una respuesta y lo interpreta como un template. Así que una vez la respuesta del servicio es obtenida, Tomara cualquier propiedad de un objeto de datos y lo atara a una etiqueta template representando la misma propiedad dentro del contenido entre los brackets dobles(Ejemplo: {{prop1}}en el contenido de la plantilla se representará data.prop1 en la instancia de servicio).

**[Service].cached**
Es un servicio boolean el que le dice a QCObjects si la respuesta necesita ser cacheada o no. Cuando el servicio es cacheado el contenido plantilla cargara desde el servicio url que sera cargado de una vez. Necesitas configurar el valor falso para cada instancia de servicio defines para asegurar la carga del servicio desde el recurso pero, no del almacenamiento caché.

#### Métodos

**[Service].set('prop',value)**
Establece un valor para una propiedad de servicio.

**[Service].get('prop')**
Devuelve el valor de una propiedad de servicio

### serviceLoader

Carga una instancia de servicio y regresa a la promesa que es resuelta cuando los servicios han respondido exitosamente a la carga y rechazados cuando falla la respuesta de carga.

#### Uso:

```javascript
[Promise] serviceLoader(serviceInstance)
```

#### Ejemplo:

```javascript
Class('MyTestService',Service,{
    name:'myservice',
    external:true,
    cached:false,
    method:'GET',
    headers:{'Content-Type':'application/json'},
    url:'https://api.github.com/orgs/QuickCorp/repos',
    withCredentials:false,
    _new_:()=>{
      // service instantiated
    },
    done:()=>{
      // service loaded
    }
});
var service = serviceLoader(New(MyTestService,{
  data:{param1:1}
})).then(
  (successfulResponse)=>{
    // This will show the service response as a plain text
    console.log(successfulResponse.service.template);
  },
  (failedResponse)=>{

  });
```


### JSONService

Es la definición Buil-in para un servicio de clase JSON

#### Propiedades

**[JSONService].domain**
Regresa una cadena con la que domina tu aplicación. Es automáticamente configurada por QCObjects a la hora de carga.

**[JSONService].basePath**
Regresa una cadena con camino url base de tu aplicación. Es automáticamente configurada por QCObjects a la hora de carga.

**[JSONService].url**
Una cadena completa representando a todo el servicio url. Puede ser absoluto o relativo al basePath cuando es aplicado. Puede ser tambien un url externo.

NOTA: Para cargar un srvicio de un recurso interno necesitas especificar el parametro externo para verdaderamente usar el serviceLoader.

**[JSONService].name**
Es una cadena representando un componente. El nombre del servicio puede ser cualquier valor alphanumerico que identifique el servicio de instancia. No es una identificación única, sino solo un nombre descriptivo.

**[JSONService].method**
Es una cadena representando el metodo HTTP o HTTPS. Los posible valores son:"GET", "POST", "PUT", ... Cualquier otro sera aceptado mediante servicios de llamadas REST.

**[JSONService].data**
Es un objeto representando al servicio de datos. Cuando QCObjects carga el servicio recibe una respuesta y lo interpreta como un template. Así que una vez la respuesta del servicio es obtenida, Tomara cualquier propiedad de un objeto de datos y lo atara a una etiqueta template representando la misma propiedad dentro del contenido entre los brackets dobles(Ejemplo: {{prop1}}en el contenido de la plantilla se representará data.prop1 en la instancia de servicio).

**[JSONService].cached**
Es un servicio boolean el que le dice a QCObjects si la respuesta necesita ser cacheada o no. Cuando el servicio es cacheado el contenido plantilla cargara desde el servicio url que sera cargado solo una vez. Necesitas configurar el valor falso para cada instancia de servicio defines para asegurar la carga del servicio desde el recurso pero, no del almacenamiento caché.

#### Métodos

**[JSONService].set('prop',value)**
Configura el Valor para una propiedad de servicio.

**[JSONService].get('prop')**
Regresa el valor de una propiedad de servicio.

#### Ejemplo:

```javascript
Class('MyTestJSONService',JSONService,{
    name:'myJSONservice',
    external:true,
    cached:false,
    method:'GET',
    withCredentials:false,
    url:'https://api.github.com/orgs/QuickCorp/repos',
    _new_:function (){
      // service instantiated
      delete this.headers.charset; // do not send the charset header
    },
    done:function (result){
      _super_('JSONService','done').call(this,result);
    }
});
var service = serviceLoader(New(MyTestJSONService,{
  data:{param1:1}
})).then(
  (successfulResponse)=>{
    // This will show the service response as a JSON object
    console.log(successfulResponse.service.JSONresponse);
  },
  (failedResponse)=>{

  });
```

### ConfigService

Es una definicion de clase Buil-in que carga los ajustes CONFIG desde un archivo config.json

#### Ejemplo:

```javascript
// To set the config.json file relative url
ConfigService.configFileName='config.json'; // it is done by default
CONFIG.set('useConfigService',true); // using config.json for custom settings config
```

### SourceJS

Usa SourseJS como una clase estática que esta ayudándote a cargar dependencias JS externas. Esto es comúnmente usado para cargar librerías externas y que no siga el paquete sintaxis de QCObjet.

#### Ejemplo:

```javascript
Class("MyNewController",Controller,{
	_new_:function (){
		var controller = this;
		controller.dependencies.push(
			New(SourceJS,{
				external:false,
				url:'doc/js/my-js-resource.js',
				done:function(){
					logger.debug("Dependency loaded")
				}})
			);
	}
})
```

### SourceCSS

Una clase estatica que es usada para cargar recursos CSS externos.

```javascript
Class("MyNewController",Controller,{
	dependencies:[],
	done (){
		this.dependencies.push(New(SourceCSS,{
			external:false,
			url:CONFIG.get('basePath')+'css/my-css-resource.css'
		}));
	}
});
```

### Effect

**Effect** es una super clase para definir los efectos.

#### Ejemplo:

```javascript
Class('CustomFade',Effect,{
	duration:500, // milliseconds of duration
	apply: function (){
		// Necesitas la siguiente línea para crear un efecto Fade en runtime
		_super_('Fade','apply').apply(this,arguments);
	}
})
```


### Timer

**Timer** es una implementación especial de **requestAnimationFrame** para emular la creación de instancias de hilo, así puedes manejar runtime paralell processing en una manera un poquito más eficiente.

NOTA: Como depende de la dispoinibilidad de requestAnimationFrame solo funciona en browsers modernos.

#### Ejemplo:

```javascript
Timer.thread({
		duration:300, // duración en milisegundos
		timing(timeFraction,elapsed){
			return timeFraction; // puedes cambiar esta línea para devolver una función customizada para timing
		},
		intervalInterceptor(progress){
			if (progress>=100){
				// haz lo que quieras aquí
			}
		}
});
```
