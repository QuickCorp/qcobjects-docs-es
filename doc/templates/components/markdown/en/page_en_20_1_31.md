# SourceCSS

A static Class that is used to load an external CSS resource.

```javascript
Class("MyNewController",Controller,{
	dependencies:[],
	done (){
		this.dependencies.push(New(SourceCSS,{
			external:false,
			url:CONFIG.get('basePath')+'css/my-css-resource.css'
		}));
	}
});
```
