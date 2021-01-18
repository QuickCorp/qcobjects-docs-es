### New

Crea una instancia de objeto de una definición de clase de QCObject.

#### Uso:

```javascript
let objectInstance = New(QCObjectsClassName, properties);
// where properties is a single object with the property values
```
NOTA: En las propiedades del objeto puedes usar un solo valor o un captador también pero, solo se ejecutaran una vez.

#### Ejemplo:

```javascript
Class('MyCustomClass',Object);
let objectInstance = New(MyCustomClass,{
  prop1:1,
  get randomNumber(){ // this getter will be executed once
    return Math.random();
  }
});

console.log(objectInstance.randomNumber); // it will show console.log(objectInstance.prop1); // it will show number 1
```
