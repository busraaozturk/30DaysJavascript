# Update CSS Variables with JavaScript 🎨

This project demonstrates how to **dynamically update CSS variables (Custom Properties)** using JavaScript and form inputs such as **range sliders** and **color pickers**.

By changing the input values, the styles of the image and text are updated in real time without reloading the page.

## 🚀 Live Features
- Control **spacing (padding)** around the image
- Apply **blur effect** dynamically
- Change the **base color** used by multiple elements
- Uses **CSS Variables** for clean and scalable styling
- JavaScript listens to input changes and updates styles instantly

## Key Points
- Each input has a name attribute that matches a CSS variable
- data-sizing="px" is used to append units dynamically
- The image is styled using CSS variables

## Important Details
- The name attribute is critical because it directly maps to the CSS variable name.
- The data-sizing attribute is used to add units like px when needed.
- The image itself has no inline styles — everything is controlled via CSS variables.

## JavaScript Logic Explained
The JavaScript part of this project is responsible for connecting the form inputs with the CSS variables.

Whenever the user changes an input value, JavaScript updates the corresponding CSS variable in real time.

### Selecting All Inputs
    const inputs = document.querySelectorAll('.controls input');

- This line selects all input elements inside the .controls container.
- It returns a NodeList, which allows us to loop over each input.
- This approach makes the code scalable — new inputs can be added without changing the JavaScript.

### Looping Through Inputs
    inputs.forEach(input => {

- We loop over every input (range and color).
- Each input will get its own event listener.
- This avoids writing repetitive code for every control.

### Listening for User Interaction
    input.addEventListener('change', (e) => {

- The change event fires when the user finishes adjusting the input.
- It is ideal for sliders and color pickers when performance matters.
- The event object (e) gives access to the input that triggered the change.

### Reading the Unit (px) Dynamically
    const suffix = e.target.dataset.sizing || '';

- dataset.sizing reads the value of data-sizing from the HTML.
- For example:
    data-sizing="px"
- If the input needs a unit (like px), it is added automatically.
- If no unit is needed (like color values), an empty string is used.
- This makes the logic flexible and reusable.

### Updating the CSS Variable
    document.documentElement.style.setProperty(
        `--${e.target.name}`,
        e.target.value + suffix
    );

- This is the core of the project.
    - document.documentElement refers to the <html> element.
    - CSS variables are defined in :root, which maps to <html>.
    - setProperty() updates a CSS variable dynamically.
- Example:

        --spacing → 20px
        --blur → 5px
        --base → #ffc600
- Because these variables are already used in CSS, all related elements update instantly.

### How CSS Reacts to JavaScript Changes
    img {
        padding: var(--spacing);
        background: var(--base);
        filter: blur(var(--blur));
    }

- When JavaScript updates a variable:
    - padding changes
    - blur changes
    - background color changes
- No page reload
- No class toggling
- No inline styles on elements
- This creates a clean and modern workflow.

### Full Flow Summary
- User changes a slider or color input
- JavaScript captures the change event
- The input value is read
- The correct CSS variable is updated
- CSS automatically reflects the new value
- UI updates instantly 