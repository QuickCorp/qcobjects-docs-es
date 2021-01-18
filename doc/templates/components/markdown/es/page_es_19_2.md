## SDK

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

### SDK Controllers

#### org.qcobjects.controllers.GridController

**GridController** está destinado a ser utilizado junto con **GridComponent** para permitir crear una cuadricula CSS para colocar los subcompnentes. Más información [org.qcobjects.components.GridComponent](#org.qcobjects.components.GridComponent)

#### org.qcobjects.controllers.DataGridController

**DataGridController** tomará los datos de su componente y asignará un conjunto de subcomponentes para completarlo.
Esto se usa comúnmente para renderizar una lista dinámica de componentes. Es usando un valor de atributo **subcomponentClass** en la etiqueta **component** para determinar que definición de componente usar para construir y renderizar cada subcomponente. Los datos en cada subcomponente seran completados con el valor de un elemento mapeado a un subcomponente.


##### Uso:

```html
<component name="name_of_component" controllerClass="DataGridController" subcomponentClass="SubComponentClass">
</component>
```

##### Ejemplo:

Supón que tienes que representar una lista de perfiles. Cada perfil tiene una foto de perfil, un nombre y un correo electrónico.
Deseas usar una tarjeta(card) para representar cada perfil de la lista.

Así que defines un CardComponent para renderizar la foto, el nombre y el email en un elemento en la lista.

```javascript
Class("CardComponent",Component,{
	name:"card", // this will point to templates/components/card.tpl.html
	data:{ // the value of this object will be overriden by DataGridController
		name:"<name of contact>",
		email:"email@example.com",
		profilePicture:"img/photo.png"
	}
})
```

```html
<!-- template: card.tpl.html -->
<img src="{{profilePicture}}"/>
<h3>{{name}}</h3>
<p>{{email}}</p>
```

Luego, debes colocar un componente para generar la lista de tarjetas(cards).

```html
<component name="loading_list" componentClass="MyListComponent" controllerClass="DataGridController"
subcomponentClass="CardComponent">
</component>
```

```html
<!-- template: loading_list.tpl.html -->
<p>Loading list...</p>
```

Por último, debes  definir MyListComponent para asignar los datos dinámicos de la lista.

```javascript
Class("MyListComponent",Component,{
	data:[
		{ // the value of this object will be mapped to a subcomponent by DataGridController
			name:"<name of contact>",
			email:"email@example.com",
			profilePicture:"img/photo.png"
		},
		{ // the value of this object will be mapped to a subcomponent by DataGridController
			name:"<name of contact>",
			email:"email@example.com",
			profilePicture:"img/photo.png"
		},
		{ // the value of this object will be mapped to a subcomponent by DataGridController
			name:"<name of contact>",
			email:"email@example.com",
			profilePicture:"img/photo.png"
		}
	]
})
```

El componente resultante sera una lista de **CardComponent** con los datos de cada perfil dentro de ellos mediante **DataGridController**.

#### org.qcobjects.controllers.ModalController

#### org.qcobjects.controllers.FormValidations

**FormValidations** se utiliza para manejar validaciones predeterminadas para **FormController**

#### Uso:

```html
FormValidations.getDefault(validationName)
```

Donde **validationName** es el nombre de la validación presente en la propiedad **validations** del **FormController**

#### org.qcobjects.controllers.FormController

La definición FormController esta destinado a ayudarte a manejar formas dinámicas. Mediante el uso de la sintaxis normalizada de la definición FormController, no tienes que codificar la complejidad de la lógica de un formulario de envío, ya que se atomiza aquí en tres pasos.

- Asigna una serviceClass
- define los formSettings
- Asignar código qr las validaciones de campo

##### [FormController].serviceClass

Es el nombre de cadena de la definición de clase. FormController cargará esta clase usando la función auxiliar ClassFactory, por lo que el nombre puede ser un nombre completo del paquete más una definición.

##### [FormController].formSettings

Es un objeto con las propiedades especiales del formulario. La configuración predeterminada es: backRouting:'#', loadingRouting:'#loading', nextRouting:'#signupsuccessful'. Estas configuraciones están destinadas a manejar el comportamiento de flujo del formulario.

**loadingRouting** es el nombre de la ruta que se activará mientras **serviceClass** comience a llamar hasta ue el servicio de recarga regrese la respuesta.

**backRouting** es el nombre del enrutamiento que se activará si falla la llamada a **serviceClass**.

**nextRouting** es el nombre del enrutamiento que se activará cuando la llamada para **serviceClass** finalice bien.

##### [FormController].validations

Es un objeto con las funciones de ayuda que quieres para definir validando cada campo de formulario. Cuando defines una función de validación para un campo, FormController te preguntara si la ejecución de esa función regresa verdadera antes de enviar el formulario.

Para definir validaciones para los campos del formulario, solo necesitas agregarlas como parte de la propiedad de validaciones.

##### Uso:

```javascript
	// Let's say you have a form field called "name"
	validations: {
		name (){
			return (fieldName, dataValue, element)=> {
				return [true ... or false condition];
			}
		}, //... add a validation for every form field that you want to be validated
	}
```

Tambien puede usar **FormValidations.getDefault** por simplicidad.

```javascript
	// Let's say you have a form field called "name"
	validations: {
		name (){
			return FormValidations.getDefault('name')
		}, //... add a validation for every form field that you want to be validated
	}
```



##### [FormController].formSaveTouchHandler

Este metodo esta internamente usado mediante FormController para llamar al  serviceClass como una acción de envío.
Se vinculará a cualquier evento de clic o toque de cualquier elemento dentro del formulario que tenga asignada una clase CSS ".submit".

Ejemplo:

```html
<button class="submit"><p>Send</p></button>
```

Cuando el clic o el toque del anterior botón se active, FormController llamara al servicio definido en **serviceClass**, esta acción se hará por **formSaveTouchHandler**. Si desea cambiar este comportamiento, simplemente anule este método en su controlador personalizado.

##### A complete example of FormController

A continuación se muestra un ejemplo completo de una definición para un Formulario de registro utilizando FormController.

```javascript
// First, define a service class that will be called on submit.
Class('SignupClientService',JSONService,{
	name:'signup',
	external:true,
	cached:false,
	method:'POST',
	url:Service.basePath+'createaccount',
	withCredentials:false,
	_new_:()=>{
		// service instantiated
	},
	done:(successfulResponse)=>{
		// service loaded
			_super_('JSONService','done').call(successfulResponse.service,successfulResponse);
			console.log(successfulResponse.service.JSONresponse);
	}
})
```

```javascript
// To safe extend FormController, we extend first from Controller, then
// we use a defaultController to instance a new FormController
Class('SignupFormController',Controller,{
	serviceClass: 'SignupClientService',
	formSettings:{ /* routings that will be triggered once the serviceClass is called*/
		backRouting:'#',
		loadingRouting:'#loading',
		nextRouting:'#signupsuccessful'
	},
	validations: { /* validation definitions for every field in the form to be validated before submit */
		name (){
			return FormValidations.getDefault('name')
		},
		email (){
			return FormValidations.getDefault('email')
		},
		comment (){
			return function (fieldName, dataValue, element){
				return (dataValue !== '')?(true):(false);
			}
		}
	},
	defaulController:null,
	_new_:function (o){
		o.serviceClass = this.serviceClass;
		o.formSettings = this.formSettings;
		o.validations = this.validations;
		// here we instance a defaultController with a New FormController
		// passing the o object declaration coming from the components stack building process.
		this.defaulController = New(FormController,o);
	},
	done: function (){
		// we define a custom done callback function to inject a custom behavior as well as calling the defaultController behavior
		logger.debugEnabled=true;
		var controller = this.defaulController;
		try {
			controller.done.call(controller);
		}catch (e){
			logger.debug('Unable to execute default behavior');
		}
	}
})
```

```html
<!-- A Shadowed Component to render the signup forms -->
<!-- template: signup-form.tpl.html -->

<form action="#" style="border:1px solid #ccc;border-radius:20px">
	<div class="container">
		<slot name="title">
			<h1>Signup Form</h1>
		</slot>
		<slot name="subtitle">
			<p>Please fill up this form to ask for a quote.</p>
		</slot>
		<hr />
		<slot id="field_control" name="field-control">
		</slot>
		<hr />
		<slot name="submit_button"></slot>
	</div>
</form>
```

```html
<!-- A signup form using the shadowed component signup-form -->
<!-- template: signup.tpl.html -->
<component name="signup-form" shadowed="true" controllerClass="SignupFormController">
  <h1 slot="title">Signup Form</h1>
  <p slot="subtitle">Please fill up this form to ask for a quote.</p>
  <label slot="field-control" id="name_label" for="name"><b>&#x1F9D1; Full Name</b></label>
  <input slot="field-control" type="text" pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$" title="Please write your full name" placeholder="Full Name" name="name" data-field="name" aria-labelledby="name_label" required>
  <label slot="field-control" id="email_label" for="email"><b>&#x1F4E7; Email</b></label>
  <input slot="field-control" type="email" pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$" title="Please write a right email address" placeholder="Enter Email" name="email" data-field="email" aria-labelledby="email_label" required>
  <label slot="field-control" for="comment" id="comment_label"><b>&#x1F4DD; Comment</b></label>
  <textarea slot="field-control" name="comment" title="Please write a comment" rows="10" cols="100" data-field="comment" aria-labelledby="comment_label"></textarea>
  <p slot="field-control">By submitting this form you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>
	<div class="clearfix">
	    <button aria-label="Cancel" onclick="location.href='/#'" role="button" tabindex="-1" type="button" class="cancelbtn"><p>Cancel</p></button>
	    <button  aria-label="Send" role="button" tabindex="-1" type="button" class="signupbtn submit"><p>Send</p></button>
	</div>
</component>
```

#### org.qcobjects.controllers.SwaggerUIController

Es usado para inyectar un swagger-ui DOM necesario para el Swagger UI API. Aprende mas en este articulo de QCObjects DevBlog llamado [Working with Swagger UI as a QCObjects Component](https://devblog.qcobjects.org/working-with-swagger-ui-as-a-qcobjects-component-ck6xzoqkg05indfs1i4rxq72e)

##### Uso:
```html
<component componentClass="SwaggerUIComponent" controllerClass="SwaggerUIController" ></component>
```


### SDK Effects

QCObjects tiene una definicion  **Effect**  para manejar y producir nuevos efectos y transiciones para los componentes. A continuación hay algunas definiciones de efectos personalizadas que te ayudaran a construir sorprendentes características visuales para tus componentes. Para mejorar el rendimiento, los efectos están cambiando CSS internamente para aplicar el efecto de manera inteligente. Y todo el motor de efectos se basa en la definición **requestAnimationFrame**, lee mas sobre esto [aquí](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#animation-frames)

#### org.qcobjects.tools.effects.Move

Mueve el objeto DOM de una posicion a otra.

##### Uso:

```javascript
Move.apply(element, xfrom, yfrom, xto, yto)
```

##### Ejemplo:

```javascript
// The next line will move all the images from (0,0) to (10,10)
Tag('img').map(img => Move.apply(img,0,0,10,10))
```

#### org.qcobjects.tools.effects.MoveXInFromRight

Mueve un elemento desde el lado derecho en el eje X a la posición original del objeto.

##### Uso:

```javascript
MoveXInFromRight.apply(element)
```

##### Ejemplo:

```javascript
// the next line will move every canvas on the document from right side to its original position
Tag('canvas').map(canvas => MoveXInFromRight.apply(canvas));
```

#### org.qcobjects.tools.effects.MoveXInFromLeft

Mueve un elemento desde el lado izquierdo en el eje X a la posición original del objeto.

##### Uso:

```javascript
MoveXInFromLeft.apply(element)
```

##### Ejemplo:

```javascript
// the next line will move every canvas on the document from left side to its original position
Tag('canvas').map(canvas => MoveXInFromLeft.apply(canvas));
```

#### org.qcobjects.tools.effects.MoveYInFromBottom

Mueve un objeto del DOM desde abajo a su posición original usando el eje Y.

##### Uso:
```javascript
MoveYInFromBottom.apply(element)
```

##### Ejemplo:
```javascript
// the next line will move the body of every component named "comp1" from bottom to its original position
Tag('component[name=comp1]').map(componentBody => MoveYInFromBottom.apply(componentBody));
```

#### org.qcobjects.tools.effects.MoveYInFromTop

Mueve un objeto del DOM de arriba a su posición original usando el eje Y.

##### Uso:
```javascript
MoveYInFromTop.apply(element)
```

##### Ejemplo:
```javascript
// the next line will move the body of every component named "comp1" from top to its original position
Tag('component[name=comp1]').map(componentBody => MoveYInFromTop.apply(componentBody));
```

#### org.qcobjects.tools.effects.RotateX

Rota un objeto en el eje X.

##### Uso:
```javascript
RotateX.apply(element, angleFrom, angleTo)
```

**angleFrom** y **angleTo** representan un valor de ángulo expresado en grados, comenzando desde 0 (cero) a 360.

##### Ejemplo:
```javascript
// the next line will rotate in X axis the div called #id from 180 degrees to 240 degrees
Tag('div#id').map(div => RotateX.apply(div, 180, 240));
```


#### org.qcobjects.tools.effects.RotateY

Rota un objeto en el eje Y.

##### Uso:
```javascript
RotateY.apply(element, angleFrom, angleTo)
```

**angleFrom** y **angleTo** representan un valor de ángulo expresado en grados, comenzando desde 0 (cero) a 360.

##### Ejemplo:
```javascript
// the next line will rotate in Y axis the div called #id from 0 degrees to 270 degrees
Tag('div#id').map(div => RotateY.apply(div, 0, 270));
```

#### org.qcobjects.tools.effects.RotateZ

Rota un objeto en el eje Z.

##### Uso:
```javascript
RotateZ.apply(element, angleFrom, angleTo)
```

**angleFrom** y **angleTo** representan un valor de ángulo expresado en grados, comenzando desde 0 (cero) a 360.

##### Ejemplo:
```javascript
// the next line will rotate in Z axis the div called #id from 0 degrees to 60 degrees
Tag('div#id').map(div => RotateZ.apply(div, 0, 60));
```



#### org.qcobjects.tools.effects.Rotate

Rota un objeto en los ejes X, Y, Z. Todos los ejes rotarán en paralelo al mismo tiempo produciendo una percepción de efectos visuales en 3D.

##### Uso:
```javascript
Rotate.apply(element, angleFrom, angleTo)
```

**angleFrom** y **angleTo** representan un valor de ángulo expresado en grados, comenzando desde 0 (cero) a 360.

##### Ejemplo:
```javascript
// the next line will rotate in X, Y and Z axes the div called #id form 0 to 270 degrees
Tag('div#id').map(div => Rotate.apply(div, 0, 270));
```

#### org.qcobjects.tools.effects.Fade

Produce un efecto de desvanecimiento al reducir la opacidad del elemento.

##### Uso:

```javascript
Fade.apply(element, alphaFrom, alphaTo)
```

**alphaFrom** y **alphaTo** son numeros entre 0 (cero) y 1.

```javascript
// the following line will fade a <b class="header"> element from 0.5 (mid visibility) to 1 (full visibility)
Tag('b.header').map(header=>Fade.apply(header, 0.5, 1))
```

#### org.qcobjects.tools.effects.Radius

Redondea la esquina de un elemento.

##### Uso:
```javascript
Radius.apply(element, radiusFrom, radiusTo)
```

**radiusFrom** y **radiusTo** son valores numéricos.

##### Ejemplo:
```javascript
// the next line will round the corners of every image in the document
Tag('img').map(element => Radius.apply(element, 0, 100))
```

#### org.qcobjects.tools.effects.Resize

##### Uso:
```javascript
Resize.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** y **scaleTo** son valores numericos
Un valor de 1 es tamaño normal, un valor de 2 es tamaño doble, un valor entre 0 y 1 es una escala pequeña.

##### Ejemplo:

```javascript
// the next line will make a zoom-out effect on every image in the document
Tag('img').map(element => Resize.apply(element, 2,0))

// the next line will make a zoom-in effect on every image in the document
Tag('img').map(element => Resize.apply(element, 0,1))

// the next line will make a zoom-in-out effect on every image in the document
Tag('img').map(element => Resize.apply(element, 2,1))
```

#### org.qcobjects.tools.effects.WipeLeft

Hace un efecto de limpieza desde el lado izquierdo al origen del elemento.

##### Uso:
```javascript
WipeLeft.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** y **scaleTo** son valores numericos.
Un valor de 1 es tamaño normal, un valor de 2 es tamaño doble, un valor entre 0 y 1 es una escala pequeña.

##### Ejemplo

```javascript
Tag('img').map(element => WipeLeft.apply(element,0,1))
```

#### org.qcobjects.tools.effects.WipeRight
Hace un efecto de limpieza desde el lado derecho hasta el origen del elemento.

##### Uso:
```javascript
WipeRight.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** y **scaleTo** son valores numericos
Un valor de 1 es tamaño normal, un valor de 2 es tamaño doble, un valor entre 0 y 1 es una escala pequeña.

##### Ejemplo

```javascript
Tag('img').map(element => WipeRight.apply(element,0,1))
```


#### org.qcobjects.tools.effects.WipeUp

Realiza un efecto de limpieza de abajo hacia arriba en el origen del elemento.

##### Uso:
```javascript
WipeUp.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** y **scaleTo** son valores numericos.
Un valor de 1 es tamaño normal, un valor de 2 es tamaño doble, un valor entre 0 y 1 es una escala pequeña.
##### Ejemplo

```javascript
Tag('img').map(element => WipeUp.apply(element,0,1))
```

#### org.qcobjects.tools.effects.WipeDown

Realiza un efecto de limpieza de arriba a abajo en el origen del elemento.

##### Uso:
```javascript
WipeDown.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** y **scaleTo** son valores numéricos.
Un valor de 1 es tamaño normal, un valor de 2 es tamaño doble, un valor entre 0 y 1 es una escala pequeña.

##### Ejemplo

```javascript
Tag('img').map(element => WipeDown.apply(element,0,1))
```


### SDK Misc Tools

#### org.qcobjects.tools.canvas.CanvasTool

#### org.qcobjects.tools.layouts.BasicLayout

### SDK Views

A continuación hay un conjunto de vistas predefinidas para uso común.

#### org.qcobjects.views.GridView

Una definion generica GridView para usar con cuadriculas.

### SDK i18n messages

El motor QCObjects i18n le permite definir mensajes personalizados. Obtenga más información en este artículo en el DevBlog llamado [i18n Internationalisation for your Progressive Web Apps](https://devblog.qcobjects.org/i18n-internationalisation-for-your-progressive-web-apps-ck90h4qz301ca7vs1ue7joopu)

#### org.qcobjects.i18n_messages.i18n_messages

Utlizado para llamar al motor i18n.

##### Uso:
```javascript
  Class('i18n_messages_<custom lang>', i18n_messages,{
		...
	})
```

##### Ejemplo
```javascript
'use strict';
// file: js/packages/org.qcobjects.i18n_messages.es.js
Package('org.qcobjects.i18n_messages.es', [
  Class('i18n_messages_es', i18n_messages, {
    messages: [
       // ... your custom language dictionary is here
      {
         "en":"This is a paragraph",
         "es":"Esto es un párrafo"
      },
      {
         "en":"Welcome to my new app",
         "es":"Bienvenido a mi nueva app"
      }
    ]
  }),
  {
		// the next line generates an instance of the i18n engine and attaches it automatically in the package
    _i18n_messages_es: New(i18n_messages_es)
  }
]);
```
