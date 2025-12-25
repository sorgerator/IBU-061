const blogPosts = [
    {
        title: "How to Create a Professional CV",
        description: "Learn the key steps in creating a professional CV that stands out to recruiters. Discover tips on layout, design, and content.",
        fullContent: "A professional CV should be concise, usually 2 pages. Use bullet points for readability and ensure your contact information is up to date..."
    },
    {
        title: "Common CV Mistakes to Avoid",
        description: "Discover the most common CV mistakes that could cost you an interview. Learn how to avoid these pitfalls to ensure your CV is perfect.",
        fullContent: "Avoid typos, generic objectives, and unexplained gaps in employment. Always proofread your CV or use a tool to check for errors..."
    },
    {
        title: "How to Tailor Your CV for a Specific Job",
        description: "Tailoring your CV to fit a specific job posting is crucial. Find out how to highlight the skills and experience most relevant to the role.",
        fullContent: "Analyze the job description for keywords. Match those keywords in your skills section and work experience to show you are the perfect fit..."
    },
    {
        title: "The Importance of a CV Summary",
        description: "A CV summary can be a powerful tool to catch the recruiter's attention. Learn how to craft a compelling summary that showcases your best skills.",
        fullContent: "Your summary is your 'elevator pitch.' It should be 3-4 sentences long and summarize your years of experience and your biggest achievements..."
    }
];

function renderBlogPosts() {
    const container = document.getElementById('blog-posts-container');
    container.innerHTML = "";

    blogPosts.forEach((post, index) => {
        const cardHtml = `
            <div class="col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm border-0">
                    <div class="card-body p-4">
                        <h4 class="card-title fw-bold">${post.title}</h4>
                        <p class="card-text text-muted mt-3">${post.description}</p>
                        <a href="#" class="text-primary text-decoration-none mt-auto d-inline-block" 
                           onclick="openPost(${index})">Read More</a>
                    </div>
                </div>
            </div>
        `;
        container.innerHTML += cardHtml;
    });
}

function openPost(index) {
    const post = blogPosts[index];
    document.getElementById('modalTitle').innerText = post.title;
    document.getElementById('modalBody').innerText = post.fullContent;
    
    const myModal = new bootstrap.Modal(document.getElementById('blogModal'));
    myModal.show();
}

renderBlogPosts();