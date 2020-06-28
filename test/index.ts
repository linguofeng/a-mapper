import { asyncMap } from "../lib/index";

console.time();
const asyncItems = [1, 2, 3, 4];
async function sleep(item: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(item);
      console.log("item", item);
    }, 1000);
  });
}
// asyncMap<any>(asyncItems, async (item: any) => {
//   await sleep(item);
//   return 1;
// }).then((res) => {
//   console.log(res);
//   console.timeEnd();
// });

async function main2() {
  const res = await asyncMap(asyncItems, async (item) => {
    if (item < 2) {
      return item;
    }
  });
  console.log("main2", res);
}

async function main() {
  await sleep("asdf");
  await asyncMap<any>(asyncItems, async (item: any) => {
    await sleep(item);
    return 1;
  });
  console.log("hello");
}
main();
main2();
