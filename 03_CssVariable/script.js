const inputs = document.querySelectorAll('.controls input');

inputs.forEach(input => {
    input.addEventListener('change', (e) => {
        const suffix = e.target.dataset.sizing || '';
        document.documentElement.style.setProperty(`--${e.target.name}`,e.target.value + suffix);
        console.log(e.target.value);
    });
});