# Processor

Static Class that used to set custom processors for CONFIG.

#### Usage:

```javascript
Processor.setProcessor(processor)
```

Where **processor** is a named function that receives the arguments of the processor

#### Example:

You have an environment variable called **SERVICE_URL** that stores a url of a service. You have to use that value in your config settings in the **serviceURL** value but you also need to set the **host** and the **port** settings using the parsed value of that url. To parse the value of SERVICE_URL environment variable on-demand and fill up the corresponding settings in your config.json, Your config.json file will look like this:

```json
// file: config.json
{
	"serviceURL":"$ENV(SERVICE_URL)",
	"host":"$SERVICE_HOST(SERVICE_URL)",
	"port":"$SERVICE_PORT(SERVICE_URL)"
}
```

The **$SERVICE_HOST** and **$SERVICE_PORT** processors don't exist. To define them, you must use:

```javascript
// execute the next code in your init.js file or before to load the CONFIG settings

let SERVICE_HOST = function (arg){
	var processorHandler = this; // to make this always works, do not use arrow functions to define your
	let serviceURL = new URL(processorHandler.processors.ENV(arg));
	return serviceURL.host;
}
let SERVICE_PORT = function (arg){
	var processorHandler = this; // to make this always works, do not use arrow functions to define your
	let serviceURL = new URL(processorHandler.processors.ENV(arg));
	return serviceURL.port;
}

Processor.setProcessor(SERVICE_HOST);
Processor.setProcessor(SERVICE_PORT);
```

Then you only need to set your environment variable SERVICE_URL in your shell

This is only for Unix/Linux systems

```shell
export SERVICE_URL="https://example.com:443/path-to-a-resource/"
```

and your settings will be dynamically loaded like this:

```json
{
	"serviceURL":"https://example.com:443/path-to-a-resource/",
	"host":"example.com",
	"port":"443"
}
```

And you get the corresponding values using **CONFIG.get(value)**
