angular.module('airlineFilters', ["airlineServices"])
	.filter('originTitle', function () {
		return function (input) {
			return input.origin + ' - ' + input.id;
		};
	})
	.filter('destinationTitle', function () {
		return function (input) {
			//console.log( '' )
			return input.destination + ' - ' + input.id;
		};
	});