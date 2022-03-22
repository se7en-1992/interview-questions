function deepClone(obj, hash = new WeakMap()) {
    if (!obj) return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);
    if (typeof obj !== "object") return obj;
    if (hash.has(obj)) return hash.get(obj);
    let cloneObj = new obj.constructor();
    hash.set(obj, cloneObj);
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            cloneObj[key] = deepClone(obj[key], hash)
        }
    }
    return cloneObj;
}
var a = { a: { a: { a: () => {} } }, b: { b: { b: 1 } } }
var deepObj = deepClone(a);
deepObj.b.b.b = 2;
console.log(a);
console.log(deepObj);