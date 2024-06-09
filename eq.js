const a = 10;
const b = '10';

console.log(a == b);
console.log(a === b);

const c = { name: 'John' }; // 1000
const d = { name: 'John' }; // 1001

console.log(c == d);
console.log(c === d);

console.log(10 == 10);
console.log({} == {});
console.log([] == []);
console.log(null == null);
console.log(null === null);
console.log(undefined == undefined);
console.log(undefined === undefined);
console.log(null == undefined);
console.log(null === undefined);

const e = 10 + undefined;

console.log(e);

console.log(NaN == NaN);
console.log(NaN === NaN);

console.log('' == 0); // true
console.log('' == []); // true
console.log('' == null); // false
console.log('' == undefined); // false
console.log('' == {}); // false
