
```md
# JavaScript / React Notes

## 1. `function App(props)` vs `function App({ name })`

### Full Props Object

```js
function App(props) {
  return <h1>{props.name}</h1>;
}

```

-   `props` contains all passed values.

-   Access using `props.name`, `props.age`.


Example:

```js
<App name="Vatan" age={22} />

```

```js
props = { name: "Vatan", age: 22 }

```

----------

### Destructuring Props

```js
function App({ name }) {
  return <h1>{name}</h1>;
}

```

-   Directly extracts `name` from props.

-   Cleaner syntax.


Same as:

```js
const name = props.name;

```

----------

### Best Practice

```js
function Card({ title, price }) {
  return <p>{title} - {price}</p>;
}

```

----------

## 2. `filter()` Arrow Function Styles

### Implicit Return

```js
array.filter((element) => element >= 10);

```

-   No `{}` used.

-   Automatically returns result.


----------

### Explicit Return

```js
array.filter((element) => {
  return element >= 10;
});

```

-   `{}` block used.

-   Must write `return`.


----------

### Common Mistake

```js
array.filter((element) => {
  element >= 10;
});

```

❌ No return → empty result.

----------

### Example

```js
const arr = [5, 10, 15, 2];

arr.filter(x => x >= 10);
// [10, 15]

```

----------

## 3. `fetch()` + Promise + async/await

### `fetch()` Returns Promise

```js
let data = fetch(url);

```

Actual result:

```js
Promise

```

-   Not immediate data.


----------

### Using `.then()`

```js
function getData() {
  return fetch(url).then(res => res.json());
}

```

-   Waits for response.

-   Converts to JSON.


----------

### Using `async/await`

```js
async function getData2() {
  const res = await fetch(url);
  return await res.json();
}

```

-   Cleaner syntax.

-   `await` waits for result.


----------

## Important Rules

1.  `fetch()` returns Promise, not direct data.

2.  `.then()` runs after data arrives.

3.  `async` needed when using `await`.

4.  Both styles handle async code.


----------

## Quick Memory Tricks

### Props

```js
(props)      // full object
({name})     // direct extraction

```

### Filter

```js
x => x > 5                // auto return
x => { return x > 5 }    // manual return

```

### Fetch

```js
.then()   // promise style
await     // async style

```

----------

## Final Truth

Most beginner bugs happen because of:

-   Wrong prop names

-   Missing `return`

-   Thinking `fetch()` gives data instantly

-   Confusing props object vs destructuring
