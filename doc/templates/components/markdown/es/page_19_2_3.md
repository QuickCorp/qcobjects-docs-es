### SDK Effects

QCObjects tiene una definicion  **Effect**  para manejar y producir nuevos efectos y transiciones para los componentes. A continuación hay algunas definiciones de efectos personalizadas que te ayudaran a construir sorprendentes características visuales para tus componentes. Para mejorar el rendimiento, los efectos están cambiando CSS internamente para aplicar el efecto de manera inteligente. Y todo el motor de efectos se basa en la definición **requestAnimationFrame**, lee mas sobre esto [aquí](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#animation-frames)

#### org.quickcorp.tools.effects.Move

Mueve el objeto DOM de una posicion a otra.

##### Uso:

```javascript
Move.apply(element, xfrom, yfrom, xto, yto)
```

##### Ejemplo:

```javascript
// The next line will move all the images from (0,0) to (10,10)
Tag('img').map(img => Move.apply(img,0,0,10,10))
```

#### org.quickcorp.tools.effects.MoveXInFromRight

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

#### org.quickcorp.tools.effects.MoveYInFromBottom

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

#### org.quickcorp.tools.effects.MoveYInFromTop

Mueve un objeto del DOM de arriba a su posición original usando el eje Y.

##### Uso:
```javascript
MoveYInFromTop.apply(element)
```

##### Ejemplo:
```javascript
// the next line will move the body of every component named "comp1" from top to its original position
Tag('component[name=comp1]').map(componentBody => MoveYInFromTop.apply(componentBody));
```

#### org.quickcorp.tools.effects.RotateX

Rota un objeto en el eje X.

##### Uso:
```javascript
RotateX.apply(element, angleFrom, angleTo)
```

**angleFrom** y **angleTo** representan un valor de ángulo expresado en grados, comenzando desde 0 (cero) a 360.

##### Ejemplo:
```javascript
// the next line will rotate in X axis the div called #id from 180 degrees to 240 degrees
Tag('div#id').map(div => RotateX.apply(div, 180, 240));
```


#### org.quickcorp.tools.effects.RotateY

Rota un objeto en el eje Y.

##### Uso:
```javascript
RotateY.apply(element, angleFrom, angleTo)
```

**angleFrom** y **angleTo** representan un valor de ángulo expresado en grados, comenzando desde 0 (cero) a 360.

##### Ejemplo:
```javascript
// the next line will rotate in Y axis the div called #id from 0 degrees to 270 degrees
Tag('div#id').map(div => RotateY.apply(div, 0, 270));
```

#### org.quickcorp.tools.effects.RotateZ

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



#### org.quickcorp.tools.effects.Rotate

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

#### org.quickcorp.tools.effects.Fade

Produce un efecto de desvanecimiento al reducir la opacidad del elemento.

##### Uso:

```javascript
Fade.apply(element, alphaFrom, alphaTo)
```

**alphaFrom** y **alphaTo** son numeros entre 0 (cero) y 1.

```javascript
// the following line will fade a <b class="header"> element from 0.5 (mid visibility) to 1 (full visibility)
Tag('b.header').map(header=>Fade.apply(header, 0.5, 1))
```

#### org.quickcorp.tools.effects.Radius

Redondea la esquina de un elemento.

##### Uso:
```javascript
Radius.apply(element, radiusFrom, radiusTo)
```

**radiusFrom** y **radiusTo** son valores numéricos.

##### Ejemplo:
```javascript
// the next line will round the corners of every image in the document
Tag('img').map(element => Radius.apply(element, 0, 100))
```

#### org.quickcorp.tools.effects.Resize

##### Uso:
```javascript
Resize.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** y **scaleTo** son valores numericos
Un valor de 1 es tamaño normal, un valor de 2 es tamaño doble, un valor entre 0 y 1 es una escala pequeña.

##### Ejemplo:

```javascript
// the next line will make a zoom-out effect on every image in the document
Tag('img').map(element => Resize.apply(element, 2,0))

// the next line will make a zoom-in effect on every image in the document
Tag('img').map(element => Resize.apply(element, 0,1))

// the next line will make a zoom-in-out effect on every image in the document
Tag('img').map(element => Resize.apply(element, 2,1))
```

#### org.quickcorp.tools.effects.WipeLeft

Hace un efecto de limpieza desde el lado izquierdo al origen del elemento.

##### Uso:
```javascript
WipeLeft.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** y **scaleTo** son valores numericos.
Un valor de 1 es tamaño normal, un valor de 2 es tamaño doble, un valor entre 0 y 1 es una escala pequeña.

##### Ejemplo

```javascript
Tag('img').map(element => WipeLeft.apply(element,0,1))
```

#### org.quickcorp.tools.effects.WipeRight
Hace un efecto de limpieza desde el lado derecho hasta el origen del elemento.

##### Uso:
```javascript
WipeRight.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** y **scaleTo** son valores numericos
Un valor de 1 es tamaño normal, un valor de 2 es tamaño doble, un valor entre 0 y 1 es una escala pequeña.

##### Ejemplo

```javascript
Tag('img').map(element => WipeRight.apply(element,0,1))
```


#### org.quickcorp.tools.effects.WipeUp

Realiza un efecto de limpieza de abajo hacia arriba en el origen del elemento.

##### Uso:
```javascript
WipeUp.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** y **scaleTo** son valores numericos.
Un valor de 1 es tamaño normal, un valor de 2 es tamaño doble, un valor entre 0 y 1 es una escala pequeña.
##### Ejemplo

```javascript
Tag('img').map(element => WipeUp.apply(element,0,1))
```

#### org.quickcorp.tools.effects.WipeDown

Realiza un efecto de limpieza de arriba a abajo en el origen del elemento.

##### Uso:
```javascript
WipeDown.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** y **scaleTo** son valores numéricos.
Un valor de 1 es tamaño normal, un valor de 2 es tamaño doble, un valor entre 0 y 1 es una escala pequeña.

##### Ejemplo

```javascript
Tag('img').map(element => WipeDown.apply(element,0,1))
```

