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
