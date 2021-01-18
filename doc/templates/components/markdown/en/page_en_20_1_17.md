# Export
Put a symbol (var or function) in the global scope.

#### Usage:

```javascript
Export('name of symbol');
```

#### Example:
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
