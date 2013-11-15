function FlightsCtrl ($scope, Flights, Airport) {
	$scope.setActive('flights');
	
	$scope.flights = Flights.query();
	$scope.airports = Airport.query();

	$scope.sidebarURL = function(){
		return 'partials/flight_new.html';
	};


	$scope.getAirport = function (code){
		var air = Airport.get({id:1})
		console.log( air);
		return "atl"
	}


	$scope.removeFlight = function(flight){
		// get index of current list
	    var index = $scope.flights.indexOf(flight);
	    // remove from dom
	    $scope.flights.splice(index,1);
	    //remove from DB
	    flight.$remove();
	};
}

this.NewFlightCtrl = function ($scope, Flights, Airport){
	console.log('flight!');
	$scope.addFlight = function(){
		console.log('adding flight - ' + $scope.newFlight)
		var flight;
		flight = Flights.save($scope.newFlight);
		$scope.flights.push(flight);
		return $scope.newFlight = {};
	};
}