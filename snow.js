// Snowflakes effect
function createSnowflakes() {
    const snowflakesContainer = document.getElementById('snowflakes');
    const numberOfSnowflakes = 100;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // Snowflake character
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;
        snowflakesContainer.appendChild(snowflake);
    }
}

// Call the function to start the snow effect
createSnowflakes();
