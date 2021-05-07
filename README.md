# toItem
map object to one item of given set

### Instalation
```npm install toItem```

### Test
```npm run test```

### Usage
```javascript
require('toItem');

//basic usage
"Some String".to([10, 15, 20]);  //15

//get db ip by user id
let host = idUser.to(['10.0.0.120', '10.0.0.121', '10.0.0.122']);

//run AB test by cookie value
let service = cookieValue.to([new ServiceA(), new ServiceB()]);
service.run();

```
