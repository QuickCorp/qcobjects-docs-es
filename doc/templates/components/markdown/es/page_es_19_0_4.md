### Class

Esto NO es una clase de definición de ECMAScript 2015 (mira [clase ECMAScript 2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) for reference).

Clase es una función especias que te ayuda a declarar la clase de una manera mas fácil y compatible. Funciona con cross-browser, y esperamos que ECMA pueda adoptar algo similar en el futuro. Para no dejar al Javascript confuso sobre esto, [QCObjects](https://qcobjects.dev) usa "Class" no "class" (note the Camel Case).

#### Uso:

```javascript
Class('MyClassName',MyClassDefinition);
```

Donde **MyClassDefinition** es un objeto junto a el **prototype** de QCObjects

#### Ejemplo:

```javascript
Class('MyClassName',InheritClass,{
  propertyName1:0, // just to declare purpose
  propertyName2:'',
  classMethod1: function (){
    // some code here
    // note you can use "this" object
    return this.propertyName1;
  },
  classMethod2: function () {
    // some code here
    return this.propertyName2;
  }
});

var newObject = New(MyClassName,{
    propertyName1:1, // this initializes the value in 1
    propertyName2:"some value"
});
console.log(newObject.classMethod1()); // this will show number 1
console.log(newObject.classMethod2()); // this will show "some value"
```

