var app = angular.module('myApp');

app.factory('mapservicetwo', function() {
  function initMap() {
    var pointA = new google.maps.LatLng(42.328390, -83.063161), // Batch 
        pointB = new google.maps.LatLng(42.337430, -83.018362), // Atwater
        waypts = [
                    {
                      location: new google.maps.LatLng(42.330212, -83.031627),
                      stopover: true // Rivard Plaza
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
