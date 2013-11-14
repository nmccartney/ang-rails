function DestinationsCtrl ($scope, Airport) {
	$scope.setActive('destinations');

	$scope.sidebarURL = 'partials/airport.html';
	$scope.currentAirport = null;

	$scope.setAirport = function (code) {
		$scope.currentAirport = Airport.get({id: code});
	};

	$scope.addAirport = function(){
		console.log('adding airport - ' + $scope)
		var airport;
		airport = Airport.save($scope.newAirport);
		$scope.airports.push(airport);
		return $scope.newAirport = {};

	};

	$scope.airports = Airport.query();

}