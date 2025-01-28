// Scholarship details data
const scholarshipDetails = {
    "pm-scholarship": {
        title: "PM Scholarship",
        image: "../assets/sch1.jpg",
        eligibility: "Must be a student with exceptional leadership potential and pursuing higher education.",
        applicationProcess: "Apply online through the national scholarship portal with required documents.",
        documents: ["10th and 12th Marksheet", "Identity Proof", "Proof of Leadership Activities"]
    },
    "academic-skills": {
        title: "Great Academic Skills Scholarship",
        image: "../assets/sch2.webp",
        eligibility: "Awarded to students excelling academically at top universities.",
        applicationProcess: "Submit an online application with academic transcripts and recommendation letters.",
        documents: ["Academic Transcripts", "Letter of Recommendation", "Statement of Purpose"]
    },
    "smile-2025": {
        title: "Smile Scholarships 2025",
        image: "../assets/sch4.jpg",
        eligibility: "For students who demonstrate resilience and positive contributions to society.",
        applicationProcess: "Apply through the NGO’s official website with supporting documents.",
        documents: ["Essay on Social Contributions", "Academic Records", "Proof of Financial Need"]
    }
};

// Get the scholarship ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const scholarshipId = urlParams.get('id');

// Populate the page if a valid scholarship is selected
if (scholarshipDetails[scholarshipId]) {
    document.getElementById("scholarship-title").textContent = scholarshipDetails[scholarshipId].title;
    document.getElementById("scholarship-image").src = scholarshipDetails[scholarshipId].image;
    document.getElementById("eligibility-text").textContent = scholarshipDetails[scholarshipId].eligibility;
    document.getElementById("application-process-text").textContent = scholarshipDetails[scholarshipId].applicationProcess;

    // Populate documents list
    const documentsList = document.getElementById("documents-list");
    documentsList.innerHTML = "";
    scholarshipDetails[scholarshipId].documents.forEach(doc => {
        let li = document.createElement("li");
        li.textContent = doc;
        documentsList.appendChild(li);
    });
} else {
    document.getElementById("scholarship-title").textContent = "Scholarship Not Found";
}
