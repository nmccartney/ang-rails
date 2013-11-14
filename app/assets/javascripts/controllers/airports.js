function AirportCtrl ($scope, $routeParams, Airport) {
	$scope.currentAirport = Airport.get({
		id: $routeParams.id
	});
	
	$scope.addDestination = function(code){
		console.log($scope)
	}
}