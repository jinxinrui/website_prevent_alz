var map, places, infoWindow;
var autocomplete;
var countryRestrict = {
    'country': 'au'
};
var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
var hostnameRegexp = new RegExp('^https?://.+?/');
var DATA = {};

var lat;
var long;
var name;
var address;
var postcode;
var suburb;
var contentString = [];
var markers = [];
var searchMarkers = [];
var userLocationMarkers = [];
var dist;

var infoWindowArr = [];

var countries = {
    'au': {
        center: {
            lat: -37.814,
            lng: 144.96332
        },
        zoom: 11,
        mapTypeId: 'roadmap'
    }
};

var latcurrent;
var lngcurrent;

function initMap() {
    console.log("initMap");
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: countries['au'].zoom,
        center: countries['au'].center
    });

    autocomplete = new google.maps.places.Autocomplete(
        (document.getElementById('autocomplete')), {
            componentRestrictions: countryRestrict
        });
    places = new google.maps.places.PlacesService(map);

    onload_map();
    autocomplete.addListener('place_changed', onPlaceChanged);

    //hide the distance column
    $(".distance").hide();

}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.');
    infoWindow.open(map);
}

//calculate the distance between the user's location and markers on map
function calcDistance(fromLat, fromLng, toLat, toLng) {
    return google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(fromLat, fromLng), new google.maps.LatLng(toLat, toLng));
}

//read the api data
function readData() {
    //read the data from api and display the data based on the lat & long on the map
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/http://35.189.41.186/api/cycling",
        success: function (the_json) {
            DATA = the_json;
            console.log(the_json);

            var datas = [];
            for (var i = 0; i < DATA.length; i++) {
                lat = DATA[i].lat;
                long = DATA[i].lon;
                name = DATA[i].Name;
                address = DATA[i].address;
                suburb = DATA[i].Suburb;
                postcode = DATA[i].Postcode;

                //calculate the distance

                var data = {};
                data["Name"] = name;
                data["Address"] = address;
                data["Suburb"] = suburb;
                data["Postcode"] = postcode;
                datas.push(data);

                markers[i] = new google.maps.Marker({
                    position: {
                        lat: lat,
                        lng: long
                    },
                    map: map,
                    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                });

                contentString[i] = '<h6 id="firstHeading" class="firstHeading">Location Name</h6>' + name + '<p></p>' +
                    '<h6 id="firstHeading" class="firstHeading">Address</h6>' + address;

                infoWindowArr[i] = new google.maps.InfoWindow({
                    content: contentString[i]
                });

                var markerValue = markers[i];
                google.maps.event.addListener(markers[i], 'click', (function (markerValue, i) {
                    return function () {
                        infoWindowArr[i].open(map, markers[i]);
                    }
                })(markers[i], i));
            }

            displayTable(datas);
        }
    });
}

//display the data in table without the distance
function displayTable(datas) {
    var table = $('#myTable').DataTable({
        data: datas,
        columns: [{
            "data": "Name"
        },
            {
                "data": "Address"
            },
            {
                "data": "Suburb"
            },
            {
                "data": "Postcode"
            }
        ],
        destroy: true,
        searching: false
    });
    table.column('4:visible')
        .order('asc')
        .draw();
}

//display the data in tabel with the distance
function displayTableDistance(datas) {

    $(".distance").show();

    var table = $('#myTable').DataTable({
        data: datas,
        columns: [{
            "data": "Name"
        },
            {
                "data": "Address"
            },
            {
                "data": "Suburb"
            },
            {
                "data": "Postcode"
            },
            {
                "data": "Distance"
            }
        ],
        destroy: true,
        searching: false
    });
    table.column('4:visible')
        .order('asc')
        .draw();
}

//read the api data after user's location updated
function readDataUpdatedLocation(latcurrent, lngcurrent) {
    //read the data from api and display the data based on the lat & long on the map
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/http://35.189.41.186/api/cycling",
        success: function (the_json) {
            DATA = the_json;
            console.log(the_json);

            var datas = [];
            for (var i = 0; i < DATA.length; i++) {
                lat = DATA[i].lat;
                long = DATA[i].lon;
                name = DATA[i].Name;
                address = DATA[i].address;
                suburb = DATA[i].Suburb;
                postcode = DATA[i].Postcode;

                var distcurrent = calcDistance(latcurrent, lngcurrent, lat, long);
                distcurrent = distcurrent / 1000;
                distcurrent = distcurrent.toFixed(2);

                //calculate the distance

                var data = {};
                data["Name"] = name;
                data["Address"] = address;
                data["Suburb"] = suburb;
                data["Postcode"] = postcode;
                data["Distance"] = distcurrent;
                datas.push(data);

                markers[i] = new google.maps.Marker({
                    position: {
                        lat: lat,
                        lng: long
                    },
                    map: map,
                    icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
                });

                contentString[i] = '<h6 id="firstHeading" class="firstHeading">Location Name</h6>' + name + '<p></p>' +
                    '<h6 id="firstHeading" class="firstHeading">Address</h6>' + address;

                infoWindowArr[i] = new google.maps.InfoWindow({
                    content: contentString[i]
                });

                var markerValue = markers[i];
                google.maps.event.addListener(markers[i], 'click', (function (markerValue, i) {
                    return function () {
                        infoWindowArr[i].open(map, markers[i]);
                    }
                })(markers[i], i));
            }

            displayTableDistance(datas);
        }
    });
}

//onload the map after the page loaded
function onload_map() {
    console.log("onload_map");

    readData();

    //get user's current location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            latcurrent = pos.lat;
            lngcurrent = pos.lng;
            var marker = new google.maps.Marker({
                position: pos,
                map: map,
                animation: google.maps.Animation.DROP,
                title: "Now your are here"
            });
            userLocationMarkers.push(marker);

            map.setCenter(pos);
            map.setZoom(13);

            readDataUpdatedLocation(latcurrent, lngcurrent)

        }, function () {
            handleLocationError(true, infoWindow, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, infoWindow, map.getCenter());
    }
}

function onPlaceChanged() {
    console.log("onPlaceChanged");
    var place = autocomplete.getPlace();
    var val = document.getElementById('autocomplete').value;
    var marker;
    if (val) {
        removeMarkers(searchMarkers);
        removeMarkers(userLocationMarkers);
        var result = null;
        if (place.geometry) {
            map.panTo(place.geometry.location);
            origin_lat = place.geometry.location.lat();
            origin_long = place.geometry.location.lng();

            marker = new google.maps.Marker({
                position: {
                    lat: origin_lat,
                    lng: origin_long
                },
                map: map,
                animation: google.maps.Animation.DROP,
                icon: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
            });
            searchMarkers.push(marker);
            map.setZoom(13);
            readDataUpdatedLocation(origin_lat, origin_long)
        } else {
            document.getElementById('autocomplete').placeholder = 'Address';
        }
    } else {
        onload_map();
    }
}

//remove markers
function removeMarkers(markers) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
}
