### ClassFactory

Usa la **ClassFactory** para tener una declaración de clase de fabrica para la clase,
también puedes usar la clase de fabrica desde un paquete o desde la fila apilada.

Para recuperar la clase de fabrica de la clase fila apilada simplemente usa el nombre de la clase llamándola directamente en el código.

#### Ejemplo:

```javascript
/* When you declare MyClass using Class() it is instantly added to the Class queue stack
* and you can get the factory either using ClassFactory() or calling the name MyClass straight in the code
*/
Class('MyClass',{
	a:1
})
console.log(MyClass == ClassFactory('MyClass')) // it will show true
```

```javascript
/* On the other hand, ClassFactory() will be so useful when you define a Class into a Package
*/
Package('org.qcobjects.package1',[
	Class('MyClass',{
		a:1
	})
])
console.log(MyClass == ClassFactory('MyClass')) // it will still show true
// The following line will show true as well
console.log(MyClass == ClassFactory('org.qcobjects.package1.MyClass'))
```

```javascript
/* The interesting thing is when you have declared more than one Class using the
* same name MyClass into different packages but with different property default values
* and even properties
*/
Package('org.qcobjects.package1',[
	Class('MyClass',{
		a:1
	})
])
Package('org.qcobjects.package2',[
	Class('MyClass',{
		a:2,
		b:1
	})
])
// The last declaration of MyClass will be the one survival in the Class queue
// so the reference MyClass in the code will point to that one
console.log(MyClass == ClassFactory('MyClass')) // it will still show true

// In this case as the MyClass defined in the org.qcobjects.package1 will not be the same
// as the one in the org.qcobjects.package2, but the MyClass in the package2 is the last one
// The following line will show false
console.log(MyClass == ClassFactory('org.qcobjects.package1.MyClass'))

// The following line will show true
console.log(MyClass == ClassFactory('org.qcobjects.package2.MyClass'))

// The following line will show false
console.log(ClassFactory('org.qcobjects.package1.MyClass') == ClassFactory('org.qcobjects.package2.MyClass'))
```

Los ejemplos anteriores están intencionalmente hechos para explicar y mostrar como el alcance de la definición de clase en QCObjects es protejida, llevada y reflejada en una ClassFactory.

Así que vas a querer usar la ClassFactory cuando necesites completar un control sobre el alcance cuando se extienden las Clases.

**Ejemplo**

```javascript
// When normally you extend a Class using the Class queue you do:
Class('MyExtendedClass',MyInheritClass,{
	extendedProp1: 'value of prop',
	extendedProp2: 2
})

```

```javascript
/* But to protect the scope from misleading by reference, you can asure that MyInheritClass
is the one you want to extend by declaring it into a package and then extend it
*/
Package('org.qcobjects.mypackage1',[
	Class('MyInheritClass',{
		sourceProp:1
	}),
])

// The following code is a definition of MyExtendedClass into a different package
// org.qcobjects.package2
// extending MyInheritClass using ClassFactory to retreive the Class from the source package
// org.qcobjects.mypackage1
Package('org.qcobjects.mypackage2',[
	Class('MyExtendedClass',ClassFactory('org.qcobjects.mypackage1.MyInheritClass'),{
		extendedProp1: 'value of prop',
		extendedProp2: 2
	})
])

// this will show the number 1 (as the inherited default value of sourceProp)
console.log(New(MyExtendedClass).sourceProp)

```
