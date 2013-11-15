
var app = angular.module("angRails", 
  [
    'ngRoute',
    "ngResource",
    "ngAnimate",
    'airlineFilters',
    "airlineServices"
  ]);

app.animation(".toggle",function(){
  console.log('toggle');
  return {
    
  }
})

app.config( function($routeProvider,$httpProvider) {
  // allow json
  $httpProvider.defaults.headers['common']['Accept'] = 'application/json';
  //config routs
  $routeProvider
    // .when('/',
    // {
    //   template:'hello',
    //   controller: 'AppCtrl'
    // })
    .when('/sub',{
      redirectTo: function (routeParams, path, search){
        console.log(routeParams);
        console.log(path);
        console.log(search);
        return '/'
      }
    })
    .when('/', {
      templateUrl: 'partials/destinations.html',
      controller: 'DestinationsCtrl'})
    .when('/airports/:id', {
      templateUrl: 'partials/airport.html',
      controller: 'AirportCtrl'
    })
    .when('/flights', {
      templateUrl: 'partials/flights.html',
      controller: 'FlightsCtrl'})
    .when('/reservations', {
      templateUrl: 'partials/reservations.html',
      controller: 'ReservationsCtrl'
    })
    .otherwise({
      redirectTo:'/'
    })
  }
);

app.controller('AppCtrl',function($scope){
  console.log('+ ' + $scope);
  $scope.toggle = false;
  $scope.setActive = function (type) {
    $scope.destinationsActive = '';
    $scope.flightsActive = '';
    $scope.reservationsActive = '';

    $scope[type + 'Active'] = 'active';
  }
})


app.directive('location',function(){
    return {
      link: function(scope,element,attrs){
        scope.getAirport(attrs.location);
      }
    }
})



