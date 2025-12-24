function generateCV() {
    const name = document.querySelector('#input-name').value;
    const title = document.querySelector('#input-title').value;
    const expText = document.querySelector('#input-experience').value;
    const skillsText = document.querySelector('#input-skills').value;

    document.getElementById('cv-output').classList.remove('d-none');
    document.getElementById('form-container').classList.add('d-none');
    document.querySelector('.cv-sidebar').style.backgroundColor = '#2c3e50';

    document.getElementById('display-name').innerHTML = name;
    document.getElementById('display-title').innerHTML = title;

    renderList(expText, 'experience-list');
    renderList(skillsText, 'skills-list');
};

function renderList(text, targetId) {
    const listElement = document.getElementById(targetId);
    
    console.log(`Updating ${targetId} with text: "${text}"`);

    if (!listElement) {
        console.error("Could not find ID:", targetId);
        return;
    }

    listElement.innerHTML = "";
    const items = text.split(',');

    items.forEach(item => {
        if (item.trim() !== "") {
            const li = document.createElement('li');
            li.textContent = item.trim();
            listElement.appendChild(li);
        }
    });
};

function processCommaList(rawData, targetId) {
    console.log("Processing data for:", targetId, "Data:", rawData); // Add this line!
    const listElement = document.getElementById(targetId);
    
    if (!listElement) {
        console.error("Could not find element with ID:", targetId);
        return;
    }

    const items = rawData.split(',');
    items.forEach(item => {
        if (item.trim() !== "") {
            const li = document.createElement('li');
            li.textContent = item.trim();
            listElement.appendChild(li);
        }
    });
}