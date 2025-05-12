// structured-data.js
const jsonData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Amitoshdeep Singh",
  "url": "https://amitx.netlify.app/",
  "image": "https://amitx.netlify.app/assets/og-preview.jpg",
  "sameAs": [
    "https://github.com/Amitoshdeep",
    "https://www.instagram.com/luv2lag",
    "https://www.linkedin.com/in/amitoshdeep/"
  ],
  "jobTitle": "Student / Full-Stack Developer",
  "worksFor": {
    "@type": "CollegeOrUniversity",
    "name": "Chitkara University"
  },
  "alumniOf": {
    "@type": "CollegeOrUniversity",
    "name": "Chitkara University"
  }
};

// Add the JSON-LD data to the document head
const script = document.createElement('script');
script.type = 'application/ld+json';
script.textContent = JSON.stringify(jsonData);
document.head.appendChild(script);
