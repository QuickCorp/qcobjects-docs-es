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
