// Get back-end data and insert to website table
var request = new XMLHttpRequest();
// A proxyurl to request GET to deal with Access-Control-*
const proxyurl = "https://cors-anywhere.herokuapp.com/";
request.open('GET', proxyurl + 'http://35.189.41.186/api/taichi', true);
request.onload = function() {
    // access json data here
    let data = JSON.parse(this.response);
    if (request.status >= 200 && request.status < 400) {
        $('#myTable').DataTable( {
            data: data,
            "columns": [
                {"data": "Name"},
                {"data": "Address"},
                {"data": "Suburb"},
                {"data": "Postcode"},
                {"data": "State"}
            ]
        });
    } else {
        const errorMessage = document.getElementById('errorMsg');
        errorMessage.innerHTML = `Gah, it's not working!`;
    }
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

function filterTable() {
    var input, filter, table, tr, td, i;
    input = document.getElementById('searchBox');
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable');
    tr = table.getElementsByTagName('tr');
    for (i = 0; i < tr.length; i ++) {
        td = tr[i].getElementsByTagName('td')[2];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}