#### Ejemplo:

```javascript
var dataObject = {id:1,
                  prop1:1,
                  prop2:2
                };

var cache = new ComplexStorageCache({
    index: dataObject.id,
    load: (cacheController) => {
      dataObject = {
              id:dataObject.id,
              prop1:dataObject.prop1*2, // changing a property value
              prop2:dataObject.prop2
            };
      return dataObject;
    },
    alternate: (cacheController) => {
      dataObject = cacheController.cache.getCached(dataObject.id); // setting dataObject with the cached value
      return;
    }
  });

// Next time you can get the object from the cache
var dataObjectCopyFromCache = cache.getCached(dataObject.id);
console.log(dataObjectCopyFromCache); // will show the very same object value than dataObject
```
