# stringto
map string to one item of given set

### Instalation
```npm install stringto```

### Test
```npm run test```

### Usage
```javascript
require('stringto');

"Some String".to([10, 15, 20]);  //15

//routing by cookies for canary deploy
let host = cookieValue.to(['10.0.0.120', '10.0.0.121', '10.0.0.122']);

```
