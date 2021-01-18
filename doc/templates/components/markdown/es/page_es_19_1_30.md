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
