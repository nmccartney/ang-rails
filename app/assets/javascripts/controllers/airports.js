function AirportCtrl ($scope, $routeParams, Airport, Destinations) {
	$scope.currentAirport = Airport.get({
		id: $routeParams.id
	});

	$scope.addDestinationView = function(code){
		console.log('adding dest view' + $scope);
		return "partials/airport_new.html"
	}


}

this.NewDestinationCtrl = function($scope, Airport, Destinations){
	console.log('got view - ' + $scope.currentAirport.id);
	$scope.airports = Airport.query();	
	// $scope.destinations = Destinations.query();

	$scope.addDestination = function(){
		console.log('adding destination - ' + $scope.newDestination.id)
		var destination;
		destination = Destinations.save({airport_id:$scope.currentAirport.id,destination_id:$scope.newDestination.id});
		$scope.destinations.push(destination);
		return $scope.newDestination = {};
	}
}

