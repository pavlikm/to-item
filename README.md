[![CodeQL](https://github.com/pavlikm/to-item/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/pavlikm/to-item/actions/workflows/codeql-analysis.yml)
![Coverage](https://github.com/pavlikm/to-item/raw/master/public/badge.svg)

# to-item
to-item is polyfil for mapping any javascript Object to one item of given set, which can be again any Object.

### Instalation
```npm install to-item```

### Test
```npm run test```

### Usage
Basic usage for mapping any object (for example string) to one item of given set:
```javascript
require('to-item');

"Some String".to([10, 15, 20]);  //15
```
Run A-B test. Based of given cookie run one of method:
```javascript
require('to-item');

let funcA = function(){
    console.log("function A");
}
let funcB = function(){
    console.log("function B");
}
cookieValue.to([funcA, funcB])();
```
Get random IP from pool:
```javascript
require('to-item');

let host = Math.random().to(['10.0.0.120', '10.0.0.121', '10.0.0.122']);
```
Get tip of the day:
```javascript
require('to-item');

let tip = (new Date()).getDay().to(arrayOfDailyTips);

```
... and many other use cases ;)