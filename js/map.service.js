var app = angular.module('myApp');

app.factory('mapservice', function() {
  function initMap() {
    var pointA = new google.maps.LatLng(42.347702, -83.041534), // Eastern Market
        pointB = new google.maps.LatLng(42.344220, -83.037705), // Coffee
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
                    {
                      location: new google.maps.LatLng(42.358783, -82.998669),
                      stopover: true // Sister Pie
                    },
                    {
                      location: new google.maps.LatLng(42.336202, -82.985358),
                      stopover: true // Aquarium
                    },
                    {
                      location: new google.maps.LatLng(42.336221, -82.985736),
                      stopover: true // Conservatory
                    },
                    {
                      location: new google.maps.LatLng(42.337385, -83.018606),
                      stopover: true // Atwater
                    }
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
