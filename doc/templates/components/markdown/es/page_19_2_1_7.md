#### org.quickcorp.components.GridComponent

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
