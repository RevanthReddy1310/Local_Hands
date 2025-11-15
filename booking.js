document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('booking-form');
    bookingForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const customerName = document.getElementById('name').value;
        const customerPhone = document.getElementById('phone').value;
        const issueDescription = document.getElementById('issue').value;
        const customerAddress = document.getElementById('address').value;

        // Get provider data from the left panel using the original IDs
        const providerName = document.getElementById('providerName').textContent;
        const providerCategory = document.getElementById('providerCategory').textContent;
        const providerPhone = document.getElementById('providerPhone').textContent;
        const providerEmail = document.getElementById('providerEmail').textContent;

        // Create the new booking object
        const newBooking = {
            id: Date.now(),
            issue: issueDescription,
            providerName: providerName,
            providerCategory: providerCategory,
            customerName: customerName,
            phone: customerPhone,
            email: providerEmail,
            address: customerAddress,
            bookingTime: new Date().toISOString(),
            status: 'Pending'
        };

        // Load existing bookings from local storage
        let bookings = JSON.parse(localStorage.getItem('userBookings')) || [];

        // Add the new booking
        bookings.push(newBooking);

        // Save the updated bookings to local storage
        localStorage.setItem('userBookings', JSON.stringify(bookings));

        // Redirect to the booking status page
        window.location.href = 'booking-status.html';
    });
});