# Effect

**Effect** is a super class to define custom effects.

#### Example:

```javascript
Class('CustomFade',Effect,{
	duration:500, // milliseconds of duration
	apply: function (){
		// You need the following line to apply a Fade effect in runtime
		_super_('Fade','apply').apply(this,arguments);
	}
})
```

