### Package

Define el paquete de QCObjects y regrésalo.

#### Uso:

```javascript
Package('packageName',[packageContent]);
```
Donde packageContent es una gama de clases de QCObjects. Si solo pasas el packageName param conseguirás el contenido declarado anteriormente.


#### Ejemplo (1):

```javascript
'use strict';
Package('org.qcobjects.main',[
  Class('Main',InheritClass,{
    propertyName1:'propertyValue1',
  }),
  Class('MyCustomClass',InheritClass,{
    propertyName2:'propertyValue2',
  }),
]);
```

#### Ejemplo (2):

```javascript
let mainPackage = Package('org.qcobjects.main'); // this will return the previously declared content of package 'org.qcobjects.main'
// mainPackage[0] will be the Main class definition.
// This is useful for code introspection
```

La técnica de carga de paquetes presente en QCObjects esta basada en una promesa y orientada al alcance. Puedes preguntar si un paquete fue cargado simplemente llamando la función Packege() pasando el nombre del paquete a un argumento.

