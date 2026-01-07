# 🕰️ Analog Clock with JavaScript

This project is a **real-time analog clock** built using **HTML, CSS, and JavaScript**.  
The hour, minute, and second hands move dynamically based on the current system time with smooth animations.

This project was created to practice JavaScript’s `Date` object and CSS transform/transition concepts.

## 🚀 Features

- ⏱️ Real-time hour, minute, and second hands
- 🔄 Smooth and realistic hand movements
- 🐛 Fixed animation bug when seconds reset from 59 → 0
- 🎯 Accurate rotation using ratio-to-degree calculations
- 📱 Responsive design

## 🧠 Technologies Used

- **HTML5**
- **CSS3**
- **Vanilla JavaScript**
  - `Date` object
  - `setInterval`

## ⚙️ How It Works

- The current time is retrieved using the JavaScript `Date()` object
- Clock hand rotations are calculated as:
  - Second hand → 6° per second
  - Minute hand → 6° per minute (moves smoothly with seconds)
  - Hour hand → 30° per hour (moves smoothly with minutes)
- CSS `transform: rotate()` is used to rotate the hands
- The clock updates every second using `setInterval`

## 🧩 JavaScript Logic Explained

The clock functionality is implemented using plain JavaScript.  
Each clock hand is rotated based on the current time using degree calculations.

    const secondHand = document.querySelector('.second-hand'); 
    const minsHand = document.querySelector('.min-hand'); 
    const hourHand = document.querySelector('.hour-hand');

The current time is then retrieved using the built-in Date object. This allows access to the current hour, minute, and second values from the user’s system clock.

    const now = new Date(); 
    const seconds = now.getSeconds(); 
    const minutes = now.getMinutes(); 
    const hours = now.getHours(); 

To rotate the clock hands correctly, time values are converted into degrees.

A full circle is 360 degrees, so each unit of time represents a portion of that circle.
- One second equals 6 degrees (360° / 60)
- One minute equals 6 degrees
- One hour equals 30 degrees (360° / 12)

An additional 90-degree offset is applied because the clock hands start horizontally in CSS.

    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

To ensure smooth and realistic movement:
- The minute hand moves gradually based on seconds
- The hour hand moves gradually based on minutes

A common animation issue occurs when the second hand resets from 59 to 0.

Without handling this case, the hand would rotate backward due to CSS transitions.

This is fixed by temporarily disabling the transition when the second value reaches zero.

    if (seconds === 0) {
        secondHand.style.transition = 'none';
    } else {
        secondHand.style.transition = 'all 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
    }

Finally, each clock hand is rotated according to its calculated degree value using CSS transform.

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

The clock updates every second using setInterval.

An initial function call ensures the correct time is displayed immediately when the page loads.

    setInterval(setDate, 1000);
    setDate();

