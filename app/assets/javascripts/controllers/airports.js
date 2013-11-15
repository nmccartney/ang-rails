function AirportCtrl ($scope, $routeParams, Airport, Destinations) {
	
	$scope.destinations = Destinations.query();
	$scope.currentAirport = Airport.get({
		id: $routeParams.id
	});

	$scope.addDestinationView = function(code){
		console.log('adding dest view' + $scope);
		return "partials/airport_new.html"
	}

	$scope.removeDestination = function(dest,index){

		console.log(index,dest.id);

		var dest_id = $scope.currentAirport.destinations.indexOf(dest);
		
		console.log(index, dest_id);

		var d = _.where($scope.destinations,{
			airport_id: String($scope.currentAirport.id),
			destination_id: String(dest.id)
		})
		
		// get index of current list
	    

		console.log('id - ' + dest_id,d)	    
	    var dest_id = Destinations.get({id:dest_id},function(res){
	    	console.log(' - ' + dest_id);
	    	// $scope.currentAirport.destinations.splice(index,1);
	    	// dest_id.$remove();
	    })
	    if(d.length>=1){
	    	//console.log(dest,d,id);
	    	// // remove from dom
	    	// $scope.currentAirport.destinations.splice(index,1);
	    	//remove from DB
	    	
		}
	}
}	

this.NewDestinationCtrl = function($scope, Airport, Destinations){
	console.log('got view - ' + $scope.currentAirport.city);
	$scope.airports = Airport.query();	
	// $scope.destinations = Destinations.query();

	$scope.addDestination = function(){
		console.log('adding destination - ' + $scope.newDestination.id)
		var destination;

		destination = Destinations.save({
			airport_id:$scope.currentAirport.id,
			destination_id:$scope.newDestination.id
		});

		var air = Airport.get({id:$scope.newDestination.id},function(res){
			console.log( air.id);
			$scope.currentAirport.destinations.push(air);
		});
		
	}
}

