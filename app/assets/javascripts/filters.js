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
	}).filter('getById', function() {
		return function(input, id) {
			var i=0, len=input.length;
			for (; i<len; i++) {
			  if (+input[i].id == +id) {
			    return input[i];
			  }
			}
			return null;
		}
	});