### SDK Components

#### org.qcobjects.components.ShadowedComponent

La Clase **ShadowedComponent** es un componente personalizado diseñado para permitirte crear un componente usando el Shadow DOM de un buscador. Lee mas sobre los componentes Shadow en [Este articulo en Hackernoon]
 (https://www.hackernoon.com/shadowed-components-and-qcobjects-kd703yld).

##### Uso:

```html
<component componentClass="ShadowedComponent"></component>
```

#### org.qcobjects.components.FormField

**FormField** es una clase par los componentes personalizados**QCObjects** que te permiten que le permite inyectar un comportamiento genérico de campo de formulario a sus componentes. Tiene una característica inversa data-binding para detectar valores de los campos DOM dentro de tu formulario y asignarlos a los valores de datos de tu componente. De esta forma no perderás el desempeño creando un data binig bidireccional a la antigua basado en observables. Para implementar este comportamiento avanzado, necesitas hacer lo siguiente:

1.- Asigna un atributo **data-field** a la etiqueta DOM dentro del cuerpo del componente con el nombre del campo correspondiente en tu objeto de datos.

2.- A tu **component tag**, asígnale **FormField** en el atributo **componentClass**.

3.- Para recuperar los datos del formulario dentro de tu componente solo tienen que usar el componentInstance.data .  Cada propiedad del objeto componentInstance.data sera unido por los eventos bindig con ls propiedades del valor en cada objeto DOM del formulario que ha sido asignado al data-field.

##### Uso:

```html
<!-- Where you place the component -->
<component name="myform" componentClass="FormField"></component>
```

```html
<!-- template: myform.tpl.html -->
<label for="email"><b>Email</b></label>
<input data-field="email" type="email" placeholder="Enter Email" name="email" required>

<label for="psw"><b>Password</b></label>
<input data-field="name" type="text" placeholder="Enter Your Name" name="name" required>
```

**data-field="name"** será emparejado con  **this.data.name** dentro de la clase de componente y se actualizará cada vez que se active un evento de enlace de datos. Lo mismo pasa con **data-field="email"** y así.

##### FormField.executeBindings():

 El método **executeBindings** del componente FormField donde encontraras los valores de atributo **data-field** y emparejaras con ellos los correspondientes archivos **data** en una instancia de componente.

##### Data Binding Event Change:

Dentro del cuerpo de su componente, cuando es un componente **FormField** cada vez que el DOM envía un evento de "cambio", activará el método executeBindings de su componente.

##### Data Binding Event Blur:

Dentro del cuerpo de su componente, cuando es un componente **FormField** cada vez que el DOM envía un evento "Blur", activará el método executeBindings de su componente.

##### Data Binding Event Focus:

Dentro del cuerpo de su componente, cuando es un componente**FormField** cada vez que el DOM envía un evento "Focus", activará el método executeBindings de su componente.
##### Data Binding Event Keydown:

Dentro del cuerpo de su componente, cuando es un componente **FormField** cada vez que el DOM envía un evento "Keydown", activará el método executeBindings de su componente.

#### org.qcobjects.components.ButtonField

**ButtonField** es una subdefinición de **FormField** que es comunmete usando para casi el mismo proposito del FormField.La principal diferencia entre ButtonField y FormField es que ButtonField tiene un elemento DOM ** `` `<button>` `` ** como el cuerpo del componente por defecto. Y FormField no tiene un cuerpo predefinido.

##### Uso:

```html
<component name="name_of_component" componentClass="ButtonField"></component>
```

#### org.qcobjects.components.InputField

**InputField** es una subdefinición de **FormField**, que es comunmete usando para casi el mismo proposito del FormField. La principal diferencia entre InputField y FormField es que InputField tiene un elemento DOM **```<input>```** como el cuerpo del componente por defecto. Y FormField no tiene un cuerpo predefinido.

##### Uso:

```html
<component name="name_of_component" componentClass="InputField"></component>
```


#### org.qcobjects.components.TextField

**ButtonField** es una subdefinición de **FormField**, que es comunmete usando para casi el mismo proposito del FormField. La principal diferencia entre InputField, ButtonField y FormField es que ButtonField tiene un elemento DOM **```<textarea>```** como el cuerpo del componente por defecto. Y FormField no tiene un cuerpo predefinido.

##### Uso:

```html
<component name="name_of_component" componentClass="TextField"></component>
```


#### org.qcobjects.components.EmailField

**EmailField** es una subdefinición de **FormField**, que es comunmete usando para casi el mismo proposito del FormField. La principal diferencia entre ButtonField y FormField es que ButtonField tiene un elemento DOM **```<input>```** como el cuerpo del componente por defecto. Y FormField no tiene un cuerpo predefinido.

##### Uso:

```html
<component name="name_of_component" componentClass="EmailField"></component>
```

#### org.qcobjects.components.GridComponent

GridComponent tiene un nombre predefinido asignado al valor "grid", así que tenlo en cuenta cuando uses esta clase de componente. Tambien  GridComponent está diseñado para usarse junto con GridController para expandir su comportamiento a una cuadrícula CSS.

##### Uso:

```html
<component componentClass="GridComponent" ...></component>
```

##### Ejemplo:

```html
<component rows="2" cols="2" componentClass="GridComponent" controllerClass="GridController">
  <!-- It is recommended to use subcomponents as the Grid elements-->
	<component name="name_of_subcomponent1"></component>
	<component name="name_of_subcomponent2"></component>
	<component name="name_of_subcomponent3"></component>
	<component name="name_of_subcomponent4"></component>
</controller>
```

El ejemplo anterior dibujará una cuadrícula css de dos columnas y dos filas y colocará los subcomponentes en ella.

No olvides este archivo:
```html
<!-- file: grid.tpl.html, you can use the grid template either to draw the grid itself or to draw a loading information -->
<p>Loading grid...</p>
```

#### org.qcobjects.components.ModalEnclosureComponent

#### org.qcobjects.components.ModalComponent

#### org.qcobjects.components.SwaggerUIComponent

Se usa para inyectar un DOM swagger-ui necesario para la Swagger UI API. Obtenga más información en este artículo de QCObjects DevBlog llamado [Working with Swagger UI as a QCObjects Component](https://devblog.qcobjects.org/working-with-swagger-ui-as-a-qcobjects-component-ck6xzoqkg05indfs1i4rxq72e)

##### Uso:
```html
<component componentClass="SwaggerUIComponent" controllerClass="SwaggerUIController" ></component>
```

#### org.qcobjects.components.splashscreen.VideoSplashScreenComponent

Una potente definición de componente que le permite crear una impresionante pantalla de bienvenida de video para su aplicación web progresiva.

##### Ejemplo:
```html
<!-- Add the splash screen component tag as the first component in your HTML document -->
<component componentClass="VideoSplashScreenComponent"
	data-background="./img/splash/splashscreen-aqua.png"
	data-video_mp4="./img/splash/splashscreen-aqua.mp4"
	data-video_webm="./img/splash/splashscreen-aqua.webm"
	data-video_ogg="./img/splash/splashscreen-aqua.ogv" duration="5000">
	<img slot="logo" alt="logo" src="./img/logo-qcobjects-white.svg"></div>
</component>
<!-- Then you can put your main component as always -->
<component name="main" cached=true controllerClass="MainController">
</component>
```
