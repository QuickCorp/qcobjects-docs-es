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
