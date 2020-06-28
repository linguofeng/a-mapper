# a-mapper

> a-mapper is a npm package,use typescript write.solve foreach map filter reduce and so on not async await.

## install

```
npm install a-mapper
```

## usage

```
const asyncMap = require('a-mapper');
import asyncMap from 'a-mapper';
import { asyncMap } from 'a-mapper';
```

```
asyncMap([1, 2, 3, 4], async (item) => {
    await sleep(1000);
    return 1;
}).then((res) => {
    console.log(res); // [1, 1, 1, 1]
});
```

```
async function main() {
  await sleep("asdf");
  await asyncMap<any>(asyncItems, async (item: any) => {
    await sleep(item);
    return 1;
  });
  console.log("hello");
}
main(); // asdf 1 2 3 4 hello
```

asyncMap can execute all list length function, be not equal to filter array function

```
async function main(){
  const res = await asyncMap(list, async (item) => {
    if(item < 2) {
      return item;
    }
  });
  console.log(res); // [1, undefined, undefined, undefined]
}
```
