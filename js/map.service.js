var app = angular.module('myApp');

app.factory('mapservice', function() {
  function initMap() {
    var pointA = new google.maps.LatLng(42.347702, -83.041534), // Eastern Market
        pointB = new google.maps.LatLng(42.336221, -82.98573), // Belle Isle
        waypts = [
                    {
                      location: new google.maps.LatLng(42.346173, -83.040392),
                      stopover: true // Germack
                    },
                    {
                      location: new google.maps.LatLng(42.345934, -83.038841),
                      stopover: true // Wine Place
                    },
                    {
                      location: new google.maps.LatLng(42.346042, -83.038934),
                      stopover: true // DeVries
                    },
                ],
        myOptions = {
          zoom: 7,
          center: pointA
        },
        map = new google.maps.Map(document.getElementById('map'), myOptions),
        // Instantiate a directions service.
        directionsService = new google.maps.DirectionsService,
        directionsDisplay = new google.maps.DirectionsRenderer({
          map: map
        });

    // get route from A to B
    calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB, waypts);
  }

  function calculateAndDisplayRoute(directionsService, directionsDisplay, pointA, pointB, waypts) {
    directionsService.route({
      origin: pointA,
      destination: pointB,
      waypoints: waypts,
      optimizeWaypoints: false,
      travelMode: google.maps.TravelMode.BICYCLING
    }, function(response, status) {
      if (status === google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

  return initMap;
});
