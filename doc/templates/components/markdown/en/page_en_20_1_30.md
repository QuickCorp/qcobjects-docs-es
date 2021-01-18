# SourceJS

Use SourceJS as a static Class that is helping you to load external JS dependencies. This is commonly used to load libraries that are external and that not follow the QCObjects packages syntax.

#### Example:
```javascript
Class("MyNewController",Controller,{
	_new_:function (){
		var controller = this;
		controller.dependencies.push(
			New(SourceJS,{
				external:false,
				url:'doc/js/my-js-resource.js',
				done:function(){
					logger.debug("Dependency loaded")
				}})
			);
	}
})
```
