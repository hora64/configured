document.addEventListener("DOMContentLoaded", () => {
    const handwrittenElements = document.querySelectorAll('.handwritten');

    handwrittenElements.forEach(element => {
        const text = element.innerText;
        element.innerHTML = ''; // Clear the current text
        text.split('').forEach(char => {
            const span = document.createElement('span');
            span.innerText = char;
            const randomScale = 1 + (Math.random() - 0.5) * 0.1; // Random scale between 0.95 and 1.05
            const randomX = (Math.random() - 0.5) * 2; // Random x position between -1 and 1
            const randomY = (Math.random() - 0.5) * 2; // Random y position between -1 and 1
            span.style.transform = `translate(${randomX}px, ${randomY}px) scale(${randomScale})`;
            element.appendChild(span);
        });
    });
});
