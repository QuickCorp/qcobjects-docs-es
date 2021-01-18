#### org.qcobjects.tools.effects.Move

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
