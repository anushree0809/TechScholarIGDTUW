
const scholarships = [
    {
        id: "pm-scholarship",
        title: "PM Scholarship",
        description: "This scholarship is aimed at students with exceptional leadership potential, helping them pursue higher education with ease.",
        image: '../assets/sch1.jpg'
    },
    {
        id: "academic-skills",
        title: "Great Academic Skills Scholarship",
        description: "Awarded to students who excel academically, this scholarship helps you continue your studies at top universities.",
        image: "../assets/sch2.webp"
    },
    {
        id: "smile-2025",
        title: "Smile Scholarships 2025",
        description: "The Smile Scholarships 2025 is for students who show resilience and positive attitude, aiming to make a difference in society.",
        image: "../assets/sch4.jpg"
    }
];

// Function to render the scholarships on the page
function renderScholarships() {
    const scholarshipList = document.getElementById('scholarships');

    scholarships.forEach(scholarship => {
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

        // Learn More button (Dynamic Link)
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

// Call the function to populate the page
renderScholarships();

