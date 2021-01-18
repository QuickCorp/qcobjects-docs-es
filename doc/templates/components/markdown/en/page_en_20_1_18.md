# Cast

Use the Cast method of any DOM element to get the properties of another type of object. This is useful to transform an object type to another giving more flexibility in your code.

#### Usage:

```javascript
let resultObject = [element or QCObjects type].Cast(objectToCastFrom);
```

Where objectToCastFrom is an object to get the properties from and put it into the result object returned by Cast.

#### Example:

```javascript
Class('MyOwnClass',{
  prop1:'1',
  prop2:2
});

let obj = document.createElement('div').Cast(MyOwnClass);
```

The above code will create a DOM object and Cast it to MyOwnClass. Because of MyOwnClass is a QCObjects type class, obj will now have a prop1 and prop2 properties, and will now be a QCObjects object instance with a body property that is a div element.
