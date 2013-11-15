function FlightsCtrl ($scope, Flights, Airport) {
	$scope.setActive('flights');
	
	$scope.flights = Flights.query();
	$scope.airports = Airport.query();

	$scope.sidebarURL = function(link){
		return 'partials/'+link+'.html';
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

	app.toggle = false;
	$scope.displayAddNew = function (){
		console.log(app.toggle);
		app.toggle=!app.toggle
	};

}

this.NewFlightCtrl = function ($scope, Flights, Airport){
	$scope.addFlight = function(){
		console.log('adding flight - ' + $scope.newFlight)
		var flight;
		flight = Flights.save($scope.newFlight);
		$scope.flights.push(flight);
		return $scope.newFlight = {};
	};
}