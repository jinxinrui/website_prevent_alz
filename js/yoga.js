window.onload = () => {
    getAllData();
}

// Add event listener on search box when a key is released
// document.getElementById('searchBox').addEventListener('keyup', filterTable);

// Get back-end data and insert to website table
function getAllData() {
    let request = new XMLHttpRequest();
    // A proxyurl to request GET to deal with Access-Control-*
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    request.open('GET', proxyurl + 'http://35.189.41.186/api/yoga', true);
    request.onload = function() {
        // access json data here
        let data = JSON.parse(request.response);
        if (request.status >= 200 && request.status < 400) {
            $('#myTable').DataTable( {
                data: data,
                "columns": [
                    {"data": "Name"},
                    {"data": "address"},
                    {"data": "Suburb"},
                    {"data": "Postcode"},
                    {"data": "State"}
                ],
                searching: false
            });
            // hide loading icon when received data
            document.getElementById('loadingIcon').style.visibility = 'hidden';
        } else {
            const errorMessage = document.getElementById('errorMsg');
            errorMessage.innerHTML = `Cannot Connect To Database!`;
        }
    };
    request.send();
}

// function to insert new row with attributes in the table "#parkTable"
function insertNewRow(ele0, ele1, ele2, ele3, ele4) {
    const table = document.getElementById('myTable');
    const tbody = table.getElementsByTagName('tbody')[0];
    let row = tbody.insertRow();
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
    let input, filter, table, tr, td, i;
    input = document.getElementById('searchBox');
    filter = input.value.toUpperCase();
    table = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    tr = table.rows;
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
