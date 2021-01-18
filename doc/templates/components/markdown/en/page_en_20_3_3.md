# SDK Effects

QCObjects has an **Effect** definition to handle and produce new effects and transitions for the components.
Below are some custom effect definitions that will help you to build amazing visual features to your components. To improve the performance, effects are changing CSS internally to apply the effect in a smart way. And all the effects engine is based on the **requestAnimationFrame** definition, read more [here](https://html.spec.whatwg.org/multipage/imagebitmap-and-animations.html#animation-frames)

#### org.quickcorp.tools.effects.Move

Moves a DOM object from one position to another.

##### Usage:

```javascript
Move.apply(element, xfrom, yfrom, xto, yto)
```

##### Example:

```javascript
// The next line will move all the images from (0,0) to (10,10)
Tag('img').map(img => Move.apply(img,0,0,10,10))
```

#### org.quickcorp.tools.effects.MoveXInFromRight

Moves an element from the right side in X axis to the original position of the object.

##### Usage:

```javascript
MoveXInFromRight.apply(element)
```

##### Example:

```javascript
// the next line will move every canvas on the document from right side to its original position
Tag('canvas').map(canvas => MoveXInFromRight.apply(canvas));
```

#### org.quickcorp.tools.effects.MoveXInFromLeft

Moves an element from the left side in X axis to the original position of the object.

##### Usage:

```javascript
MoveXInFromLeft.apply(element)
```

##### Example:

```javascript
// the next line will move every canvas on the document from left side to its original position
Tag('canvas').map(canvas => MoveXInFromLeft.apply(canvas));
```

#### org.quickcorp.tools.effects.MoveYInFromBottom

Moves an object of the DOM from bottom to its original position using Y axis.

##### Usage:
```javascript
MoveYInFromBottom.apply(element)
```

##### Example:
```javascript
// the next line will move the body of every component named "comp1" from bottom to its original position
Tag('component[name=comp1]').map(componentBody => MoveYInFromBottom.apply(componentBody));
```

#### org.quickcorp.tools.effects.MoveYInFromTop

Moves an object of the DOM from top to its original position using Y axis.

##### Usage:
```javascript
MoveYInFromTop.apply(element)
```

##### Example:
```javascript
// the next line will move the body of every component named "comp1" from top to its original position
Tag('component[name=comp1]').map(componentBody => MoveYInFromTop.apply(componentBody));
```

#### org.quickcorp.tools.effects.RotateX

Rotates an object in X axis.

##### Usage:
```javascript
RotateX.apply(element, angleFrom, angleTo)
```

**angleFrom** and **angleTo** represent an angle value expressed in degrees, starting from 0 (zero) to 360.

##### Example:
```javascript
// the next line will rotate in X axis the div called #id from 180 degrees to 240 degrees
Tag('div#id').map(div => RotateX.apply(div, 180, 240));
```


#### org.quickcorp.tools.effects.RotateY

Rotates an object in Y axis.

##### Usage:
```javascript
RotateY.apply(element, angleFrom, angleTo)
```

**angleFrom** and **angleTo** represent an angle value expressed in degrees, starting from 0 (zero) to 360.

##### Example:
```javascript
// the next line will rotate in Y axis the div called #id from 0 degrees to 270 degrees
Tag('div#id').map(div => RotateY.apply(div, 0, 270));
```

#### org.quickcorp.tools.effects.RotateZ

Rotates an object in Z axis.

##### Usage:
```javascript
RotateZ.apply(element, angleFrom, angleTo)
```

**angleFrom** and **angleTo** represent an angle value expressed in degrees, starting from 0 (zero) to 360.

##### Example:
```javascript
// the next line will rotate in Z axis the div called #id from 0 degrees to 60 degrees
Tag('div#id').map(div => RotateZ.apply(div, 0, 60));
```



#### org.quickcorp.tools.effects.Rotate

Rotates an object in X, Y, Z axes. All axes will rotate in paralell at the same time producing a 3d visual effect perception.

##### Usage:
```javascript
Rotate.apply(element, angleFrom, angleTo)
```

**angleFrom** and **angleTo** represent an angle value expressed in degrees, starting from 0 (zero) to 360.

##### Example:
```javascript
// the next line will rotate in X, Y and Z axes the div called #id form 0 to 270 degrees
Tag('div#id').map(div => Rotate.apply(div, 0, 270));
```

#### org.quickcorp.tools.effects.Fade

Produces a fade effect by lowering the opacity of the element.

##### Usage:

```javascript
Fade.apply(element, alphaFrom, alphaTo)
```

**alphaFrom** and **alphaTo** are numbers between 0 (zero) and 1.

```javascript
// the following line will fade a <b class="header"> element from 0.5 (mid visibility) to 1 (full visibility)
Tag('b.header').map(header=>Fade.apply(header, 0.5, 1))
```

#### org.quickcorp.tools.effects.Radius

Rounds the corner of an element

##### Usage:
```javascript
Radius.apply(element, radiusFrom, radiusTo)
```

**radiusFrom** and **radiusTo** are numeric values.

##### Example:
```javascript
// the next line will round the corners of every image in the document
Tag('img').map(element => Radius.apply(element, 0, 100))
```

#### org.quickcorp.tools.effects.Resize

##### Usage:
```javascript
Resize.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** and **scaleTo** are numeric values.
A value of 1 is regular size, a value of 2 is double size, a value between 0 and 1 is a small scale.

##### Example:

```javascript
// the next line will make a zoom-out effect on every image in the document
Tag('img').map(element => Resize.apply(element, 2,0))

// the next line will make a zoom-in effect on every image in the document
Tag('img').map(element => Resize.apply(element, 0,1))

// the next line will make a zoom-in-out effect on every image in the document
Tag('img').map(element => Resize.apply(element, 2,1))
```

#### org.quickcorp.tools.effects.WipeLeft

Makes a Wipe effect from Left side to the origin of the element.

##### Usage:
```javascript
WipeLeft.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** and **scaleTo** are numeric values.
A value of 1 is regular size, a value of 2 is double size, a value between 0 and 1 is a small scale.

##### Example

```javascript
Tag('img').map(element => WipeLeft.apply(element,0,1))
```

#### org.quickcorp.tools.effects.WipeRight
Makes a Wipe effect from right side to the origin of the element.

##### Usage:
```javascript
WipeRight.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** and **scaleTo** are numeric values.
A value of 1 is regular size, a value of 2 is double size, a value between 0 and 1 is a small scale.

##### Example

```javascript
Tag('img').map(element => WipeRight.apply(element,0,1))
```


#### org.quickcorp.tools.effects.WipeUp

Makes a Wipe effect from down to up the origin of the element.

##### Usage:
```javascript
WipeUp.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** and **scaleTo** are numeric values.
A value of 1 is regular size, a value of 2 is double size, a value between 0 and 1 is a small scale.

##### Example

```javascript
Tag('img').map(element => WipeUp.apply(element,0,1))
```

#### org.quickcorp.tools.effects.WipeDown

Makes a Wipe effect from up to down the origin of the element.

##### Usage:
```javascript
WipeDown.apply(element, scaleFrom, scaleTo)
```

**scaleFrom** and **scaleTo** are numeric values.
A value of 1 is regular size, a value of 2 is double size, a value between 0 and 1 is a small scale.

##### Example

```javascript
Tag('img').map(element => WipeDown.apply(element,0,1))
```

