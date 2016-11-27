var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

function initializeGoogleMaps() {
    var data = JSON.parse(window.localStorage.getItem('data'));

    var mapDiv = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(53.022222222222, 18.611111),
        zoom: 10
    };
    var map = new google.maps.Map(mapDiv, mapOptions);

    if (data !== null) {
        var points = data.points;

        for (var i = 0; i < points.length; i++) {
            var point = JSON.parse(points[i]);

            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(point.lat, point.lng),
                map: map
            });

            google.maps.event.addListener(marker, 'click', function () {
                window.location = 'details.html';
            });
        }
    }
}

google.maps.event.addDomListener(window, 'load', initializeGoogleMaps);

$(function () {

});