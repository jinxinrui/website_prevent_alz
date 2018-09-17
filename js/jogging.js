window.onload = () => {
    getAllData();
}

function getAllData() {
    // Get back-end data and insert to website table
    var request = new XMLHttpRequest();
    // A proxyurl to request GET to deal with Access-Control-*
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    request.open('GET', proxyurl + 'http://35.189.41.186/api/trackandtrail', true);
    request.onload = function() {
        // access json data here
        let data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            $('#myTable').DataTable( {
                data: data,
                "columns": [
                    {"data": "Name"},
                    {"data": "address"},
                    {"data": "Postcode"},
                    {"data": "State"}
                ]
            });
        } else {
            const errorMessage = document.getElementById('errorMsg');
            errorMessage.innerHTML = `Gah, it's not working!`;
        }
    }
    request.send();
}


// function to insert new row with attributes in the table "#parkTable"
function insertNewRow(ele0, ele1, ele2, ele3, ele4) {
    const table = document.getElementById('myTable');
    let row = table.insertRow();
    let cell0 = row.insertCell();
    let cell1 = row.insertCell();
    let cell2 = row.insertCell();
    let cell3 = row.insertCell();
    let cell4 = row.insertCell();

    cell0.innerHTML = ele0;
    cell1.innerHTML = ele1;
    cell2.innerHTML = ele2;
    cell3.innerHTML = ele3;
    cell4.innerHTML = ele4;
}