# HandyJS

HandyJS is an npm package that provides a series of useful JavaScript utility functions.

## Installation

Install via npm:

```shell
$ npm install handyjs
```

## Usage

```javascript
const handy = require("handyjs");
```

Or if you prefer to use ES6 import:

```javascript
import handy from "handyjs";
```

After importing `handy`, you can use any of the utility functions provided by it.

### List of functions

- `chunk` - Splits an array into arrays of specified size.
- `compact` - Removes falsey elements from an array.
- `difference` - Returns a new array with elements that are not present in the other arrays.
- `flatten` - Flattens multiple nested arrays.
- `groupBy` - Groups an array of objects by a specified key.
- `max` - Returns the largest element in an array.
- `min` - Returns the smallest element in an array.
- `sum` - Returns the sum of all the elements in an array.
- `countBy` - Groups the elements in an array by a specific rule and returns the count of each group.
- `unique` - Returns a new array containing only unique elements.
- `zip` - Creates a new array by merging multiple arrays at corresponding indexes.

### Usage guide

#### chunk

```javascript
handy.chunk([1, 2, 3, 4, 5], 2);
// => [[1, 2], [3, 4], [5]]
```

#### compact

```javascript
handy.compact([1, null, 2, false, 3, undefined, 0]);
// => [1, 2, 3, 0]
```

#### difference

```javascript
handy.difference([1, 2, 3], [3, 4, 5]);
// => [1, 2, 4, 5]
```

#### flatten

```javascript
handy.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
```

#### groupBy

```javascript
handy.groupBy(
  [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 25 },
  ],
  "age"
);
// => { '25': [{ name: 'Alice', age: 25 }, { name: 'Charlie', age: 25 }], '30': [{ name: 'Bob', age: 30 }] }
```

#### max

```javascript
handy.max([1, 2, 3, 4, 5]);
// => 5
```

#### min

```javascript
handy.min([1, 2, 3, 4, 5]);
// => 1
```

#### sum

```javascript
handy.sum([1, 2, 3, 4, 5]);
// => 15
```

#### countBy

```javascript
handy.countBy([1, 2, 3, 4, 5], isOdd);
// => { 'true': 3, 'false': 2 }

function isOdd(n) {
  return n % 2 !== 0;
}
```

#### unique

```javascript
handy.unique([1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5]);
// => [1, 2, 3, 4, 5]
```

#### zip

```javascript
handy.zip(["one", "two"], [1, 2], [true, false]);
// => [['one', 1, true], ['two', 2, false]]
```

## License

MIT
