 // This replaces your entire maps.js file
let map;
let userLocation = { lat: 17.09, lng: 82.07 };
let userMarker = null;
let providers = [];
let providerMarkers = [];
let currentProviderId = null;

const provs = [
    {
        id: "Plumber",
        providersData: [
            { id: 1, name: "Rajesh Kumar", service: "plumber", lat: 17.0601, lng: 82.0256, rating: 4.8, reviews: 156, phone: "+91-9876543210", experience: "8 years", availability: "available", hourlyRate: "₹300/hr", specialties: ["Pipe Repair", "Bathroom Fitting", "Water Heater Installation"], distanceKm: 2, address: "101, Main Road, Surampalem", contactEmail: "rajesh.plumbing@example.com", bookedMe: [], workPhotos: ["https://via.placeholder.com/200x150?text=Plumbing+Work+1", "https://via.placeholder.com/200x150?text=Bathroom+Fix+2"], customerReviews: [{ name: "Priya S.", text: "Rajesh did an excellent job fixing our leaking pipe. Very professional!", rating: 5 }, { name: "Anil K.", text: "Quick and efficient service. Highly recommend for any plumbing needs.", rating: 4.5 }, { name: "Sneha R.", text: "He was very polite and explained everything clearly. Good value for money.", rating: 5 }] },
            { id: 2, name: "Shyam Lal", service: "plumber", lat: 17.0620, lng: 82.0280, rating: 4.6, reviews: 203, phone: "+91-9876543211", experience: "12 years", availability: "available", hourlyRate: "₹400/hr", specialties: ["Drain Cleaning", "Leak Detection", "Geyser Repair"], distanceKm: 4, address: "B-205, Green Park, Surampalem", contactEmail: "shyam.plumber@example.com", bookedMe: [], workPhotos: ["https://via.placeholder.com/200x150?text=Drain+Clean+1", "https://via.placeholder.com/200x150?text=Leak+Detect+2"], customerReviews: [{ name: "Rahul M.", text: "Shyam Lal is highly experienced. Solved our complex drain issue quickly.", rating: 5 }, { name: "Divya P.", text: "Reliable and fair pricing. Would call again for sure.", rating: 4 }, { name: "Vijay C.", text: "Found the hidden leak that others missed. Very satisfied.", rating: 4.5 }] },
        ],
    },
    {
        id: "Car Mechanic",
        providersData: [
            { id: 1, name: "Suresh Kumar", service: "mechanic", lat: 17.0580, lng: 82.0300, rating: 4.8, reviews: 156, phone: "+91-9876543210", experience: "8 years", availability: "available", hourlyRate: "₹300/hr", specialties: ["Engine Repair", "Brake Service", "Oil Change"], distanceKm: 2, address: "101, Main Road, Surampalem", contactEmail: "suresh.mechanic@example.com", bookedMe: [], workPhotos: ["https://via.placeholder.com/200x150?text=Engine+Repair+1", "https://via.placeholder.com/200x150?text=Brake+Service+2"], customerReviews: [{ name: "Priya S.", text: "Suresh did an excellent job fixing my car engine. Very professional!", rating: 5 }, { name: "Anil K.", text: "Quick and efficient car service. Highly recommend for any mechanic needs.", rating: 4.5 }, { name: "Sneha R.", text: "He was very polite and explained everything clearly. Good value for money.", rating: 5 }] },
            { id: 2, name: "Tarun Lal", service: "mechanic", lat: 17.0550, lng: 82.0200, rating: 4.6, reviews: 203, phone: "+91-9876543211", experience: "12 years", availability: "available", hourlyRate: "₹400/hr", specialties: ["Tyre Puncture", "Battery Check", "AC Repair"], distanceKm: 4, address: "B-205, Green Park, Surampalem", contactEmail: "tarun.mechanic@example.com", bookedMe: [], workPhotos: ["https://via.placeholder.com/200x150?text=Tyre+Puncture+1", "https://via.placeholder.com/200x150?text=Battery+Check+2"], customerReviews: [{ name: "Rahul M.", text: "Tarun Lal is highly experienced. Solved our complex car issue quickly.", rating: 5 }, { name: "Divya P.", text: "Reliable and fair pricing. Would call again for sure.", rating: 4 }, { name: "Vijay C.", text: "Found the hidden car issue that others missed. Very satisfied.", rating: 4.5 }] },
        ],
    },
    {
        id: "AC and Services",
        providersData: [
            { id: 1, name: "Sandeep Kumar", service: "ac", lat: 17.0610, lng: 82.0270, rating: 4.7, reviews: 120, phone: "+91-9988776655", experience: "10 years", availability: "available", hourlyRate: "₹350/hr", specialties: ["AC Installation", "AC Repair", "Gas Refill"], distanceKm: 3, address: "201, Park Avenue, Surampalem", contactEmail: "sandeep.ac@example.com", bookedMe: [], workPhotos: ["https://via.placeholder.com/200x150?text=AC+Installation", "https://via.placeholder.com/200x150?text=AC+Repair"], customerReviews: [{ name: "Rajesh K.", text: "Sandeep was very quick and professional. My AC is working great now.", rating: 5 }, { name: "Meena P.", text: "Highly skilled and friendly. Fixed the AC in no time.", rating: 4.5 }] },
            { id: 2, name: "Vinod Singh", service: "ac", lat: 17.0595, lng: 82.0235, rating: 4.5, reviews: 95, phone: "+91-9876123456", experience: "7 years", availability: "busy", hourlyRate: "₹300/hr", specialties: ["AC Servicing", "Filter Cleaning", "Split AC Installation"], distanceKm: 6, address: "Flat 502, Sky Towers, Surampalem", contactEmail: "vinod.ac@example.com", bookedMe: [], workPhotos: ["https://via.placeholder.com/200x150?text=AC+Servicing", "https://via.placeholder.com/200x150?text=Filter+Cleaning"], customerReviews: [{ name: "Arun V.", text: "Good service, a little slow but the work was excellent.", rating: 4 }, { name: "Sarita N.", text: "Very thorough with the cleaning and explained the process well.", rating: 5 }] },
        ],
    },
    {
        id: "Electronics",
        providersData: [
            { id: 1, name: "Amit Sharma", service: "electronics", lat: 17.0625, lng: 82.0295, rating: 4.9, reviews: 500, phone: "+91-9812345678", experience: "15 years", availability: "available", hourlyRate: "₹500/hr", specialties: ["Laptop Repair", "Mobile Screen Fix", "TV Installation"], distanceKm: 1.5, address: "Shop 1, Tech Plaza, Surampalem", contactEmail: "amit.electronics@example.com", bookedMe: [], workPhotos: ["https://via.placeholder.com/200x150?text=Laptop+Repair", "https://via.placeholder.com/200x150?text=Mobile+Fix", "https://via.placeholder.com/200x150?text=TV+Install"], customerReviews: [{ name: "Alok V.", text: "Amit is an expert. Fixed my laptop motherboard quickly.", rating: 5 }, { name: "Swathi P.", text: "My phone's broken screen was replaced perfectly.", rating: 5 }] },
            { id: 2, name: "Rahul Das", service: "electronics", lat: 17.0650, lng: 82.0310, rating: 4.5, reviews: 320, phone: "+91-9988775544", experience: "10 years", availability: "busy", hourlyRate: "₹450/hr", specialties: ["Camera Sensor Cleaning", "Printer Repair", "Mobile Battery Replacement"], distanceKm: 3.2, address: "45, Market Street, Surampalem", contactEmail: "rahul.electronics@example.com", bookedMe: [], workPhotos: ["https://via.placeholder.com/200x150?text=Camera+Repair", "https://via.placeholder.com/200x150?text=Printer+Fix"], customerReviews: [{ name: "Preeti R.", text: "Fast and reliable service for my printer. Highly recommended.", rating: 4.5 }, { name: "Karthik A.", text: "Got my camera sensor cleaned, excellent job!", rating: 5 }] },
        ],
    },
    {
        id: "Appliances",
        providersData: [
            { id: 1, name: "Vinay Reddy", service: "appliances", lat: 17.0630, lng: 82.0285, rating: 4.6, reviews: 250, phone: "+91-9012345678", experience: "9 years", availability: "available", hourlyRate: "₹350/hr", specialties: ["Refrigerator Repair", "Washing Machine Fix", "Microwave Repair"], distanceKm: 2.5, address: "78, City Center, Surampalem", contactEmail: "vinay.appliances@example.com", bookedMe: [], workPhotos: ["https://via.placeholder.com/200x150?text=Refrigerator+Repair+1", "https://via.placeholder.com/200x150?text=Washing+Machine+Fix+2"], customerReviews: [{ name: "Deepika S.", text: "Fixed my refrigerator's compressor. Very knowledgeable.", rating: 5 }, { name: "Sanjay N.", text: "Came on time and fixed the issue with my washing machine.", rating: 4.5 }] },
        ],
    },
    {
        id: "Other Services",
        providersData: [
            { id: 1, name: "Ramesh P.", service: "other", lat: 17.0605, lng: 82.0260, rating: 4.4, reviews: 180, phone: "+91-9123456789", experience: "11 years", availability: "available", hourlyRate: "₹250/hr", specialties: ["Fan Repair", "Elevator Maintenance", "General Repairs"], distanceKm: 4.0, address: "10, Industrial Area, Surampalem", contactEmail: "ramesh.other@example.com", bookedMe: [], workPhotos: ["https://via.placeholder.com/200x150?text=Fan+Repair+1", "https://via.placeholder.com/200x150?text=Elevator+Maintenance+2"], customerReviews: [{ name: "Prabhu M.", text: "Ramesh fixed my noisy fan. Good service!", rating: 4 }, { name: "Sunita G.", text: "Prompt and professional elevator maintenance.", rating: 5 }] },
        ],
    },
];

const providerDetailsModal = document.getElementById("providerDetailsModal");
const closeButton = document.querySelector(".close-button");
const modalProviderDetails = document.getElementById("modalProviderDetails");
const modalWorkPhotos = document.getElementById("modalWorkPhotos");
const modalCustomerReviews = document.getElementById("modalCustomerReviews");
const modalBookNowBtn = document.getElementById("modalBookNowBtn");
const providersListContainer = document.getElementById("providersList");

function getUrlParameter(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    const results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function initMap() {
    map = L.map("map").setView([userLocation.lat, userLocation.lng], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: "© OpenStreetMap contributors",
    }).addTo(map);

    const storedServiceId = getUrlParameter('service') || 'Plumber';
    updateService(storedServiceId);

    userMarker = L.marker([userLocation.lat, userLocation.lng], {
        icon: L.divIcon({
            html: '<div style="color: #ff4500; font-size: 1.7rem;"><i class="fa-solid fa-location-dot"></i></div>',
            iconSize: [40, 40],
            className: "user-marker",
        }),
    }).addTo(map);
    userMarker.bindPopup(
        "<b> Your Location</b><br>Aditya University, Surampalem, Andhra Pradesh"
    );
    
    modalBookNowBtn.onclick = () => {
        if (currentProviderId) {
            localStorage.setItem('likedServiceId', getUrlParameter('service') || 'Plumber');
            localStorage.setItem('likedServiceProvider', currentProviderId);
            window.location.href = '/booking.html';
        } else {
            alert("No provider selected for booking.");
        }
    };
}

function updateProvidersNearUser() {
    if (!userLocation) return;
    const R = 6371;

    providers.forEach((provider) => {
        const distance = provider.distanceKm;
        const bearing = Math.random() * 360;
        const latRad = (userLocation.lat * Math.PI) / 180;
        const lngRad = (userLocation.lng * Math.PI) / 180;
        const bearingRad = (bearing * Math.PI) / 180;

        const newLatRad = Math.asin(
            Math.sin(latRad) * Math.cos(distance / R) +
            Math.cos(latRad) * Math.sin(distance / R) * Math.cos(bearingRad)
        );

        const newLngRad =
            lngRad +
            Math.atan2(
                Math.sin(bearingRad) * Math.sin(distance / R) * Math.cos(latRad),
                Math.cos(distance / R) - Math.sin(latRad) * Math.sin(newLatRad)
            );

        provider.lat = (newLatRad * 180) / Math.PI;
        provider.lng = (newLngRad * 180) / Math.PI;
    });
}

function updateDisplay() {
    displayProvidersOnMap();
    updateProvidersList();
}

function displayProvidersOnMap() {
    providerMarkers.forEach((marker) => map.removeLayer(marker));
    providerMarkers = [];

    const filteredProviders = getFilteredProviders();

    filteredProviders.forEach((provider) => {
        const availabilityColors = {
            available: "green",
            busy: "orange",
            offline: "red",
        };

        const marker = L.marker([provider.lat, provider.lng], {
            icon: L.divIcon({
                html: `<div style="color: ${
                    availabilityColors[provider.availability] || "blue"
                }; font-size: 1.8rem;"><i class="fa-solid fa-location-dot"></i></div>`,
                iconSize: [30, 30],
                className: "provider-marker",
            }),
        }).addTo(map);

        const distance = userLocation ?
            calculateDistance(
                userLocation.lat,
                userLocation.lng,
                provider.lat,
                provider.lng
            ) :
            "Unknown";

        const eta = userLocation ? calculateETA(distance) : "Unknown";

        marker.bindPopup(`
                <div style="min-width: 250px;">
                    <h4>${provider.name}</h4>
                    <p><strong>Service:</strong> ${
                        provider.service.charAt(0).toUpperCase() +
                        provider.service.slice(1)
                    }</p>
                    <p><strong>Rating:</strong> <span style="color: #ffc107;"><i class="fa-solid fa-star"></i> ${
                        provider.rating
                    }</span> (${provider.reviews} reviews)</p>
                    <p><strong>Experience:</strong> ${provider.experience}</p>
                    <p><strong>Rate:</strong> ${provider.hourlyRate}</p>
                    <p><strong>Distance:</strong> <i class="fa-solid fa-location-dot"></i> ${distance} away • <strong>ETA:</strong> <i class="fa-solid fa-clock"></i> ${eta} arrival time</p>
                    <p><strong>Status:</strong> <span class="availability-badge ${
                        provider.availability
                    }">${provider.availability.toUpperCase()}</span></p>
                </div>
            `);

        providerMarkers.push(marker);
    });
}

function getFilteredProviders() {
    return providers;
}

function updateProvidersList() {
    const listDiv = document.getElementById("providersList");
    const filteredProviders = getFilteredProviders();

    if (filteredProviders.length === 0) {
        listDiv.innerHTML =
            '<div class="loading">No professionals found in your area for this service.</div>';
        return;
    }

    let html = "";
    filteredProviders.forEach((provider) => {
        const distance = userLocation ?
            calculateDistance(
                userLocation.lat,
                userLocation.lng,
                provider.lat,
                provider.lng
            ) :
            "Distance unknown";

        const eta = userLocation ? calculateETA(distance) : "Unknown";

        html += `
                <div class="provider-card">
                    <div class="provider-header">
                        <div class="provider-name">${provider.name}</div>
                        <div class="availability-badge ${
                            provider.availability
                        }">${provider.availability.toUpperCase()}</div>
                    </div>

                    <div class="provider-info">
                        <strong>${
                            provider.service.charAt(0).toUpperCase() +
                            provider.service.slice(1)
                        }</strong> • ${provider.experience} experience<br>
                        <strong>Rate:</strong> ${provider.hourlyRate}
                    </div>

                    <div class="rating-section">
                        <span class="stars"><i class="fa-solid fa-star"></i> ${
                            provider.rating
                        }</span>
                        <span>(${provider.reviews} reviews)</span>
                    </div>

                    <div class="provider-info">
                        <strong>Specialties:</strong> ${provider.specialties.join(
                            ", "
                        )}
                    </div>

                    <div class="distance-time">
                        <i class="fa-solid fa-location-dot"></i> ${distance} away • <strong>ETA:</strong> <i class="fa-solid fa-clock"></i> ${eta} arrival time
                    </div>

                    <div class="action-buttons">
                        <button class="btn btn-small btn-details" data-provider-id="${
                            provider.id
                        }">View Full Details</button>
                    </div>
                </div>
            `;
    });

    listDiv.innerHTML = html;

    document.querySelectorAll(".btn-details").forEach((button) => {
        button.addEventListener("click", function() {
            const providerId = parseInt(this.dataset.providerId);
            viewFullDetails(providerId);
        });
    });
}

function viewFullDetails(providerId) {
    const serviceId = getUrlParameter('service');
    let providerFound = null;
    const serviceCategory = provs.find(category => category.id === serviceId);

    if (serviceCategory) {
        providerFound = serviceCategory.providersData.find(p => p.id === providerId);
    }
    
    if (providerFound) {
        currentProviderId = providerFound.id;
        const serviceNameDisplay = serviceId || 'Plumber';

        let detailsHtml = `
            <p><strong>Name:</strong> ${providerFound.name}</p>
            <p><strong>Service:</strong> ${serviceNameDisplay}</p>
            <p><strong>Address:</strong> ${providerFound.address}</p>
            <p><strong>Contact:</strong> ${providerFound.phone} | ${providerFound.contactEmail}</p>
            <p><strong>Experience:</strong> ${providerFound.experience}</p>
            <p><strong>Hourly Rate:</strong> ${providerFound.hourlyRate}</p>
            <p><strong>Specialties:</strong> ${providerFound.specialties.join(", ")}</p>
            <p><strong>Availability:</strong> <span class="availability-badge ${providerFound.availability}">${providerFound.availability.toUpperCase()}</span></p>
        `;
        modalProviderDetails.innerHTML = detailsHtml;

        let photosHtml = "";
        if (providerFound.workPhotos && providerFound.workPhotos.length > 0) {
            providerFound.workPhotos.forEach((photoUrl) => {
                photosHtml += `<img src="${photoUrl}" alt="Work Photo for ${providerFound.name}">`;
            });
        } else {
            photosHtml = "<p>No work photos available.</p>";
        }
        modalWorkPhotos.innerHTML = photosHtml;

        displayCustomerReviews(providerFound);
        providerDetailsModal.style.display = "flex";
    } else {
        alert("Provider details not found for the selected service.");
    }
}

function displayCustomerReviews(provider) {
    let reviewsHtml = "";
    if (provider.customerReviews && provider.customerReviews.length > 0) {
        const sortedReviews = [...provider.customerReviews].reverse();
        sortedReviews.forEach((review) => {
            reviewsHtml += `
                <div class="review-item">
                    <p class="review-text">"${review.text}"</p>
                    <p class="reviewer-name">- ${review.name} (${review.rating} <i class="fa-solid fa-star"></i>)</p>
                </div>
            `;
        });
    } else {
        reviewsHtml = "<p>No reviews yet. Be the first to review!</p>";
    }
    modalCustomerReviews.innerHTML = reviewsHtml;
}

closeButton.addEventListener("click", function() {
    providerDetailsModal.style.display = "none";
});

window.addEventListener("click", function(event) {
    if (event.target == providerDetailsModal) {
        providerDetailsModal.style.display = "none";
    }
});

function calculateDistance(lat1, lng1, lat2, lng2) {
    const R = 6371;
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLng = ((lng2 - lng1) * Math.PI) / 180;
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLng / 2) *
        Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance < 1 ?
        `${Math.round(distance * 1000)}m` :
        `${distance.toFixed(1)}km`;
}

function calculateETA(distanceStr) {
    const distance = parseFloat(distanceStr);
    if (isNaN(distance)) return "Unknown";

    const timeInHours = distance / 30;
    const timeInMinutes = Math.round(timeInHours * 60);

    if (timeInMinutes < 60) {
        return `${timeInMinutes} mins`;
    } else {
        const hours = Math.floor(timeInMinutes / 60);
        const mins = timeInMinutes % 60;
        return `${hours}h ${mins}m`;
    }
}

// This replaces your updateService function within the maps.js file.

function updateService(serviceId) {
    const serviceCategory = provs.find(category => category.id === serviceId);
    if (serviceCategory) {
        providers = serviceCategory.providersData;
        
        // This line is changed to only show the service name in the heading.
        // document.querySelector("h3").innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> Available ${serviceId}s`;
        
        updateProvidersNearUser();
        updateDisplay();
    } else {
        providers = [];
        // This line is changed to remove the extra text from the status indicator.
        // document.getElementById("locationStatus").innerHTML = `<i class="fa-solid fa-circle-check"></i> `;
        // document.querySelector("h3").innerHTML = `<i class="fa-solid fa-magnifying-glass"></i> No Service Found`;
        updateProvidersNearUser();
        updateDisplay();
    }
}

window.onload = function() {
    initMap();
};

function openMenu() {
    document.getElementById('sidebar').style.display = 'flex';
}

function closeMenu() {
    document.getElementById('sidebar').style.display = 'none';
}