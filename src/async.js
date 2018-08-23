export default {};

console.log('load async', new Date().getMilliseconds());

Array(100000000).map(() => {
  JSON.stringify({ a: 1, b: 2});
});
console.log('finished', new Date().getMilliseconds());

