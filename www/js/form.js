var map;
var marker;

function initializeGoogleMaps() {
    var mapDiv = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(53.022222222222, 18.611111),
        zoom: 10
    };
    map = new google.maps.Map(mapDiv, mapOptions);

    marker = new google.maps.Marker({
        position: new google.maps.LatLng(53.022222222222, 18.611111),
        draggable: true,
        map: map
    });
}

google.maps.event.addDomListener(window, 'load', initializeGoogleMaps);

$(function () {
    if (window.localStorage.getItem('data') === null) {
        var dummyData = {
            points: []
        };
        window.localStorage.setItem('data', JSON.stringify(dummyData));
    }

    var data = JSON.parse(window.localStorage.getItem('data'));

    $('form').on('submit', function (event) {
        event.preventDefault();

        var pointAttrs = {
            lat: marker.getPosition().lat(),
            lng: marker.getPosition().lng(),
            title: $('input[type="text"]').val(),
            description: $('textarea').val()
        };

        data.points.push(JSON.stringify(pointAttrs));

        window.localStorage.setItem('data', JSON.stringify(data));

        window.location = 'index.html';
    });
});

