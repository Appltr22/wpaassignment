function calculateBMI() {
    // Get the height and weight values from the input fields
    let height = document.getElementById('height').value;
    let weight = document.getElementById('weight').value;

    // Convert height from cm to meters for BMI calculation
    height = height / 100;

    // Calculate BMI
    let bmi = weight / (height * height);

    // Round the BMI to two decimal places
    bmi = bmi.toFixed(2);

    // Determine the BMI category and set the GIF
    let category = '';
    let gif = ''; // Variable for the GIF URL

    if (bmi < 18.5) {
        category = 'Underweight';
        gif = 'underweight.gif'; // Replace with the path to your underweight GIF
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normal weight';
        gif = 'mrbean.gif'; // Replace with the path to your normal weight GIF
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Overweight';
        gif = 'overweight.gif'; // Replace with the path to your overweight GIF
    } else {
        category = 'Obesity';
        gif = 'obesity.gif'; // Replace with the path to your obesity GIF
    }

    // Display the result
    document.getElementById('result').innerHTML = `Your BMI is ${bmi} (${category}).`;

    // Check if a GIF should be displayed
    if (gif !== '') {
        // Remove any existing GIF
        let existingGif = document.getElementById('bmiGif');
        if (existingGif) {
            existingGif.remove();
        }

        // Create an image element for the GIF
        let img = document.createElement('img');
        img.src = gif;
        img.alt = `${category} GIF`;
        img.id = 'bmiGif'; // Assign an ID to the image for future removal
        img.style.width = '200px'; // Adjust the size if needed
        img.style.height = 'auto';

        // Append the GIF to the result
        document.getElementById('result').appendChild(img);
    }
}

// Audio Control Script
const playPauseBtn = document.getElementById('playPauseBtn');
const backgroundMusic = document.getElementById('backgroundMusic');

let isPlaying = false;

playPauseBtn.addEventListener('click', () => {
    if (isPlaying) {
        backgroundMusic.pause();
        playPauseBtn.innerHTML = '&#9658;'; // Play Icon
    } else {
        backgroundMusic.play();
        playPauseBtn.innerHTML = '&#9208;'; // Pause Icon
    }
    isPlaying = !isPlaying;
});

