async function fetchAndDisplayPosts() {
    const listContainer = document.getElementById('posts-list');
    
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const posts = await response.json();

        listContainer.innerHTML = "";

        posts.slice(0, 10).forEach(post => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `<strong>${post.title}</strong>`;
            listContainer.appendChild(listItem);
        });

    } catch (error) {
        listContainer.innerHTML = `<li style="color: red;">Error: ${error.message}</li>`;
        console.error("Fetch Error:", error);
    }
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayPosts);