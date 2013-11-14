function DestinationsCtrl ($scope, Airport) {
	$scope.setActive('destinations');

	$scope.sidebarURL = 'partials/airport.html';
	$scope.currentAirport = null;

	$scope.setAirport = function (code) {
		$scope.currentAirport = Airport.get({id: code});
	};

	$scope.airports = Airport.query();
}