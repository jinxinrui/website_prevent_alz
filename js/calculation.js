document.getElementById('submitBtn').addEventListener("click", getText1);
document.getElementById('weightInput').addEventListener("change", validateWeight);
document.getElementById('heightInput').addEventListener("change", validateHeight);

function validateWeight() {
    var weight = document.getElementById('weightInput').value;
    if (weight <= 0 || weight >=300) {
        document.getElementById('weightAlert').innerHTML = 'Weight should be 0~300 kg';
    } else {
        document.getElementById('weightAlert').innerHTML = '';
    }
}

function validateHeight() {
    var height = document.getElementById('heightInput').value;
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

function getText1() {
    var weight = document.getElementById('weightInput').value;
    var height = document.getElementById('heightInput').value / 100;
    var bmi = weight / (height * height);
    var selector = document.getElementById('activityHour').value;
    var obesityRate;
    var activityRate;
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
    let worstcase = 12.720;
    let bestcase = 3.694;
    let total = worstcase - bestcase;
    let status = (obesityRate + activityRate) * 14.3 - bestcase;
    let riskRate = status / total * 100;
    if (weight == 0 || height == 0) {
        riskRate = 0;
    }
    document.getElementById('myBar').style.width = riskRate + '%';
}

// Get back-end data and insert to website table
var request = new XMLHttpRequest();
// A proxyurl to request GET to deal with Access-Control-*
const proxyurl = "https://cors-anywhere.herokuapp.com/";
request.open('GET', proxyurl + 'http://35.197.166.143/Api/Park', true);
request.onload = function() {
    // access json data here
    var data = JSON.parse(this.response);
    // var div = document.getElementById('tableDiv');
    // table = div.appendChild("table");
    // table.id = 'parkTable';
    // var trow = table.createElement("tr");
    // var thead1 = trow.createElement("th");
    // thead1.value = "Name"
    // var thead2 = trow.createElement("th");
    // var thead3 = trow.createElement("th");
    // var thead4 = trow.createElement("th");
    if (request.status >= 200 && request.status < 400) {
        data.forEach(item => {
            insertNewRow(item.Name, item.Suburb, item.Postcode, item.State);
        });
    } else {
        const errorMessage = document.getElementById('errorMsg');
        errorMessage.innerHTML = `Gah, it's not working!`;
    }
}

// request.send();

// function to insert new row with attributes in the table "#parkTable"
function insertNewRow(ele0, ele1, ele2, ele3) {
    const table = document.getElementById('parkTable');
    var row = table.insertRow();
    var cell0 = row.insertCell();
    var cell1 = row.insertCell();
    var cell2 = row.insertCell();
    var cell3 = row.insertCell();
    cell0.innerHTML = ele0;
    cell1.innerHTML = ele1;
    cell2.innerHTML = ele2;
    cell3.innerHTML = ele3;
}