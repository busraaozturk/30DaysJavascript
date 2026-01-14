# HTML5 Canvas Drawing App

This project is a simple **HTML5 Canvas drawing application** built with **vanilla JavaScript**. It allows users to draw freely on the screen using the mouse, with dynamically changing colors and brush sizes.

The project demonstrates how to work with:

* HTML5 `<canvas>`
* Canvas 2D Context API
* Mouse events
* Dynamic styling (color & line width)

## HTML Structure

```html
<canvas id="draw" width="800" height="800"></canvas>
```

* The `<canvas>` element is where all drawing happens
* The `id="draw"` is used to access the canvas in JavaScript
* Width and height are later overridden to match the window size

## Canvas Setup (JavaScript)

```js
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

* `getContext('2d')` gives access to the Canvas 2D API
* Canvas size is set dynamically to fill the browser window

## Brush Configuration

```js
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
```

* `strokeStyle` → initial color (later overridden dynamically)
* `lineJoin = 'round'` → smooth corners between lines
* `lineCap = 'round'` → rounded line endings
* `lineWidth` → initial brush thickness

## State Variables

```js
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
```

| Variable         | Purpose                                            |
| ---------------- | -------------------------------------------------- |
| `isDrawing`      | Tracks whether the mouse button is pressed         |
| `lastX`, `lastY` | Stores the previous mouse position                 |
| `hue`            | Controls the color rotation (HSL)                  |
| `direction`      | Controls whether line width increases or decreases |

## Draw Function

```js
function draw(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) hue = 0;

  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  direction ? ctx.lineWidth++ : ctx.lineWidth--;
}
```

### What happens here?
* Drawing only occurs if `isDrawing` is `true`
* Color changes dynamically using **HSL color model**
* Lines are drawn from the previous mouse position to the current one
* Hue cycles from `0` to `360` creating a rainbow effect
* Line width smoothly increases and decreases

## Mouse Events
```js
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
```

### Event Flow:
* `mousedown` → starts drawing
* `mousemove` → draws continuously
* `mouseup` → stops drawing
* `mouseout` → stops drawing when cursor leaves canvas

## Features
* Freehand drawing with mouse
* Smooth, rounded brush strokes
* Dynamic rainbow color effect
* Animated brush thickness
* Fullscreen responsive canvas

## Why This Project Matters
This project is great for learning:
* How the Canvas API works
* Handling mouse events in JavaScript
* Managing state during interactions
* Creating visual effects without libraries

It is a common beginner-to-intermediate exercise in modern JavaScript learning paths.
