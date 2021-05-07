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

//run AB test by cookie value
let service = cookieValue.to([new ServiceA(), new ServiceB()]);
service.run();

//get random ip from pool
let host = Math.random().to(['10.0.0.120', '10.0.0.121', '10.0.0.122']);

//get Tip of the day
let tip = (new Date()).getDay().to(arrayOfDailyTips);

```
