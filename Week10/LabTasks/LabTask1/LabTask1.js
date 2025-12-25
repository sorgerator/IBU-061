/*
Update the code by writing a small JavaScript script that:
1. Defines an asynchronous function named getJoke.
2. Uses await with the Fetch API to request a random joke from a public API.
3. Validates the response: If response.ok is false, throw an error with the message HTTP error! status: <statusCode>.
4. Parses the response body to JSON.
5. Handles errors with a try/catch, logging Failed to fetch the joke: <error.message>.
6. In the finally block, log that the request finished.

You can test if your code works by writing in terminal node nameofjsfile.js (for this you need node.js installed)or create a simple HTML file and include your JavaScript file using a <script> tag. Open the HTML file in a browser and in the DevTools console view the output.

*/

async function getJoke() {
  try {
    console.log("Fetching a joke...");

    const response = await fetch("https://official-joke-api.appspot.com/random_joke");

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const joke = await response.json();

    console.log(`${joke.setup} 😂`);
    console.log(`${joke.punchline}`);
  } catch (error) {
    console.error(`Failed to fetch the joke: ${error.message}`);
  } finally {
    console.log("Request finished!");
  }
}

getJoke();