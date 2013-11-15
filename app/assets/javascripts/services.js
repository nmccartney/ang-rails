
angular.module('airlineServices', ['ngResource'])
  .factory('Airport', function  ($resource) {
    return $resource('/airports/:id', {
        id: "@id"
      }, {
        update: {
          method: "PUT"
        },
        remove:{
          method: "DELETE"
        }
      });
  })
  .factory('Flights', function  ($resource) {
    return $resource('/flights/:id', {
        id: "@id"
      }, {
        update: {
          method: "PUT"
        },
        remove:{
          method: "DELETE"
        }
      });
  })
  .factory('Reservations', function  ($resource) {
    return $resource('/reservations/:id', {
        id: "@id"
      }, {
        update: {
          method: "PUT"
        },
        remove:{
          method: "DELETE"
        }
      });
  })
  .factory("Entry", function($resource) {
	  return $resource("/entries/:id", {
	    id: "@id"
	  }, {
	    update: {
	      method: "PUT"
	    },
	    remove:{
	      method: "DELETE"
	    }
	  });
	})
  .factory("Destinations", function($resource) {
	  return $resource("/airport_joins/:id/:airport_code", {
	    id: "@id",
	    airport_code:"@id"
	  }, {
	    update: {
	      method: "PUT"
	    },
	    remove:{
	      method: "DELETE"
	    }
	  });
	})



