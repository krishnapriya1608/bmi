function totalClick(click) {
    const totalClicksElement = document.getElementById('totalClicks');
    const currentClicks = parseInt(totalClicksElement.innerText, 10) || 0; 
    const sumValue = currentClicks + click;
    totalClicksElement.innerText = sumValue;
}

function calculate() {
    var weight = parseInt(document.getElementById("weight").value, 10) || 0; 
    document.getElementById("weight-val").textContent = weight + " kg";
    var height = parseInt(document.getElementById("height").value, 10) || 0; 
    document.getElementById("height-val").textContent = height + " cm";
}

function calculateBmi() {
    const totalClicks = parseInt(document.getElementById('totalClicks').innerText, 10) || 0; 
    var weight = parseInt(document.getElementById("weight").value, 10) || 0; 
    var height = parseInt(document.getElementById("height").value, 10) || 0; 

    console.log("Total Clicks:", totalClicks);
    console.log("Weight:", weight);
    console.log("Height:", height);

    if (isNaN(height) || isNaN(weight) || weight <= 20 || height <= 100 || totalClicks <= 0) {
        alert("Please fill all the fields");
        return;
    } else {
        const bmi = Math.ceil(weight / ((height / 100) ** 2));

        document.getElementById('heading').innerHTML = `<h2 class="fs-3 mb-3 fst-italic text-light"></h2>`;

        let message;

        if (bmi < 18.5) {
            message = `<h4 class="me-5 fs-6 text-info fw-bolder" style="margin-right:100px;" style="padding:10px;">Underweight: Focus on gradual weight gain. Eat good and nutrious food</h4>`;
        } else if (bmi < 25) {
            message = `<h4 class="fs-6 text-success fw-bolder" style="margin-right:150px;" style="padding:10px;"> Healthy Weight: You are at a healthy weight!   Gppd Job</h4>`;
        } else if (bmi < 30) {
            message = `<h4 class="text-warning fs-6" style="margin-right:80px;" style="padding:10px;">Overweight: Adopt healthy eating habits, consider guidance from expert.</h4>`;
        } else {
            message = `<h4 class="fs-6 text-danger" style="margin-right:150px;" style="padding:10px;">Obese: Focus on gradual weight loss.Eat a healthy and balanced diet .</h4>`;
        }

        // Update the bmi-output only once, combining both the BMI value and the message
        document.getElementById('bmi-output').innerHTML = `<h2 class="fs-5">${bmi} kg/m²</h2>${message}`;

        // Speak the message
        // const speech = new SpeechSynthesisUtterance(`Your BMI is ${bmi} kg/m². ${message}`);
        // window.speechSynthesis.speak(speech);
        const speech= new SpeechSynthesisUtterance(` your bmi is ${bmi} Kg/m2`);
        speechSynthesis.speak(speech);
    }
}

function allclear() {
    
    const slider = document.getElementById('height');
    slider.value = slider.defaultValue; 
    const sliderr = document.getElementById('weight');
    sliderr.value = slider.defaultValue; 
    document.getElementById('totalClicks').innerText = "0"; 
    document.getElementById('message').innerHTML = ""; 
    document.getElementById('bmi-output').innerHTML = ""; 
    document.getElementById('heading').innerHTML = ""; 
   
}