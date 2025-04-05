
    const ADULT_PRICE = 1560;
    const CHILD_PRICE = 800;
    
    // Get DOM elements
    const adultsSelect = document.getElementById('adults');
    const childrenSelect = document.getElementById('children');
    const adultCount = document.getElementById('adult-count');
    const childCount = document.getElementById('child-count');
    const adultTotal = document.getElementById('adult-total');
    const childTotal = document.getElementById('child-total');
    const grandTotal = document.getElementById('grand-total');
    
    // Function to calculate and update prices
    function updatePrices() {
        const adults = parseInt(adultsSelect.value);
        const children = parseInt(childrenSelect.value);
        
        // Update counts
        adultCount.textContent = adults;
        childCount.textContent = children;
        
        // Calculate totals
        const adultTotalPrice = adults * ADULT_PRICE;
        const childTotalPrice = children * CHILD_PRICE;
        const totalPrice = adultTotalPrice + childTotalPrice;
        
        // Update displayed prices
        adultTotal.textContent = adultTotalPrice.toLocaleString();
        childTotal.textContent = childTotalPrice.toLocaleString();
        grandTotal.textContent = totalPrice.toLocaleString();
    }
    
    // Add event listeners
    adultsSelect.addEventListener('change', updatePrices);
    childrenSelect.addEventListener('change', updatePrices);
    
    // Initialize prices
    updatePrices();
    
    // Booking button functionality
    document.querySelector('.book-now').addEventListener('click', function() {
        const date = document.getElementById('tour-date').value;
        const adults = adultsSelect.value;
        const children = childrenSelect.value;
        
        if (!date) {
            alert('Please select a date for your tour.');
            return;
        }
        
    });