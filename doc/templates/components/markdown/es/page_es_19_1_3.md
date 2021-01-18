### asyncLoad

La función **asyncLoad** carga el código una vez en el modo asyc. Esto es útil para asegurar que el proceso inicial no replica la ejecución y no es recargado después de un código sensible.

#### Uso:
```javascript
asyncLoad(()=>{
  // my code here
},args);
// Where args is an array of arguments, it can be the "arguments" special object
```

#### Ejemplo:
```javascript

let doSomething = (arg1,arg2)=>{
  asyncLoad((arg1,arg2)=>{
    console.log(arg1);
    console.log(arg2);
  },arguments);
};

doSomething(1,2); // the code of doSomething will be executed once after the rest of asyncLoad queue of functions and before the execution of Ready event.

```
