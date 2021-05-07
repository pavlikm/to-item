[![Node.js CI](https://github.com/pavlikm/to-item/actions/workflows/node-build.yml/badge.svg)](https://github.com/pavlikm/to-item/actions/workflows/node-build.yml)
[![CodeQL](https://github.com/pavlikm/to-item/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/pavlikm/to-item/actions/workflows/codeql-analysis.yml)

# to-item
map object to one item of given set

### Instalation
```npm install to-item```

### Test
```npm run test```

### Usage
```javascript
require('to-item');

//basic usage
"Some String".to([10, 15, 20]);  //15

//get db ip by user id
let host = idUser.to(['10.0.0.120', '10.0.0.121', '10.0.0.122']);

//run AB test by cookie value
let service = cookieValue.to([new ServiceA(), new ServiceB()]);
service.run();

```
