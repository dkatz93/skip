
(function () {

  var appReference  = angular.module('bar_line');

  	 var googleApiKey = 'AIzaSyBXUjx-IYc5PRlfggTLo_Z5gb3ogwk3u5o';

  var SearchBar = function ($http) {

 	var onGeoLocation = function(response) {
      return response.data.results[0];
    };

    var onError = function (error) {
      console.log('Error:', error);
    };

      var getLocation = function (latitude, longitude) {
      var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' +
      latitude +','+ longitude + '&key=' + googleApiKey;

      return $http.get(url)
      .then(onGeoLocation, onError).then(getWeather, onError);
    };
	};

	
  appReference.factory('LocationService', SearchBar);
}());


 

