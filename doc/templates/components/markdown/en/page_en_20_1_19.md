# Tag

Tag is a useful function to select any DOM element using selectors. Tag will always return a list of elements, that you can map, sort, and filter as any other list.

#### Usage:

```javascript
var listOfElements = Tag(selector);
```

Where selector is a DOM query selector.

#### Example:

```html
<!DOCTYPE html>
<html>
    <head>
    	<title>Demo</title>
    	<script type="text/javascript" src="https://qcobjects.dev/QCObjects.js"></script>
    </head>
    <body>
    <div class="myselector">
    <p>Hello world</p>
    </div>
    <script>
    Ready(()=>{
      Tag('.myselector > p').map((element)=>{
        element.innerHTML = 'Hello world! How are you?';
      });
    });
    </script>
    </body>
</html>
```

In the above code, a paragraph element was created inside a div with a css class named myselector by html, and then is  modified dynamically using the QCObjects Tag function. If you are familiar with query selector frameworks like JQuery, you will love this one.
