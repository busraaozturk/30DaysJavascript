# Array Cardio (JavaScript Practice)

All results are logged to the **browser console**, encouraging developers to focus on **logic and array manipulation** rather than UI.

## Project Overview

The goal of this project is to practice and understand core JavaScript array methods such as:

- `filter()`
- `map()`
- `sort()`
- `reduce()`

Using real-world style data, we perform common data manipulation tasks like filtering, sorting, transforming, and aggregating information.

## JavaScript Logic – Array Cardio Explained

All outputs are printed to the browser console, making it easier to inspect and understand each step.

## Data Sets Used

### Inventors Array
An array of objects containing:
- First name
- Last name
- Birth year
- Year of death

    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 }

### People Array
An array of strings in "LastName, FirstName" format.

### Transportation Data
An array of repeated transportation types used for counting occurrences.

## JavaScript Exercises Explained

### Filter Inventors Born in the 1500s

    const list = inventors.filter(inv => inv.year >= 1500 && inv.year < 1600);

- Uses filter() to create a new array
- Only includes inventors born between 1500 and 1599
- Original array remains unchanged
- Result is displayed using console.table()

### Create a Full Name List

    const fullname = inventors.map(inv => `${inv.first} ${inv.last}`);

- Uses map() to transform objects into strings
- Returns a new array containing full names
- Demonstrates how to reshape data structures

### Sort Inventors by Birth Year (Oldest → Youngest)

    const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

- Uses sort() with a comparison function
- Sorts inventors based on birth year
- Helps understand how sorting works internally

### Calculate Total Years Lived

    const totalage = inventors.reduce((total, inv) => {
    return total + (inv.passed - inv.year);
    }, 0);

- Uses reduce() to accumulate a total value
- Calculates lifespan for each inventor
- Returns a single numeric result

### Sort Inventors by Longest Lifespan

    const oldest = inventors.sort((a, b) => {
        const lastInventor = a.passed - a.year;
        const nextInventor = b.passed - b.year;
        return lastInventor > nextInventor ? -1 : 1;
    });

- Dynamically calculates age
- Sorts inventors from longest-lived to shortest-lived
- Combines math operations with sorting logic

### Alphabetical Sort by Last Name

    const alpha = people.sort((a, b) => {
        const [aLast] = a.split(', ');
        const [bLast] = b.split(', ');
        return aLast > bLast ? 1 : -1;
    });

- Splits each string into parts
- Sorts alphabetically by last name
- Demonstrates string manipulation inside sort()

### Count Instances Using Reduce

    const transportation = data.reduce((obj, item) => {
        if (!obj[item]) {
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {});

- Converts an array into an object
- Counts how many times each value appears
- A very common real-world use case (statistics, analytics)

### Console Output

All results are logged using:
- console.log()
- console.table()
This makes debugging and learning much easier.

### Key JavaScript Concepts Practiced
- Array iteration
- Functional programming mindset
- Immutability (creating new arrays)
- Sorting with comparison functions
- Data aggregation with reduce()