function suggestTemplates() {
    const selectedSkills = new Set();
    const checkboxes = document.querySelectorAll('.form-check-input:checked');
    
    checkboxes.forEach(box => {
        selectedSkills.add(box.value);
    });

    const suggestionsContainer = document.getElementById('suggestions-list');
    suggestionsContainer.innerHTML = "";

    let suggestedTemplates = [];

    if (selectedSkills.has("HTML") || selectedSkills.has("CSS") || selectedSkills.has("JavaScript")) {
        suggestedTemplates.push("Developer");
        suggestedTemplates.push("Full Stack");
        suggestedTemplates.push("Frontend Developer");
    }

    if (selectedSkills.has("Photoshop") || selectedSkills.has("Illustrator") || selectedSkills.has("Sketch")) {
        suggestedTemplates.push("Designer");
        suggestedTemplates.push("Graphic Designer");
    }

    if (suggestedTemplates.length > 0) {
        suggestedTemplates.forEach(template => {
            const item = document.createElement('div');
            item.className = "list-group-item";
            item.innerText = template;
            suggestionsContainer.appendChild(item);
        });
    } else {
        suggestionsContainer.innerHTML = "<p class='text-muted p-3'>Select skills to see suggestions.</p>";
    }
}