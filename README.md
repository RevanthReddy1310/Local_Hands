# Local Hands

**Find trusted local professionals for your home and personal service needs.**

![Local Hands Logo](assets/logo.jpg)

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Screenshots](#screenshots)
- [Project Structure](#project-structure)
- [Key Files](#key-files)
- [Team](#team)
- [License](#license)

---

## Overview

**Local Hands** is a web platform that connects users to reliable local service providers—such as plumbers, electricians, mechanics, cleaners, and more—right in their neighborhood. 
Users can effortlessly discover, book, and review experts for home repairs, appliance servicing, and various personal needs.

The solution streamlines both booking for users and profile creation for providers. Providers get a customizable profile with details like contact number, experience, specialties, and work photos.

---

## Features

- **Modern, Responsive UI:** Intuitive multi-page HTML/CSS/JS design offering smooth navigation across devices.
- **Service Discovery:** Interactive grid and map to view services and providers, filterable by category (appliances, vehicles, electronics, others).
- **Smart Booking:** Fast, simple booking flows save user info and bookings to local storage; booking status tracking included.
- **Provider Directory with Reviews:** Geomapped provider cards for each service showing experience, specialties, rates, and past reviews.
- **Provider Onboarding:** Form-based profile setup with image upload, password management, and detail validation.
- **Authentication:** Simple login/signup system.
- **Mobile Sidebar Menus:** Adapted for mobile users with sidebar navigation options.
- **Local Storage–Backed:** Data persistence via localStorage for bookings and user sessions.
- **Modern, Themed Styling:** Cohesive branding via style sheets and background imagery.

---

## How It Works

1. **Discover:** Start on the homepage and explore available services. Filter options help users drill down by category.
2. **View Providers:** On the "All Services" or map page, click service cards to view nearby providers.
3. **Book a Service:** Choose a provider, fill up the booking form, and submit your request.
4. **Track Bookings:** Use the booking status page to view pending and past bookings.
5. **Become a Provider:** Service experts can fill out the sign-up form with details, photos, and credentials.
6. **Login/Signup:** Auth flows allow users and providers to manage their bookings and profiles.

---

## Screenshots

- **Landing Page:** Carousel sliders, hero section, ‘About Us’, and feature highlight panels.
- **Services Page:** Dynamic filtering card grid.
- **Provider Map:** Interactive map with list of available providers, modal dialogs for detailed info.
- **Booking Form:** Detailed booking requests for users and provider registration forms with validation.

---

## Project Structure

```
/Local_Hands/
├── Allservices.html       # Service listing and discovery
├── Allservices.js         # Card filtering, rendering logic
├── Allservices.css        # Page-specific styles
├── booking.html           # Booking form for requesting services
├── booking.js             # Booking submission and local storage handling
├── booking.css            # Styling for booking section
├── booking-status.html    # Track/update user bookings
├── form.html              # Provider onboarding form
├── form.js                # Form validation, image preview logic
├── form.css               # Signup form styles
├── index.html             # Main landing page
├── myStyle.css            # Global branding and home styles
├── login.html             # Authentication UI
├── login.js               # Login/signup/forgot password logic
├── login.css              # Auth form styling
├── maps.html              # Provider search and details on interactive map
├── maps.js                # Map rendering, provider cards, modal handling
├── maps.css               # Map component and modal styles
├── script.js              # General-purpose JS (slider, sidebar toggles, etc)
└── assets/                # Images, videos, and static resources
```

---

## Key Files

### `index.html` & `myStyle.css`
- Homepage with hero banners, service highlights, about and team sections.
- Responsive navigation bar and footer.

### `Allservices.html` / `Allservices.js` / `Allservices.css`
- Dynamic grid of all available services with filtering by category and navigation to provider selection.

### `maps.html` / `maps.js` / `maps.css`
- Interactive provider locator. Users see nearby providers via Leaflet.js, click for full details, reviews, and booking.

### `booking.html` / `booking.js` / `booking.css`
- Booking form for users to submit requests for a chosen provider.
- Client-side storage of bookings.

### `form.html` / `form.js` / `form.css`
- Provider registration form with full validation and profile image upload.

### `login.html` / `login.js` / `login.css`
- Dual login/signup interface and forgot password dialog (client-side).

---

## Team

- **K. Tarun** (23MH1A4226) – FSD With React Native
- **G. Guru Charan** (23A91A1220) – FSD With React Native
- **S. Revanth Reddy** (23A91A12C1) – FSD With React Native
- **SK Thaheer** (23A91A1258) – FSD With React Native
- **Gopi Naidu** (23MH1A4255) – FSD With React Native
- **M. Bhuvan Raj** (23A91A1231) – FSD With React Native

---

## License

Project is for educational/demo purposes. For any questions, reach out to the team at `email@gmail.com`.

---

## Acknowledgments

- Uses Leaflet.js for interactive maps.
- Designed and developed as a university full-stack project at Aditya University / Technical Hub, Surampalem, Andhra Pradesh, India.
  
---
