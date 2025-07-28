# Spark Digital Agency

Welcome to the official code repository for the Spark Digital agency website. This project serves as our digital showcase, designed to demonstrate our capabilities in creating modern, responsive, and interactive web experiences.

## About Spark Digital

Spark Digital is a results-driven digital marketing agency. Our mission is to help businesses, from startups to established enterprises, grow and shine in the digital world. We believe in the power of data, creativity, and technology to forge strategies that not only capture attention but also deliver measurable results.

## Features

* **Multi-Page Structure:** A complete website with 5 distinct pages: Home, About, Services, Portfolio, and Contact.
* **Interactive Animations:** Utilizes the Intersection Observer API for scroll-based animations on elements like the statistics counter and company timeline.
* **Dynamic Filtering:** Both the Services and Portfolio pages feature dynamic, client-side filtering based on categories.
* **Interactive Tools:** Includes a real-time price calculator and a contact form with live input validation.
* **Third-Party Libraries:** Integrates Swiper.js for a smooth, auto-playing testimonials carousel and basicLightbox for a clean portfolio gallery.
* **Fully Responsive:** Designed to provide an optimal viewing experience across a wide range of devices, from mobile phones to desktops.

## Pages

| Page             | Description                                                 |
| ---------------- | ----------------------------------------------------------- |
| **`index.html`** | Homepage with hero section, services overview, and testimonials. |
| **`about.html`** | Company story with an interactive timeline and team showcase.     |
| **`services.html`**| Detailed service catalog with filtering and a price calculator. |
| **`portfolio.html`**| Showcase of projects with a filterable grid and lightbox gallery. |
| **`contact.html`** | Contact form with real-time validation, map, and FAQ section.   |

## Design Pattern Used

This project follows the **Modular Design Pattern** for its front-end structure to ensure scalability and maintainability.

* **Component Reuse:** Key components like the navigation bar are built once and reused across all pages, ensuring consistency and reducing code duplication.
* **Separation of Concerns:** The project strictly separates its structure (HTML), styling (CSS), and behavior (JavaScript) into different files. This makes the codebase cleaner and easier to debug.
* **Behavioral Patterns:**
    * **Observer Pattern (Lightweight):** The Intersection Observer API is used to trigger animations (e.g., counters, timeline) only when elements become visible. This is a highly efficient implementation of the observer pattern that improves performance.
    * **Module Pattern (Simplified):** The `main.js` file is structured to act as a simple router, conditionally loading specific modules (functions) based on the current page. This prevents scripts from one page from causing errors on another.

## Tech Stack

* HTML5 (Semantic)
* CSS3 (Flexbox, Grid, Animations)
* Vanilla JavaScript (ES6+)
* Swiper.js
* basicLightbox

## Running the Project Locally

To view this project on your machine:
1.  Ensure you have all the files from this repository.
2.  Open the `index.html` file in a modern web browser like Chrome or Firefox.

No installation or build process is required.
