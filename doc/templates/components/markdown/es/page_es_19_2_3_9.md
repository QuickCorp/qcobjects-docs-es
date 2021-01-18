#### org.qcobjects.tools.effects.Rotate

Rota un objeto en los ejes X, Y, Z. Todos los ejes rotarán en paralelo al mismo tiempo produciendo una percepción de efectos visuales en 3D.

##### Uso:
```javascript
Rotate.apply(element, angleFrom, angleTo)
```

**angleFrom** y **angleTo** representan un valor de ángulo expresado en grados, comenzando desde 0 (cero) a 360.

##### Ejemplo:
```javascript
// the next line will rotate in X, Y and Z axes the div called #id form 0 to 270 degrees
Tag('div#id').map(div => Rotate.apply(div, 0, 270));
```
