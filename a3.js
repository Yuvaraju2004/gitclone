// Show a section and hide all others
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

// Hide a section
function hideSection(sectionId) {
    document.getElementById(sectionId).style.display = 'none';
}

// Show sign-in form and hide login form
function showSignIn() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signInForm').style.display = 'block';
}

// Update ideal weight based on gender and height
function updateWeight() {
    let gender = document.getElementById("gender").value;
    let height = parseInt(document.getElementById("height").value);

    let weightChart = {
        male: {
            140: "40-50 kg", 145: "42-53 kg", 150: "45-56 kg", 155: "48-61 kg", 160: "50-65 kg", 
            165: "53-70 kg", 170: "56-75 kg", 175: "60-81 kg", 180: "64-87 kg", 185: "68-93 kg", 
            190: "72-99 kg", 195: "75-105 kg", 200: "80-110 kg", 205: "85-115 kg", 210: "90-120 kg"
        },
        female: {
            140: "39-48 kg", 145: "41-50 kg", 150: "43-54 kg", 155: "46-58 kg", 160: "49-63 kg", 
            165: "52-68 kg", 170: "55-73 kg", 175: "58-78 kg", 180: "62-84 kg", 185: "65-90 kg",
            190: "68-95 kg", 195: "70-100 kg", 200: "72-105 kg"
        }
    };

    if (gender && height && weightChart[gender] && weightChart[gender][height]) {
        document.getElementById("result").innerText = "Ideal Weight: " + weightChart[gender][height];
    } else {
        document.getElementById("result").innerText = "Ideal Weight: --";
    }
}

// Show gender options for workouts
function showGenderOptions() {
    document.getElementById('gender-options').style.display = 'flex';
    document.getElementById('malePlan').style.display = 'none';
    document.getElementById('femalePlan').style.display = 'none';
}

// Show workout plan based on gender selection
function showWorkout(gender) {
    document.getElementById("malePlan").style.display = gender === "male" ? "block" : "none";
    document.getElementById("femalePlan").style.display = gender === "female" ? "block" : "none";
}
// Apply blur effect to background
function addBlur() {
    document.querySelector('.background').classList.add('blurred');
}

// Remove blur effect from background
function removeBlur() {
    document.querySelector('.background').classList.remove('blurred');
}

 