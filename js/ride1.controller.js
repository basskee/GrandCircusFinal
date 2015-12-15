var app = angular.module('myApp');

app.controller('ride1control', function($scope, mapservice) {

  var initmap = mapservice;
  initmap();

  console.log("hi");

  $scope.rides = [
    {
      name: "Farm to Picnic Table",
      area: "East and Riverfront",
      miles: 11.4,
      time: 64,
      description:"Gather your picnic at stops along the way then stop at Belle Isle",
      stops:  9,
      waypoints: [
        {
          name: "Eastern Market Sheds",
          hours: "Sat 7a-4p, Sun 10a-4p, Tues 9a-3p (June-Oct)",
          what: "Fresh Produce"
        },
        {
          name: "DeVries & Co. 1887",
          hours: "Tues-Fri 9a-5p, Sat 7a-4p",
          what: "Artisan Cheese"
        },
        {
          name: "Germack Pistachio Co.",
          hours: "Mon-Sat 8a-4:30p, Sun 10a-4p",
          what: "Nuts and Snacks"
        },
        {
          name: "CostPlus Wine",
          hours: "Tues-Fri 9a-6p, Sat 7:30a-4:30p",
          what: "Beer and Wine"
        },
        {
          name: "Sister Pie",
          hours: "Tues-Fri 8a-6p, Sat-Sun 9a-4p",
          what: "Baked Goods"
        },
        {
          name: "Belle Isle Aquarium",
          hours: "Sat-Sun 10a-4p",
          what: "Aquarium"
        },
        {
          name: "Anna Scripps Whitcomb Conservatory",
          hours: "Wed-Sun 10a-5p",
          what: "Conservatory and Botanical Gardens"
        },
        {
          name: "Atwater Brewery",
          hours: "Mon-Fri 5p-10p, Sat 9a-4p, Sun 12p-8p",
          what: "Craft Beer"
        },
        {
          name: "Trinosophes",
          hours: "Tues-Fri 9a-6p, Sat 9a-4p, Sun 10a-4p",
          what: "Coffee and Treats"
        }
      ]
    },
    {
      name: "Beers & Gears",
      area: "Corktown and Riverfront",
      miles: 6.2,
      time: 32,
      stops: 2,
      description: "",
      waypoint1: "Batch Brewing Company",
      info1: "Mon-Thur 11a-10p, Fri-Sat 11a-12a",
      waypoint2: "Atwater Brewery",
      info2: "Mon-Fri 5p-10p, Sat 9a-4p, Sun 12p-8p"
    },
    {
      name: "Trails & Cocktails",
      area: "East and Downtown",
      miles: 3.5,
      time: 19,
      stops: 3,
      description: ""
    },
    {
      name: "Dine Fine & White Lines",
      area: "Downtown",
      miles: 1.5,
      time: 13,
      stops: 3,
      description: ""
    },
    {
      name: "Fresh Air & Casual Fare",
      area: "Midtown",
      miles: 3.7,
      time: 23,
      stops: 4,
      description: ""
    },
    {
      name: "Corktown Classic",
      area: "Corktown",
      miles: 2.3,
      time: 14,
      stops:  4,
      description: ""
    },
    {
      name: "Tacos & Tequila",
      area: "Southwest",
      miles: 3,
      time: 20,
      stops: 3,
      description: ""
    },
    {
      name: "Arts & Crafts",
      area: "Midtown and East",
      miles: 11.3,
      time: 65,
      stops: 3,
      description: ""
    },
    {
      name: "I Brake for Art",
      area: "East and Downtown",
      miles: 4.4,
      time: 26,
      stops: 5,
      description: ""
    },
    {
      name: "Rockin' Roll",
      area: "Midtown",
      miles: 5.4,
      time: 32,
      stops: 3,
      description: ""
    },
    {
      name: "Stadium Cycle",
      area: "Downtown and Corktown",
      miles: 4.6,
      time: 32,
      stops: 4,
      description: ""
    },
    {
      name: "Brunch on Bikes",
      area: "East and Corktown",
      miles: 6.3,
      time: 32,
      stops: 2,
      description: ""
    },
    {
      name: "Sunset & Spokes",
      area: "Corktown and Riverfront",
      miles: 11.4,
      time: 60,
      stops:2,
      description: ""
    }
  ];
});
