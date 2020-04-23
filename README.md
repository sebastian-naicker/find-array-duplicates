# find-array-duplicates
A utility function to find all duplicates within a provided object array

### Information
![Node.js CI](https://github.com/sebastian-naicker/find-array-duplicates/workflows/Node.js%20CI/badge.svg)

### Prerequisites
**Node ^12.x** [nodejs.org](https://nodejs.org)

### Install
<pre lang="highlight">
npm i find-array-duplicates
</pre>

or

<pre lang="highlight">
yarn add find-array-duplicates
</pre>

### Usage
`duplicates` takes in 2 arguments `arr` and `property`. `arr {Array}` should be an Array containing a list of objects of a similar structure.
`property {String}` is the property within the object structure that you would like to check for duplicate values.
<pre lang="highlight">
import duplicates from 'find-array-duplicates'

duplicates(arr, 'property')

// => { single, all, modify, map, filter, find }
</pre>

#### `=> single()`
Returns the first object of the filtered duplicates array
<pre lang="highlight">
const names = [
  { 'age': 36, 'name': 'Bob' },
  { 'age': 40, 'name': 'Harry' },
  { 'age': 1,  'name': 'Bob' }
]

const results = duplicates(names, 'name').single()
// => { 'age': 36, 'name': 'Bob' }
</pre>

#### `=> all()`
Returns the entire list of duplicate objects on the property provided
<pre lang="highlight">
const results = duplicates(names, 'name').all()
// => [{ 'age': 36, 'name': 'Bob' }, { 'age': 1,  'name': 'Bob' }]
</pre>

#### `=> modify(callback)`
Allows you to modify the output of the final result, the call back function is provided with the entire list of duplicate objects
Returns `any` entirely in your control. 
<pre lang="highlight">
const results = duplicates(names, 'name').modify(dupes => dupes[0].age)
// => 36
</pre>

#### `=> find(callback)`
Works exactly like `Array.find` runs off the duplicate array
Returns an `Object` based on the `find` callback provided.
<pre lang="highlight">
const results = duplicates(names, 'name').find(dupes => dupes.age === 1)
// => { 'age': 1,  'name': 'Bob' }
</pre>

#### `=> map(callback)`
Works exactly like `Array.map` runs off the duplicate array
Returns an `Array` based on the `map` callback provided.
<pre lang="highlight">
const results = duplicates(names, 'name').map(({ name, age }, index) => { name, age, index })
// => [{ 'age': 1,  'name': 'Bob', index: 0 }, { 'age': 36, 'name': 'Bob', index: 1 }]
</pre>

#### `=> filter(callback)`
Works exactly like `Array.filter` runs off the duplicate array.
Returns an `Array` based on the `filter` callback provided.
<pre lang="highlight">
const results = duplicates(names, 'name').filter(dupes => dupes.age >= 1)
// => [{ 'age': 1,  'name': 'Bob' }, { 'age': 36, 'name': 'Bob' }]
</pre>

Please report issues on the github issue page. Hope you enjoy!
