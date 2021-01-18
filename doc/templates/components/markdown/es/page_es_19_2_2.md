### SDK Controllers

#### org.quickcorp.controllers.GridController

**GridController** está destinado a ser utilizado junto con **GridComponent** para permitir crear una cuadricula CSS para colocar los subcompnentes. Más información [org.quickcorp.components.GridComponent](#org.quickcorp.components.GridComponent)

#### org.quickcorp.controllers.DataGridController

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

#### org.quickcorp.controllers.ModalController

#### org.quickcorp.controllers.FormValidations

**FormValidations** se utiliza para manejar validaciones predeterminadas para **FormController**

#### Uso:

```html
FormValidations.getDefault(validationName)
```

Donde **validationName** es el nombre de la validación presente en la propiedad **validations** del **FormController**

#### org.quickcorp.controllers.FormController

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

#### org.quickcorp.controllers.SwaggerUIController

Es usado para inyectar un swagger-ui DOM necesario para el Swagger UI API. Aprende mas en este articulo de QCObjects DevBlog llamado [Working with Swagger UI as a QCObjects Component](https://devblog.qcobjects.org/working-with-swagger-ui-as-a-qcobjects-component-ck6xzoqkg05indfs1i4rxq72e)

##### Uso:
```html
<component componentClass="SwaggerUIComponent" controllerClass="SwaggerUIController" ></component>
```

