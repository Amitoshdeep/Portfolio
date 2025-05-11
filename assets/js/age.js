const birthDate = new Date("2006-08-18T00:00:00"); // Replace with your DOB

function updateAge() {
    const now = new Date();
    const ageInMs = now - birthDate;
    const ageInYears = ageInMs / (1000 * 60 * 60 * 24 * 365.25);
    document.getElementById("age").textContent = ageInYears.toFixed(9);
}

updateAge(); // Initial call
setInterval(updateAge, 100); // Update 100 m'second