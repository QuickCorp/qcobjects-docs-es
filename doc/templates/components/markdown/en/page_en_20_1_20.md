# Ready
Assign a function to run after everything is done by QCObjects and after the window.onload event. Use it to prevent 'undefined' DOM objects error.

#### Usage:
```javascript
Ready(()=>{
  // My init code here!
});
```
Note that if you define dynamic components by using a HTML "component" tag, the dynamic content load will not trigger Ready events. To catch code everytime a dynamic component is loaded, use a Controller done method instead.

You will use Ready implementation mostly when you want to implement QCObjects in conjunction with another framework that needs it.
