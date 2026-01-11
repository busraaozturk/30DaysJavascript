# JS Drum Kit

This project is a **keyboard-controlled drum kit** built with **HTML, CSS, and JavaScript**.  
When the user presses specific keys on the keyboard, corresponding drum sounds are played and a visual animation is triggered.

## Project Features

- Play drum sounds using keyboard keys
- Smooth visual animations on key press
- Multiple sounds mapped to different keys
- Audio playback resets for rapid re-triggering
- Clean separation of HTML, CSS, and JavaScript

## Key Mapping

Each key on the keyboard is mapped to a sound using the `data-key` attribute.

| Key | KeyCode | Sound |
|---|---|---|
| A | 65 | Clap |
| S | 83 | Hi-hat |
| D | 68 | Kick |
| F | 70 | Open Hat |
| G | 71 | Boom |
| H | 72 | Ride |
| J | 74 | Snare |
| K | 75 | Tom |
| L | 76 | Tink |

## HTML Overview

- Each `.key` element represents a drum pad
- `data-key` attributes are used to match keyboard input with audio
- `<audio>` elements are linked using the same `data-key` values

This structure allows JavaScript to dynamically select the correct sound and visual element.

## CSS Overview

### Visual Effects
- Background image with blur effect using `::before`
- Smooth scaling and glow animation on key press
- Responsive and centered layout

### Animation Class

    .playing {
        transform: scale(1.1);
        border-color: #ffc600;
        box-shadow: 0 0 1rem #ffc600;
    }

The .playing class is added and removed dynamically by JavaScript to trigger animations.

## JavaScript Logic Explained

### Selecting All Keys

    const keys = document.querySelectorAll('.key');
Selects all drum key elements to manage animations.

### Listening for Keyboard Input

    document.addEventListener('keydown', function(event) {
- Listens for key presses
- Uses event.keyCode to identify which key was pressed

### Finding the Matching Key and Audio

    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
- Matches the pressed key with its visual element
- Matches the same key with the correct audio file
- If no match is found, the function exits safely

### Playing the Sound
    audio.currentTime = 0;
    audio.play();
- Resets the audio to the beginning
- Allows rapid repeated key presses
- Ensures smooth sound playback

### Triggering the Animation
    key.classList.add('playing');
- Adds the animation class to visually highlight the pressed key.

### Removing the Animation
    keys.forEach(key => {
        key.addEventListener('transitionend', function () {
            key.classList.remove('playing');
        });
    });
- Listens for the end of the CSS transition
- Removes the .playing class
- Keeps animations clean and reusable

## Key JavaScript Concepts Practiced
- DOM selection
- Keyboard events
- Data attributes (data-key)
- Audio playback control
- CSS transitions with JavaScript
- Event-driven programming