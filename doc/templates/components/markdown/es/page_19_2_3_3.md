#### org.quickcorp.tools.effects.MoveXInFromLeft

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
