function fetchUserPosts() {
    let userName = "";
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error(`User Fetch Failed: ${response.status}`);
            }
            return response.json();
        })
        .then(users => {
            const user = users[0];
            userName = user.name;
            console.log(`System: Found user ${userName}. Fetching their posts...`);

            return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Posts Fetch Failed: ${response.status}`);
            }
            return response.json();
        })
        .then(posts => {
            console.log(`User Name: ${userName}`);
            console.log("Posts List:", posts);
        })
        .catch(error => {
            console.error("Sequential Fetch Error:", error.message);
        });
}

fetchUserPosts();