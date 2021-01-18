### GLOBAL

**GLOBAL** es una clase especial de QCObject para conseguir alancé global. Tiene un conjunto y consigue un método que te ayude a manejar propiedades internas Globales.

#### Ejemplo:

```javascript
GLOBAL.set('globalProperty1','some value in global scope');
var globalProperty1 = GLOBAL.get('globalProperty1');
```
