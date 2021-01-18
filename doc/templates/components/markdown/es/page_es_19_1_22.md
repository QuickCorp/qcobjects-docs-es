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

