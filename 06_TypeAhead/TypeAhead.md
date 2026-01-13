# Type Ahead (Autocomplete Search)

It allows users to search for **cities or states** in the United States and displays matching results instantly as they type.

## Features

- Live search (updates on every keystroke)
- Filters by **city name** or **state name**
- Case-insensitive matching using **Regular Expressions**
- Highlights matching text
- Formats population numbers with commas
- Fetches data asynchronously from an external JSON endpoint
- No libraries or frameworks (Pure JavaScript)

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- Fetch API
- Regular Expressions

## Data Source

City and state data is fetched from the following public JSON file:
- US Cities Dataset (population included)

The data is loaded asynchronously using the **Fetch API** and stored in a local array.

## How It Works

1. The application fetches city data from an external JSON file.
2. As the user types into the input field:
   - The input value is matched against city and state names.
   - Matching results are filtered using `Array.filter()`.
   - Matches are highlighted using `RegExp`.
3. Results are displayed dynamically inside a list below the input field.
4. Population numbers are formatted for better readability.

## Key JavaScript Concepts

- `fetch()` for asynchronous data loading
- `filter()` and `map()` array methods
- Regular Expressions (`RegExp`)
- DOM manipulation
- Event listeners (`keyup`, `change`)
- Template literals

## Preview

Type a city or state name (e.g. **"New"**, **"Cal"**) to see instant suggestions with highlighted matches.
