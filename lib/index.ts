/**
 * @description: async map foreach filter reduce and so on
 * @author: thecatshidog
 *
 * @created: 2020-06-27 01:06:55
 */

export async function asyncMap<T>(items: T[], cb: (item: T) => any) {
  if (!Array.isArray(items)) {
    throw new Error("items is not right array type");
  }
  if (typeof cb !== "function") {
    throw new Error("callback function is not right function");
  }
  const list = items.map((item) => {
    const res = cb(item);
    return res;
  });
  const result = await Promise.all(list);
  return result;
}

export default asyncMap;
