### Export

Pon un símbolo(barra o función) en el alcance global.

#### Uso:

```javascript
Export('name of symbol');
```

#### Ejemplo:

```javascript
(()=>{
  // this is local scope
  let someFunction = (someLocalParam)=>{
    console.log(someLocalParam);
  };
  Export(someFunction); // now, someFunction is in the top level scope.
})();


// this is the top level scope
someFunction('this works');
```
