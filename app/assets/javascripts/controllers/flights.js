function FlightsCtrl ($scope, Flights, Airport) {
	$scope.setActive('flights');
	$scope.flights = Flights.query();
	$scope.airports = Airport.query();

	$scope.getAirport = function (code){
		var air = Airport.get({id:1})
		console.log( air);
		return "atl"
	}
}