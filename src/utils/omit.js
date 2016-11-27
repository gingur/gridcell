const hasOwn = Object.prototype.hasOwnProperty;

export default function omit(obj, keys = []) {
  const omitted = {};
  for (let key in obj) {
    if (hasOwn.call(obj, key) && keys.indexOf(key) === -1) {
      omitted[key] = obj[key];
    }
  }
  return omitted;
}