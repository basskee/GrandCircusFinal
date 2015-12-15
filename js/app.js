var app = angular.module("myApp", ["ngRoute"]);

app.controller("offercontrol", function($scope){
  $scope.offer = true;
});

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "partials/rideinfo.html",
      controller: "maincontroller"
    })
    .when("/rideinfo", {
      templateUrl: "partials/rideinfo.html",
      controller: "maincontroller"
    })
    .when("/ride1", {
      templateUrl: "partials/ride1.html",
      controller: "ride1control"
    })
    .when("/ride2", {
      templateUrl: "partials/ride2.html",
      controller: "ride2control"
    })
    .otherwise({
      templateUrl: "partials/404.html",
      controller: "maincontroller"
    });

  $locationProvider.html5Mode(true);
});
