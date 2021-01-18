#### Uso:

```javascript
var cache = new ComplexStorageCache({
                      index:object.id, // Object Index
                      load:(cacheController)=>{}, // A function to execute for the first time
                      alternate: (cacheController)=>{} // The alternate function to execute from the second time the source coude is loaded
                      });
```
