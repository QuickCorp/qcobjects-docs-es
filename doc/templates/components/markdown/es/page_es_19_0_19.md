### Tag

Etiquetar es una función útil para seleccionar cualquier elemento DOM usando selectores. Etiquetar siempre regresa a la lista de elementos que puedas mapear, ordenar y filtrar como cualquier otra lista.

#### Uso:

```javascript
var listOfElements = Tag(selector);
```

Donde el selector es un DOM selector de respuestas.

#### Ejemplo:

```html
<!DOCTYPE html>
<html>
    <head>
    	<title>Demo</title>
    	<script type="text/javascript" src="https://qcobjects.dev/QCObjects.js"></script>
    </head>
    <body>
    <div class="myselector">
    <p>Hello world</p>
    </div>
    <script>
    Ready(()=>{
      Tag('.myselector > p').map((element)=>{
        element.innerHTML = 'Hello world! How are you?';
      });
    });
    </script>
    </body>
</html>
```

En el código anterior el elemento párrafo fue creado dentro de un div con una clase css llamada myselector mediante html y luego es modificada dinámicamente usando la función etiqueta de QCObject. Si estas familiarizado con un framework selector query te encantara este.
