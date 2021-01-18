#### org.qcobjects.tools.effects.RotateZ

Rota un objeto en el eje Z.

##### Uso:
```javascript
RotateZ.apply(element, angleFrom, angleTo)
```

**angleFrom** y **angleTo** representan un valor de ángulo expresado en grados, comenzando desde 0 (cero) a 360.

##### Ejemplo:
```javascript
// the next line will rotate in Z axis the div called #id from 0 degrees to 60 degrees
Tag('div#id').map(div => RotateZ.apply(div, 0, 60));
```


