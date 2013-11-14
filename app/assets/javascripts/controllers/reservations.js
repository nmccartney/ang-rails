function ReservationsCtrl ($scope, Reservations) {
	$scope.setActive('reservations');

	$scope.reservations = Reservations.query();

	$scope.reserveFlight = function  () {
		Reservations.save($scope.reserve, function (data) {
			$scope.reserve.origin = '';
			$scope.reserve.destination = '';

			$scope.reservations.push(data);
		});
	}

	$scope.removeReservation = function(e){
		// get index of current list
	    var index = $scope.reservations.indexOf(e);
	    // remove from dom
	    $scope.reservations.splice(index,1);
	    //remove from DB
	    e.$remove();
	}
}