# SDK Components

#### org.quickcorp.components.ShadowedComponent

**ShadowedComponent** Class is a custom component class designed to allow you to create a component using the Shadow DOM of browsers. Read more about Shadowed Components on [this article on Hackernoon] (https://www.hackernoon.com/shadowed-components-and-qcobjects-kd703yld).

##### Usage:

```html
<component componentClass="ShadowedComponent"></component>
```

#### org.quickcorp.components.FormField

**FormField** is a Class for **QCObjects** custom components that allows you to inject a Form Field generic behavior to your components. It has a reverse data-binding feature to detect the values of the DOM fields inside your form and assign them to the data values of your component. By this way, you don't loose performance making an old-fashioned two-way data binding based on observables. To implement this advanced behavior. You only need to do the following:

1.- Assign a **data-field** attribute to the DOM tag inside the component body, with the corresponding field name in your data object.

2.- To your **component tag**, assign **FormField** in the **componentClass** attribute.

3.- To recover the data of the form inside your component, just use the componentInstance.data object. Every property of the componentInstance.data object will be linked by the binding events with the value properties on every DOM object of the form that has a data-field assigned.

##### Usage:

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

**data-field="name"** will be matched with **this.data.name** inside the component class and will be updated everytime a data binding event is triggered. The same will happen to **data-field="email"** and so on.

##### FormField.executeBindings():

The method **executeBindings** of FormField component will find the **data-field** attribute values and match them with the corresponding **data** fields in the component instance.

##### Data Binding Event Change:

Inside of the body of your component, when it is a **FormField** component, every time the DOM dispatches a "change" event, it will trigger the executeBindings method of your component.

##### Data Binding Event Blur:

Inside of the body of your component, when it is a **FormField** component, every time the DOM dispatches a "Blur" event, it will trigger the executeBindings method of your component.

##### Data Binding Event Focus:

Inside of the body of your component, when it is a **FormField** component, every time the DOM dispatches a "Focus" event, it will trigger the executeBindings method of your component.

##### Data Binding Event Keydown:

Inside of the body of your component, when it is a **FormField** component, every time the DOM dispatches a "Keydown" event, it will trigger the executeBindings method of your component.


#### org.quickcorp.components.ButtonField

**ButtonField** is a sub-definition of **FormField**, that is commonly used for almost the same purpose of FormField. The main difference between ButtonField and FormField is that ButtonField has a **```<button>```** DOM element as the body of the component by default. And FormField hasn't a pre-defined body.

##### Usage:

```html
<component name="name_of_component" componentClass="ButtonField"></component>
```

#### org.quickcorp.components.InputField

**InputField** is a sub-definition of **FormField**, that is commonly used for almost the same purpose of FormField. The main difference between InputField and FormField is that InputField has a **<input>** DOM element as the body of the component by default. And FormField hasn't a pre-defined body.

##### Usage:

```html
<component name="name_of_component" componentClass="InputField"></component>
```


#### org.quickcorp.components.TextField

**ButtonField** is a sub-definition of **FormField**, that is commonly used for almost the same purpose of FormField. The main difference between InputField and FormField is that ButtonField has a **```<textarea>```** DOM element as the body of the component by default. And FormField hasn't a pre-defined body.

##### Usage:

```html
<component name="name_of_component" componentClass="TextField"></component>
```


#### org.quickcorp.components.EmailField

**EmailField** is a sub-definition of **FormField**, that is commonly used for almost the same purpose of FormField. The main difference between ButtonField and FormField is that ButtonField has a **```<input>```** DOM element as the body of the component by default. And FormField hasn't a pre-defined body.

##### Usage:

```html
<component name="name_of_component" componentClass="EmailField"></component>
```

#### org.quickcorp.components.GridComponent

GridComponent has a predefined name assigned to the value "grid", so be aware of it when you use this component class. Also, GridComponent is intended to be used in conjunction with GridController to expand its behavior to a CSS Grid.

##### Usage:

```html
<component componentClass="GridComponent" ...></component>
```

##### Example:

```html
<component rows="2" cols="2" componentClass="GridComponent" controllerClass="GridController">
  <!-- It is recommended to use subcomponents as the Grid elements-->
	<component name="name_of_subcomponent1"></component>
	<component name="name_of_subcomponent2"></component>
	<component name="name_of_subcomponent3"></component>
	<component name="name_of_subcomponent4"></component>
</controller>
```

The above example will draw a css grid of two columns and two rows and place the subcomponents into it.

Don't forget this file:
```html
<!-- file: grid.tpl.html, you can use the grid template either to draw the grid itself or to draw a loading information -->
<p>Loading grid...</p>
```

#### org.quickcorp.components.ModalEnclosureComponent

#### org.quickcorp.components.ModalComponent

#### org.quickcorp.components.SwaggerUIComponent

It is used to inject a swagger-ui DOM needed to the Swagger UI API. Learn more in this article of QCObjects DevBlog called [Working with Swagger UI as a QCObjects Component](https://devblog.qcobjects.org/working-with-swagger-ui-as-a-qcobjects-component-ck6xzoqkg05indfs1i4rxq72e)

##### Usage:
```html
<component componentClass="SwaggerUIComponent" controllerClass="SwaggerUIController" ></component>
```

#### org.quickcorp.components.splashscreen.VideoSplashScreenComponent

A powerful component definition to allow you create an awesome Video Splash Screen for your progressive web app.

##### Example:
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
