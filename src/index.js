const duplicates = (arr, property) => {
  if (!Array.isArray(arr))
    throw new Error(
      `Please provide a valid Array, this could either be because you used an invalid array, or you provided a value which is not of type Array`
    );
  if (!property) throw new Error(`The property parameter cannot be empty`);
  const clone = [...arr];
  if (clone.length <= 1) return arr;
  if (!clone[0][property]) throw new Error(`Could not find property [${property}] in Object Array`);

  const duplicates = [
    ...new Set(clone.map((val) => val[property]).filter((item, index, iteratee) => iteratee.indexOf(item) !== index))
  ];

  const flattenedDupes = duplicates.map((val) => clone.filter((item) => item[property] === val)).flat();

  return {
    uniq: () => flattenedDupes[0],
    all: () => flattenedDupes,
    modify: (cb) => cb(flattenedDupes),
    map: (cb) => flattenedDupes.map(cb),
    filter: (cb) => flattenedDupes.filter(cb),
    find: (cb) => flattenedDupes.find(cb)
  };
};

export default duplicates;
