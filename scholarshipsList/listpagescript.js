const scholarships = [
    {
        id: "pm-scholarship",
        title: "PM Scholarship",
        description: "This scholarship is aimed at students with exceptional leadership potential, helping them pursue higher education with ease.",
        image: '../assets/sch1.jpg',
        category: "General",
        location: "Inside Delhi"
    },
    {
        id: "academic-skills",
        title: "Great Academic Skills Scholarship",
        description: "Awarded to students who excel academically, this scholarship helps you continue your studies at top universities.",
        image: "../assets/sch2.webp",
        category: "EWS",
        location: "Outside Delhi"
    },
    {
        id: "smile-2025",
        title: "Smile Scholarships 2025",
        description: "The Smile Scholarships 2025 is for students who show resilience and positive attitude, aiming to make a difference in society.",
        image: "../assets/sch4.jpg",
        category: "SC/ST",
        location: "Inside Delhi"
    },
    {
        id: "national-merit",
        title: "National Merit Scholarship",
        description: "A prestigious scholarship for students who have excelled academically in their board exams.",
        image: "../assets/sch3.jpg",
        category: "General",
        location: "Outside Delhi"
    },
    {
        id: "women-tech",
        title: "Women in Technology Scholarship",
        description: "This scholarship supports female students pursuing careers in technology and engineering.",
        image: "../assets/sch2.webp",
        category: "OBC",
        location: "Inside Delhi"
    },
    {
        id: "need-based-aid",
        title: "Need-Based Financial Aid",
        description: "Designed for students from economically weaker sections to support their higher education.",
        image: "../assets/sch1.jpg",
        category: "EWS",
        location: "Inside Delhi"
    },
    {
        id: "sports-talent",
        title: "Sports Talent Scholarship",
        description: "Awarded to outstanding student-athletes who balance academics and sports.",
        image: "../assets/sch2.webp",
        category: "SC/ST",
        location: "Outside Delhi"
    },
    {
        id: "arts-excellence",
        title: "Arts Excellence Grant",
        description: "Encourages students excelling in arts and creative fields to pursue their passion.",
        image: "../assets/sch1.jpg",
        category: "General",
        location: "Inside Delhi"
    }
];

// Function to render scholarships dynamically
function renderScholarships(filteredScholarships = scholarships) {
    const scholarshipList = document.getElementById('scholarships');
    scholarshipList.innerHTML = ""; // Clear previous results

    filteredScholarships.forEach(scholarship => {
        const scholarshipCard = document.createElement('div');
        scholarshipCard.classList.add('scholarship-card');

        // Card image
        const image = document.createElement('img');
        image.src = scholarship.image;
        image.alt = scholarship.title;

        // Card content
        const content = document.createElement('div');
        content.classList.add('scholarship-card-content');

        const title = document.createElement('h3');
        title.classList.add('scholarship-title');
        title.textContent = scholarship.title;

        const description = document.createElement('p');
        description.classList.add('scholarship-description');
        description.textContent = scholarship.description;

        // Learn More button
        const learnMoreButton = document.createElement('a');
        learnMoreButton.classList.add('learn-more-btn');
        learnMoreButton.href = `../individual/HTML.html?id=${scholarship.id}`;
        learnMoreButton.textContent = 'Learn More';

        content.appendChild(title);
        content.appendChild(description);
        content.appendChild(learnMoreButton);

        // Append image and content to the card
        scholarshipCard.appendChild(image);
        scholarshipCard.appendChild(content);

        // Append card to the scholarship list
        scholarshipList.appendChild(scholarshipCard);
    });
}

// Function to filter scholarships based on search, location, and category
function filterScholarships() {
    const searchText = document.getElementById("searchInput").value.toLowerCase();
    const selectedLocation = document.getElementById("locationFilter").value;
    const selectedCategory = document.getElementById("categoryFilter").value;

    const filtered = scholarships.filter(scholarship => {
        const matchesSearch = scholarship.title.toLowerCase().includes(searchText);
        const matchesLocation = selectedLocation === "all" || scholarship.location === selectedLocation;
        const matchesCategory = selectedCategory === "all" || scholarship.category === selectedCategory;
        return matchesSearch && matchesLocation && matchesCategory;
    });

    renderScholarships(filtered);
}

// Event Listeners for Search and Filters
document.getElementById("searchInput").addEventListener("input", filterScholarships);
document.getElementById("locationFilter").addEventListener("change", filterScholarships);
document.getElementById("categoryFilter").addEventListener("change", filterScholarships);

document.getElementById("filterButton").addEventListener("click", function () {
    document.getElementById("filterContainer").classList.add("show-sidebar");
});

document.getElementById("closeFilter").addEventListener("click", function () {
    document.getElementById("filterContainer").classList.remove("show-sidebar");
});


// Initial rendering
renderScholarships();
