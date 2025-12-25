const products = [
    { 
        name: "Top 10 Interview Questions", 
        price: 5 
    },
    { 
        name: "Best CV Tricks", 
        price: 10 
    },
    { 
        name: "AI Plagiarism Check", 
        price: 15 
    },
    { 
        name: "Professional Resume Templates", 
        price: 20 
    },
    { 
        name: "Mock Interview Sessions", 
        price: 25 
    }
];

const tableBody = document.getElementById('pricing-body');

// Generate table rows
products.forEach((product, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.price}</td>
        <td>
            <input type="number" class="form-control quantity-input" 
                   data-index="${index}" value="0" min="0" 
                   oninput="updatePrice(${index}, ${product.price}, this.value)">
        </td>
        <td id="total-${index}">0.00</td>
    `;
    tableBody.appendChild(row);
});

// Update actual price per row
function updatePrice(index, price, quantity) {
    const totalElement = document.getElementById(`total-${index}`);
    const actualPrice = (price * (quantity || 0)).toFixed(2);
    totalElement.innerText = actualPrice;
}

// Show Modal with Calculations
function showTotalModal() {
    let grandTotal = 0;
    let itemCount = 0;
    const totals = document.querySelectorAll('[id^="total-"]');

    totals.forEach(item => {
        const val = parseFloat(item.innerText);
        if (val > 0) {
            grandTotal += val;
            itemCount++;
        }
    });

    const average = itemCount > 0 ? (grandTotal / itemCount) : 0;
    
    // Formatting modal content
    const modalBody = document.getElementById('modal-content');
    modalBody.innerHTML = `
        <p><strong>Total Price:</strong> $${grandTotal.toFixed(2)}</p>
        <hr>
        <p><strong>Average Price (of selected items):</strong> $${average.toFixed(2)}</p>
        <p><strong>Average Rounded Up:</strong> $${Math.ceil(average)}</p>
        <p><strong>Average Rounded Down:</strong> $${Math.floor(average)}</p>
    `;

    const myModal = new bootstrap.Modal(document.getElementById('summaryModal'));
    myModal.show();
}