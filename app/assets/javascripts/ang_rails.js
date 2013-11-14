


var app;



app = angular.module("angRails", ['ngRoute',"ngResource",'airlineFilters',"airlineServices"]);

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



this.AngRailsCtrl = function($scope, Entry) {

  $scope.entries = Entry.query();


  $scope.addEntry = function() {
    var entry;
    entry = Entry.save($scope.newEntry);
    $scope.entries.push(entry);
    return $scope.newEntry = {};
  };

  $scope.deleteEntry = function(e){
    // get index of current list
    var index = $scope.entries.indexOf(e);
    // remove from dom
    $scope.entries.splice(index,1);
    //remove from DB
    e.$remove();
  }

  $scope.drawWinner = function() {

    var entry, pool;
    pool = [];

    angular.forEach($scope.entries, function(entry) {
      if (!entry.winner) {
        return pool.push(entry);
      }
    });

    if (pool.length > 0) {
      entry = pool[Math.floor(Math.random() * pool.length)];
      entry.winner = true;
      entry.$update();
      return $scope.lastWinner = entry;
    }

  };

};
