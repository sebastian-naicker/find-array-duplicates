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
 */

function duplicates(arr, property) {
  if (!Array.isArray(arr))
    throw new Error(
      `Please provide a valid Array, this could either be because you used an invalid array, or you provided a value which is not of type Array`
    );
  if (!property) throw new Error(`The property parameter cannot be empty`);
  const clone = [...arr];
  if (!clone[0].hasOwnProperty(property)) throw new Error(`Could not find property [${property}] in Object Array`);

  const duplicates = [
    ...new Set(clone.map((val) => val[property]).filter((item, index, iteratee) => iteratee.indexOf(item) !== index))
  ];

  const flattenedDupes = duplicates.map((val) => clone.filter((item) => item[property] === val)).flat();

  return {
    single: () => flattenedDupes[0],
    all: () => flattenedDupes,
    modify: (cb) => cb(flattenedDupes),
    map: (cb) => flattenedDupes.map(cb),
    filter: (cb) => flattenedDupes.filter(cb),
    find: (cb) => flattenedDupes.find(cb)
  };
}

module.exports = duplicates
