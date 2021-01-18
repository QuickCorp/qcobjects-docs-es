# SDK Controllers

#### org.quickcorp.controllers.GridController

**GridController** is intended to be used in conjunction with **GridComponent** to allow you to create a CSS grid to place subcomponents. More info in [org.quickcorp.components.GridComponent](#org.quickcorp.components.GridComponent)

#### org.quickcorp.controllers.DataGridController

**DataGridController** will take the data of your component and map a set of subcomponents to fill it up.
This is commonly used to render a dynamic list of components. It used a **subcomponentClass** attribute value in the **component** tag to determine what component definition to use to build and render every sub-component. The data on every sub-component will be filled up with the value of the element mapped to the sub-component.

##### Usage:

```html
<component name="name_of_component" controllerClass="DataGridController" subcomponentClass="SubComponentClass">
</component>
```

##### Example:

Suppose you have to render a list of profiles. Every profile has a profile picture, a name and an email.
You want to use a card to represent every profile in the list.

So you define a CardComponent to render the picture, the name and email of an element in the list.

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

Then, you have to place a component to generate the list of cards.

```html
<component name="loading_list" componentClass="MyListComponent" controllerClass="DataGridController"
subcomponentClass="CardComponent">
</component>
```

```html
<!-- template: loading_list.tpl.html -->
<p>Loading list...</p>
```

Last, you have to define MyListComponent to assign the dynamic data of the list.

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

The resulting component will be a list of **CardComponent** with the data of every profile mapped into them by **DataGridController**.

#### org.quickcorp.controllers.ModalController

#### org.quickcorp.controllers.FormValidations

**FormValidations** is used to handle default validations for the **FormController**

#### Usage:

```html
FormValidations.getDefault(validationName)
```

Where **validationName** is the name of the validation present in the **validations** property of the **FormController**

#### org.quickcorp.controllers.FormController

The FormController definition is intended to help you to handle dynamic forms. By using the normalised syntax of the FormController definition, you don't have to code the complexity of the logic of a submit form, as it is atomised here in three steps.

- Assign a serviceClass
- Define the formSettings
- Asign or code the field validations

##### [FormController].serviceClass

It is the string name of the Class definition. FormController will load this class using the ClassFactory helper function, so the name can be a complete package name plus definition.

##### [FormController].formSettings

It is an object with the special properties of the form. The default settings are: backRouting:'#', loadingRouting:'#loading', nextRouting:'#signupsuccessful'. These settings are meant to handle the flow behavior of the form.

**loadingRouting** is the name of the routing that will be triggered while the **serviceClass** is beign called until the service loader returns a response.

**backRouting** is the name of the routing that will be triggered if the call for the **serviceClass** fails.

**nextRouting** is the name of the routing that will be triggered when the call for the **serviceClass** finishes OK.

##### [FormController].validations

It is an object with the helper functions that you want to define to validate every form field. When you define a validation function for a field, FormController will ask if the execution of that function returns true before to submit the form.

To define validations for the fields of the form, you just need to add them as a part of the validations property.

##### Usage:

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

You can also use **FormValidations.getDefault** for simplicity.

```javascript
	// Let's say you have a form field called "name"
	validations: {
		name (){
			return FormValidations.getDefault('name')
		}, //... add a validation for every form field that you want to be validated
	}
```



##### [FormController].formSaveTouchHandler

This method is internally used by FormController to call the serviceClass as a submit action.
It will be binded to any click or touch event of any element inside the form that has a CSS ".submit" class assigned.

Example:

```html
<button class="submit"><p>Send</p></button>
```

When the click or touch event of the above button is triggered, FormController will call the service defined in **serviceClass**, this action will be done by **formSaveTouchHandler**. If you like to change this behavior just override this method in your custom controller.

##### A complete example of FormController

Below is a complete example of a definition for a Signup Form using FormController.

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

It is used to inject a swagger-ui DOM needed to the Swagger UI API. Learn more in this article of QCObjects DevBlog called [Working with Swagger UI as a QCObjects Component](https://devblog.qcobjects.org/working-with-swagger-ui-as-a-qcobjects-component-ck6xzoqkg05indfs1i4rxq72e)

##### Usage:
```html
<component componentClass="SwaggerUIComponent" controllerClass="SwaggerUIController" ></component>
```

