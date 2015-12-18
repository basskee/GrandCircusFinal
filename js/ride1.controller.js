var app = angular.module('myApp');

app.controller('ride1control', function($scope, mapservice) {

 var initmap = mapservice;
 initmap();

 $scope.rides = [
   {
     name: "Farm to Picnic Table",
     area: "East and Riverfront",
     miles: 4.6,
     time: 25,
     description:"Build your picnic as you bike to Belle Isle",
     stops:  5,
     waypoints: [
       {
         flag: "img/mapA.jpg",
         name: "Eastern Market Sheds",
         hours: "Sat 7a-4p, Sun 10a-4p, Tues 9a-3p (June-Oct)",
         what: "Fresh Produce",
         offer: false
       },
       {
         flag: "img/mapB.jpg",
         name: "DeVries & Co. 1887",
         hours: "Tues-Fri 9a-5p, Sat 7a-4p",
         what: "Artisan Cheese",
         offer: true
       },
       {
         flag: "img/mapC.jpg",
         name: "Germack Pistachio Co.",
         hours: "Mon-Sat 8a-4:30p, Sun 10a-4p",
         what: "Nuts and Snacks",
         offer: true
       },
       {
         flag: "img/mapD.jpg",
         name: "CostPlus Wine",
         hours: "Tues-Fri 9a-6p, Sat 7:30a-4:30p",
         what: "Beer and Wine",
         offer: false
       },
       {
         flag: "img/mapE.jpg",
         name: "Belle Isle Conservatory",
         hours: "Wed-Sun 10a-5p",
         what: "Conservatory and Botanical Gardens",
         offer: false
       },
     ]
   },
   {
     name: "Beers & Gears",
     area: "Corktown and Riverfront",
     miles: 6.2,
     time: 32,
     description: "Bike along the river between two great Detroit brewers",
     stops: 3,
     waypoints:[
        {
         name: "Batch Brewing Company",
         hours: "Mon-Thur 11a-10p, Fri-Sat 11a-12a",
         what: "Beer"
         },
        {
         name: "Atwater Brewery",
         hours: "Mon-Fri 5p-10p, Sat 9a-4p, Sun 12p-8p",
         what: "Beer"
         },
       ]
     },
   {
     name: "Trails & Cocktails",
     area: "East and Downtown",
     miles: 3.5,
     time: 19,
     stops: 3,
     description: "Craft cocktails on the bike trail"
   },
   {
     name: "Dine Fine & White Lines",
     area: "Downtown",
     miles: 1.5,
     time: 13,
     stops: 3,
     description: "Fresh air and fine cuisine"
   },
   {
     name: "Fresh Air & Casual Fare",
     area: "Midtown",
     miles: 3.7,
     time: 23,
     stops: 4,
     description: "Ride to three local favorites"
   },
   {
     name: "Corktown Classic",
     area: "Corktown",
     miles: 2.3,
     time: 14,
     stops:  4,
     description: "Visit local shops and restaurants"
   },
   {
     name: "Tacos & Tequila",
     area: "Southwest",
     miles: 3,
     time: 20,
     stops: 3,
     description: "Sample the food and drink at these local favorites"
   },
   {
     name: "Arts & Crafts",
     area: "Midtown and East",
     miles: 11.3,
     time: 65,
     stops: 3,
     description: "Local galleries and handmade items"
   },
   {
     name: "I Brake for Art",
     area: "Midtown and Downtown",
     miles: 4.4,
     time: 26,
     stops: 5,
     description: "Masterpieces and cutting-edge contemporary art"
   },
   {
     name: "Rockin' Roll",
     area: "Midtown",
     miles: 5.4,
     time: 32,
     stops: 3,
     description: "From Motown to Third Man "
   },
   {
     name: "Stadium Cycle",
     area: "Downtown and Corktown",
     miles: 4.6,
     time: 32,
     stops: 4,
     description: "Start at Tiger Stadium, end at Comerica Park"
   },
   {
     name: "Brunch on Bikes",
     area: "East and Corktown",
     miles: 6.3,
     time: 32,
     stops: 2,
     description: "Ride to one of the city's many delicious brunch spots"
   },
   {
     name: "Sunset & Spokes",
     area: "Corktown and Riverfront",
     miles: 11.4,
     time: 60,
     stops:2,
     description: "Catch a sunset from the western tip of Belle Isle"
   }
 ];
});
