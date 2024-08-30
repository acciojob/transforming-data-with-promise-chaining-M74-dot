//your JS code here. If required.
document.getElementById('btn').addEventListener('click', function() {
    const input = document.getElementById('ip').value;
    const outputDiv = document.getElementById('output');

    // Create a function that returns a promise resolving after a delay
    function delayPromise(value, delay) {
        return new Promise((resolve) => setTimeout(() => resolve(value), delay));
    }

    // Chain promises to perform the transformations
    delayPromise(Number(input), 2000)  // Initial delay with the number from input
        .then(result => {
            outputDiv.textContent = `Result: ${result}`;
            return delayPromise(result * 2, 1000);  // Multiply by 2 after 1 second
        })
        .then(result => {
            outputDiv.textContent = `Result: ${result}`;
            return delayPromise(result - 3, 1000);  // Subtract 3 after 1 second
        })
        .then(result => {
            outputDiv.textContent = `Result: ${result}`;
            return delayPromise(result / 2, 1000);  // Divide by 2 after 1 second
        })
        .then(result => {
            outputDiv.textContent = `Result: ${result}`;
            return delayPromise(result + 10, 1000);  // Add 10 after 1 second
        })
        .then(result => {
            outputDiv.textContent = `Final Result: ${result}`;
        })
        .catch(error => {
            outputDiv.textContent = `Error: ${error.message}`;
        });
});
