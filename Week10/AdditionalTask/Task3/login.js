function initiateLogin() {
    const loginBtn = document.getElementById('loginBtn');
    const countdownArea = document.getElementById('countdown-area');
    
    loginBtn.disabled = true;
    countdownArea.style.display = "block";

    startSubmissionCountdown(5, showSessionModal);
}

function startSubmissionCountdown(duration, callback) {
    let timeLeft = duration;
    const display = document.getElementById('seconds-left');
    display.innerText = timeLeft;

    const timer = setInterval(() => {
        timeLeft--;
        display.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            callback(); 
        }
    }, 1000);
}

function showSessionModal() {
    const now = new Date();
    const timeString = now.toLocaleString();
    
    localStorage.setItem('sessionStartTime', now.getTime());

document.getElementById('startTimeMsg').innerText = `Your session will start at: ${timeString}`;
    
    const myModal = new bootstrap.Modal(document.getElementById('sessionModal'));
    myModal.show();
}

function finalizeLogin() {
    window.location.href = "landingPage.html";
}