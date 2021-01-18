# \_Crypt
With \_Crypt you can encode serializable objects by a passphrase

#### Example (1):

```javascript
 var _string = New(_Crypt,{string:'hello world',key:'some encryption md5 key'});
 console.log(_string._encrypt());
 console.log(_string._decrypt()); // decodes encrypted string to the source
```
 #### Example (2):

```javascript
 _Crypt.encrypt('hola mundo','12345678866');
 _Crypt.decrypt('nqCelFSiq6Wcpw==','12345678866');
```

