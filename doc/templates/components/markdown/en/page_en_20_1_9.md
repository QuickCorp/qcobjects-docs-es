# ClassFactory
Use **ClassFactory** to get the Class declaration factory instance of a QCObjects Class
You can get either a Class factory from a Package or from the Class queue stack

To retreive the ClassFactory from the Class queue stack you can simply use the name of a Class as calling directly in the code.

#### Example:

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
Package('org.quickcorp.package1',[
	Class('MyClass',{
		a:1
	})
])
console.log(MyClass == ClassFactory('MyClass')) // it will still show true
// The following line will show true as well
console.log(MyClass == ClassFactory('org.quickcorp.package1.MyClass'))
```

```javascript
/* The interesting thing is when you have declared more than one Class using the
* same name MyClass into different packages but with different property default values
* and even properties
*/
Package('org.quickcorp.package1',[
	Class('MyClass',{
		a:1
	})
])
Package('org.quickcorp.package2',[
	Class('MyClass',{
		a:2,
		b:1
	})
])
// The last declaration of MyClass will be the one survival in the Class queue
// so the reference MyClass in the code will point to that one
console.log(MyClass == ClassFactory('MyClass')) // it will still show true

// In this case as the MyClass defined in the org.quickcorp.package1 will not be the same
// as the one in the org.quickcorp.package2, but the MyClass in the package2 is the last one
// The following line will show false
console.log(MyClass == ClassFactory('org.quickcorp.package1.MyClass'))

// The following line will show true
console.log(MyClass == ClassFactory('org.quickcorp.package2.MyClass'))

// The following line will show false
console.log(ClassFactory('org.quickcorp.package1.MyClass') == ClassFactory('org.quickcorp.package2.MyClass'))
```

The above examples are intentionally done to explain and show how the scope of the Class definitions in QCObjects is protected and handled and it is reflected in the use of ClassFactory.

So you are gonna want to use ClassFactory when you need complete control over the scope when extending Classes

**Example**

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
Package('org.quickcorp.mypackage1',[
	Class('MyInheritClass',{
		sourceProp:1
	}),
])

// The following code is a definition of MyExtendedClass into a different package
// org.quickcorp.package2
// extending MyInheritClass using ClassFactory to retreive the Class from the source package
// org.quickcorp.mypackage1
Package('org.quickcorp.mypackage2',[
	Class('MyExtendedClass',ClassFactory('org.quickcorp.mypackage1.MyInheritClass'),{
		extendedProp1: 'value of prop',
		extendedProp2: 2
	})
])

// this will show the number 1 (as the inherited default value of sourceProp)
console.log(New(MyExtendedClass).sourceProp)

```
