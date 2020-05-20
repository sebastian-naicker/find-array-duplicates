/**
 * This function returns an array of duplicate objects within a provided Object Array `arr`
 * based on a given property `property`
 *
 * @since 1.0.0
 * @category Array
 * @param {Array} arr An Object Array
 * @param {String} property A property in which to find duplicates off.
 * @returns {Object} Returns an Object of utility functions to modify the return
 * @example
 *
 * const names = [
 *   { 'age': 36, 'name': 'Bob' },
 *   { 'age': 40, 'name': 'Harry' },
 *   { 'age': 1,  'name': 'Bob' }
 * ]
 *
 * duplicates(names, 'name').single()
 * // => [{ 'age': 36, 'name': 'Bob' }] (Returns the first object of the filtered duplicates)
 */function duplicates(a,b){if(!Array.isArray(a))throw new Error(`Please provide a valid Array, this could either be because you used an invalid array, or you provided a value which is not of type Array`);if(!b)throw new Error(`The property parameter cannot be empty`);const c=[...a];if(!c[0].hasOwnProperty(b))throw new Error(`Could not find property [${b}] in Object Array`);const d=[...new Set(c.map(a=>a[b]).filter((a,b,c)=>c.indexOf(a)!==b))],e=d.map(a=>c.filter(c=>c[b]===a)).flat();return{single:()=>e[0],all:()=>e,modify:a=>a(e),map:a=>e.map(a),filter:a=>e.filter(a),find:a=>e.find(a)}}module.exports=duplicates;