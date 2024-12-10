const createSnowflake = () => {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${3 + Math.random() * 5}s`; // Falling speed
    snowflake.style.opacity = `${0.3 + Math.random() * 0.7}`;
    snowflake.style.fontSize = `${10 + Math.random() * 20}px`; // Random size
    snowflake.innerText = '🍳';
    document.body.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 8000); // Remove snowflake after it falls out of view
};

setInterval(createSnowflake, 100);
