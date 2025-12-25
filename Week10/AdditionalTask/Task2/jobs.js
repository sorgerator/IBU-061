async function fetchJobListings() {
    const container = document.getElementById('jobs-container');
    
    try {
        const response = await fetch("https://remoteok.com/api");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        const jobs = data.slice(1); 

        container.innerHTML = "";

        jobs.slice(0, 12).forEach(job => {
            const jobCard = `
                <div class="col-md-6 col-lg-4">
                    <div class="card h-100 shadow-sm border-0 border-top border-primary border-4">
                        <div class="card-body">
                            <h5 class="card-title fw-bold text-primary">${job.position}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">${job.company}</h6>
                            <p class="card-text small text-truncate-3" style="max-height: 4.5em; overflow: hidden;">
                                ${job.description.replace(/<[^>]*>?/gm, '')}
                            </p>
                            <div class="mt-3">
                                <a href="${job.url}" target="_blank" class="btn btn-outline-primary btn-sm">
                                    Apply Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            container.innerHTML += jobCard;
        });

    } catch (error) {
        container.innerHTML = `
            <div class="alert alert-danger w-100" role="alert">
                <strong>Connection Error:</strong> Could not load job listings. ${error.message}
            </div>
        `;
        console.error("Failed to fetch jobs:", error);
    }
}

document.addEventListener('DOMContentLoaded', fetchJobListings);