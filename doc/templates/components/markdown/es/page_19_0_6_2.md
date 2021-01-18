#### Ejemplo:

```javascript
Class('MySuperiorClass',InheritClass,{
  propertyName1:0, // just to declare purpose
  propertyName2:'',
  classMethod1: function (){
    // some code here
    // note you can use "this" object
    return this.propertyName1;
  },
});

Class('MyClassName',MySuperiorClass,{
  propertyName1:0, // just to declare purpose
  propertyName2:'',
  classMethod2: function () {
    // The next line will execute classMethod1 from MySuperiorClass
    // but using the current instance of MyClassName1
    return _super_('MySuperiorClass','classMethod1').call(this);
  }
});

var newObject = New(MyClassName,{
    propertyName1:1, // this initializes the value in 1
    propertyName2:"some value"
});
console.log(newObject.classMethod2()); // this will show the number 1
```
