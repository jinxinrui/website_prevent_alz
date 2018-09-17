document.getElementById('submitBtn').addEventListener("click", calculate);
document.myForm.weight.addEventListener('change', validateWeight);
document.myForm.height.addEventListener('change', validateHeight);

function validateWeight() {
    let weight = document.myForm.weight.value;
    if (weight <= 10 || weight >=300) {
        document.getElementById('weightAlert').innerHTML = 'Weight should be 10~300 kg';
    } else {
        document.getElementById('weightAlert').innerHTML = '';
    }
}

function validateHeight() {
    let height = document.myForm.height.value;
    if (height <= 100 || height >= 240) {
        document.getElementById('heightAlert').innerHTML = 'Height should be 100~240 cm';
    } else {
        document.getElementById('heightAlert').innerHTML = '';
    }
}

// reset progress bar and input
function resetProgressBar() {
    document.getElementById('myBar').style.width = 0;
    document.getElementById('weightAlert').innerHTML = '';
    document.getElementById('heightAlert').innerHTML = '';
}

//
function calculate() {
    let weight = document.getElementById('weightInput').value;
    let height = document.getElementById('heightInput').value / 100;
    let bmi = weight / (height * height);
    let selector = document.getElementById('activityHour').value;
    let obesityRate;
    let activityRate;
    switch (selector) {
        case '0':
            activityRate = 0.19;
            break;
        case '0.5-1':
            activityRate = 0.07;
            break;
        case '1-2':
            activityRate = 0.29;
            break;
        case '2-4':
            activityRate = 0.31;
            break;
        case '4':
            activityRate = 0.13;
            break;
    }

    if (bmi < 20) {
        obesityRate = 0.789;
    } else if (bmi >= 20 && bmi < 25) {
        obesityRate = 0.1526;
    } else if (bmi >= 25 && bmi < 30) {
        obesityRate = 0.2800;
    } else {
        obesityRate = 0.4885;
    }
    let worstcase = 15.587;
    let bestcase = 3.183;
    let total = worstcase - bestcase;
    let status = (obesityRate + activityRate) * 14.3 - bestcase;
    let riskRate = status / total * 100;
    if (weight >= 10 && weight <=300 && height*100 >= 100 && height*100 <= 240) {
        document.getElementById('myBar').style.width = riskRate + '%';
    }
}