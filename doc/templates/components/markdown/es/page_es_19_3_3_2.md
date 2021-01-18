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
