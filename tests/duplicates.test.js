const duplicates = require('../src')

describe(__filename, () => {
  const array = [
    { name: 'Bob', age: 20 },
    { name: 'Harry', age: 20 },
    { name: 'Ken', age: 33 },
    { name: 'Laurie', age: 28 },
    { name: 'Bob', age: 21 }
  ]

  it('=> () - should not return error if property is empty string', () => {
    const testArr = [{name: '', age: 20, name: 'Bob', age: 32}]
    const expected = []

    const actual = duplicates(testArr, 'name').all()

    expect(actual).toStrictEqual(expected)
  })

  it('=> single() - should return the first element of the duplicates', () => {
    const expected = { name: 'Bob', age: 20 }

    const actual = duplicates(array, 'name').single()

    expect(actual).toStrictEqual(expected)
  })

  it('=> all() - should return all duplicate elements', () => {
    const expected = [{ name: 'Bob', age: 20 }, { name: 'Bob', age: 21 }]

    const actual = duplicates(array, 'name').all()

    expect(actual).toStrictEqual(expected)
  })

  it('=> modify() - should return a modified result set', () => {
    const expected = 20

    const actual = duplicates(array, 'name').modify(dupes => dupes[0].age)

    expect(actual).toStrictEqual(expected)
  })

  it('=> map() - should map over duplicates', () => {
    const expected = [{ name: 'Bob', age: 20, index: 0 }, { name: 'Bob', age: 21, index: 1 }]

    const actual = duplicates(array, 'name').map(({ name, age }, i) => ({ name, age, index: i }))

    expect(actual).toStrictEqual(expected)
  })

  it('=> find() - should find a single result within the duplicate set', () => {
    const expected = { name: 'Bob', age: 20 }

    const actual = duplicates(array, 'name').find(dupes => dupes.age === 20)

    expect(actual).toStrictEqual(expected)
  })

  it('=> filter() - should filter duplicate set based on callback', () => {
    const expected = [{ name: 'Bob', age: 20 }]

    const actual = duplicates(array, 'name').filter(dupes => dupes.age === 20)

    expect(actual).toStrictEqual(expected)
  })
})
