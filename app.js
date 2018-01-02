var myApp = angular.module('myApp', []);
myApp.controller('myController', function($scope, $http){
    $http.get('sample_json.js')
		.then(function (response){
			$scope.jsondata = response.data;
			console.log("status:" + response.status);
		}).catch(function(response) {
		  console.error('Error occurred:', response.status, response.data);
		}).finally(function() {
			 console.log("Task Finished.");
		});
}); 