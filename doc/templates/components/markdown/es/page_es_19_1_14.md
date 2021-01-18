### waitUntil

WaitUntil es un ayudante solo en caso de que estés en problemas tratando de correr el código antes de que la condición sea real. El código dentro del waitUntil sera ejecutado una vez.

NOTA: Esto es útil en algunos casos pero no es recomendado para uso excesivo.

#### Uso:

```javascript
waitUntil(()=>{
  // the code that will be executed after the condition is true
},()=>{return condition;});
// where condition is what I want to wait for
```

#### Ejemplo:

```javascript
let someVar = 0;
waitUntil(()=>{
  console.log('someVar is present');
},()=>{return typeof someVar != 'undefined';});
// where condition is what I want to wait for
```

