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
