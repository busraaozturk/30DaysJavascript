# Flex Panel Gallery

An interactive flexbox-based image gallery built with **HTML, CSS, and JavaScript**.  
Click on a panel to expand it and reveal animated text using CSS transitions and JavaScript events.

## Features

- Responsive full-screen flexbox layout
- Smooth expand/collapse animation on click
- Text animation triggered after transition ends
- Uses `transitionend` event for precise timing
- Clean separation of HTML, CSS, and JavaScript

## How It Works

- All panels are displayed side by side using Flexbox.
- Each panel has flex: 1 by default.
- When a panel is clicked:
    - JavaScript toggles the open class.
    - CSS transitions increase the panel’s flex value.
- When the flex transition ends:
    - The transitionend event fires.
    - JavaScript adds the open-active class.
- Text elements slide in from the top and bottom using transform

## JavaScript Logic Explanation

    const panels = document.querySelectorAll('.panel');

- Selects all elements with the `.panel` class.
- This returns a NodeList containing each panel in the gallery.

```
    function toggleOpen() {
            this.classList.toggle('open');
        }
```

- This function runs when a panel is clicked.
    - `this` refers to the panel that triggered the event.
    - `classList.toggle('open')` adds the `open` class if it does not exist,
or removes it if it already exists.
- The `open` class increases the panel’s `flex` value in CSS, causing it to expand.  

```
    function toggleActive(e) {
        if (e.propertyName.includes('flex')) {
            this.classList.toggle('open-active');
        }
    }
```

- This function runs when a CSS transition ends.
    - `e` is the event object provided by the browser.
    - `e.propertyName` indicates which CSS property has finished transitioning.
    - Different browsers report this property as `flex` or `flex-grow`,
so `includes('flex')` is used for compatibility.
- When the flex transition finishes, the `open-active` class is toggled.
This triggers the text animation inside the panel.

```
    panels.forEach(panel =>
        panel.addEventListener('click', toggleOpen)
    );
```

- Adds a click event listener to each panel.
- Clicking a panel expands or collapses it by toggling the open class.
```
    panels.forEach(panel =>
        panel.addEventListener('transitionend', toggleActive)
    );
```

- Adds a transitionend event listener to each panel.
- This ensures that text animations only start after the panel expansion
animation has completed, resulting in a smoother user experience.
