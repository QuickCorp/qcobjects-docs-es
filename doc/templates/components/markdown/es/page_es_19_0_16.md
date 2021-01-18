### Import

Importa un paquete desde otro archivo JS.

#### Uso:

```javascript
Import (packagename,[ready],[external]);
```
Donde el packagename es el nombre del paquete, listo es una función que podrá ser ejecutada después de que el paquete es cargado y el externo es un valor bolean que indica si el archivo JS esta en el mismo origen o esta desde otro recurso externo.

#### Ejemplo (1):

```javascript
Import('org.quickcorp.main');
```
El código anterior intentara importar un archivo JS llamado 'org.quickcorp.main.js' desde un camino especifico en el valor de ajuste  **relativeImportPath** presente en tu **CONFIG**. Dentro del archivo tienes que definir el paquete mediante el uso del paquete ('org.quickcorp.main',[Class1, Class2...])

#### Ejemplo (2):

```javascript
Import('org.quickcorp.main',function (){
  console.log('remote import is loaded');
},true);
```

El código anterior esta vez esta tratando de cargar en el mismo paquete usando el camino externo mediante el **remoteImportsPath** ajustes presentes en tu **CONFIG**

NOTA: En los dos ejemplos anteriores no necesitas usar o especificar la extensión ".js". Esto esta usado por defecto y no puede ser cambiado por razones de seguridad.
