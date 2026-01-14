# JavaScript Array Methods Example

This project demonstrates the usage of common **JavaScript Array prototype methods** such as:

* `some()`
* `every()`
* `find()`
* `findIndex()`
* `slice()`
* Spread operator (`...`)

These methods are frequently used in modern JavaScript, especially in frontend development (React, Vue, MVC views, etc.) to work with data **immutably and cleanly**.

## Data Structures

### People Array

```js
const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];
```

Each object represents a person:
* `name`: Person's name
* `year`: Birth year

### Comments Array

```js
const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];
```

Each object represents a comment:

* `text`: Comment content
* `id`: Unique identifier

## Array Methods Explained

### `Array.prototype.some()`

Checks if **at least one element** in the array satisfies the condition.

```js
const isAdult = people.some(person =>
  (new Date().getFullYear()) - person.year >= 19
);
```

✅ Returns `true` if **any person** is 19 years old or older.

❌ Returns `false` if no one meets the condition.

### `Array.prototype.every()`

Checks if **all elements** in the array satisfy the condition.

```js
const allAdults = people.every(person =>
  (new Date().getFullYear()) - person.year >= 19
);
```

✅ Returns `true` only if **everyone** is 19 or older.

❌ Returns `false` if even one person does not meet the condition.

### `Array.prototype.find()`

Returns the **first matching element** instead of an array.

```js
const comment = comments.find(comment => comment.id === 823423);
```

* Returns the matched object
* Returns `undefined` if not found

Unlike `filter()`, it does **not** return an array.

### `Array.prototype.findIndex()`

Returns the **index number** of the matched element.

```js
const index = comments.findIndex(comment => comment.id === 823423);
```

* Returns the index if found
* Returns `-1` if not found

### Removing an Item (Immutable Way)

Instead of mutating the original array using `splice()`, a safer and modern approach is used:

```js
const newComments = [
  ...comments.slice(0, index),
  ...comments.slice(index + 1)
];
```

#### How this works:

* `slice(0, index)` → elements before the removed item
* `slice(index + 1)` → elements after the removed item
* Spread operator (`...`) merges both into a new array

✅ Original array remains unchanged

✅ Preferred in modern frameworks

## Summary Table

| Method        | Description                              |
| ------------- | ---------------------------------------- |
| `some()`      | Checks if at least one element matches   |
| `every()`     | Checks if all elements match             |
| `find()`      | Returns a single matched object          |
| `findIndex()` | Returns index of matched element         |
| `slice()`     | Creates a copy without mutation          |
| `splice()`    | Mutates original array (not recommended) |
| `...`         | Spreads array elements                   |

## Why This Matters

These methods help you:
* Write **clean and readable** JavaScript
* Avoid mutating data accidentally
* Build scalable frontend applications

Perfect for:
* Frontend projects
* MVC / API data handling
* React & modern JavaScript development