# QCObjects

If you want to validate if an object is a common type of QCObjects Object or a QCObjects Class, you can use the **isQCObjects_Object()** and **isQCObjects_Class()** functions respectively

```javascript
Class("MyOwnClass",{
  prop1: "some value",
  prop2: "some value"
})

isQCObjects_Class(MyOwnClass)
// returns true

isQCObjects_Object(MyOwnClass)
// returns false, because NyOwnClass is an object, but it is representing a QCObjects Class Definition
```

```javascript
let myobj = New(MyOwnClass, {
  prop1: "some initial value",
  prop2: "some initial value"
})

isQCObjects_Object(myobj)
// returns true because myobj is an instance of MyOwnClass

isQCObjects_Class(MyOwnClass)
// returns false because it is not a QCObjects Class Definition
```
