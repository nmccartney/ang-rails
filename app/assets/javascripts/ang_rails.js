


var app;

app = angular.module("angRails", ["ngResource"]);

app.config([
  '$httpProvider', function($httpProvider) {
    return $httpProvider.defaults.headers['common']['Accept'] = 'application/json';
  }
]);



app.factory("Entry", function($resource) {
  return $resource("/entries/:id", {
    id: "@id"
  }, {
    update: {
      method: "PUT"
    },
    remove:{
      method: "DELETE"
    }
  });
});




this.AngRailsCtrl = function($scope, Entry) {

  $scope.entries = Entry.query();

  $scope.addEntry = function() {
    var entry;
    entry = Entry.save($scope.newEntry);
    $scope.entries.push(entry);
    return $scope.newEntry = {};
  };

  $scope.deleteEntry = function(e){
    
    var index = $scope.entries.indexOf(e)
    console.log(index);
    $scope.entries.splice(index,1);

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
