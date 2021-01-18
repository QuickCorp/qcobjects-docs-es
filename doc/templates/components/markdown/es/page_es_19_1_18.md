### Cast

Usa el método Cast de cualquier elemento DOM para obtener las propiedades de otro tipo de objeto. Esto es útil para trasformar un tipo objeto a otro otorgándole mas flexibilidad a tu código.

#### Uso:

```javascript
let resultObject = [element or QCObjects type].Cast(objectToCastFrom);
```

Donde objectToCastFrom es un objeto para obtener propiedades desde y poner el objeto resultante regresado por el cast.

#### Ejemplo:

```javascript
Class('MyOwnClass',{
  prop1:'1',
  prop2:2
});

let obj = document.createElement('div').Cast(MyOwnClass);
```

El código anterior creara un objeto DOM y lo emitirá a MyOwnClass. Gracias a que MyOwnClass es un tipo clase de QCObject el objeto ahora tendrá propiedades prop1 y prop2 y ahora sera una instancia de objeto QCObject con una propiedad del cuerpo que es un elemento div.
