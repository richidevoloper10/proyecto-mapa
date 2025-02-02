function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        center: { lat: 19.4326, lng: -99.1332 } // Centro inicial (Ciudad de México)
    });

    var geocoder = new google.maps.Geocoder();

    document.getElementById('search-button').addEventListener('click', function() {
        geocodeAddress(geocoder, map);
    });

    // Ejemplo de pines personalizados
    var locations = [
        { lat: 19.42847, lng: -99.12766, title: "Pin 1" },
        { lat: 19.43610, lng: -99.13500, title: "Pin 2" }
    ];

    locations.forEach(function(location) {
        new google.maps.Marker({
            position: location,
            map: map,
            title: location.title,
            icon: 'images/pin.png' // Ruta al ícono del pin
        });
    });
}

function geocodeAddress(geocoder, map) {
    var address = document.getElementById('search-input').value;
    geocoder.geocode({ 'address': address }, function(results, status) {
        if (status === 'OK') {
            map.setCenter(results[0].geometry.location);
            var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location,
                title: 'Resultado de la búsqueda',
                icon: 'images/search-pin.png' // Ruta al ícono del pin de búsqueda
            });
        } else {
            alert('La geolocalización falló: ' + status);
        }
    });
}
