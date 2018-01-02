	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngRoute']);
    
        // configure our routes
        scotchApp.config(function($routeProvider) {
            $routeProvider
    
                // route for the home page
                .when('/', {
                    templateUrl : 'dati/home.html',
                    controller  : 'mainController'
                })
    
                // route for the about page
                .when('/about', {
                    templateUrl : 'dati/about.html',
                    controller  : 'aboutController'
                })
    
                // route for the contact page
                .when('/contact', {
                    templateUrl : 'dati/contact.html',
                    controller  : 'contactController'
                })
                                             
                .when("/utenti/:userId", {
                    templateUrl: "dati/utente.html",
                    controller: "utenteCtrl"
                })
        });
        
        scotchApp.factory("utentiService", function() {
            var self = {};
            self.utenti = [
              { id:1, nome: "Andrea",   cognome: "Rossi",  citta: "Roma"    },
              { id:2, nome: "Marco",    cognome: "Verdi",  citta: "Milano"  },
              { id:3, nome: "Giovanni", cognome: "Neri",   citta: "Napoli"  },
              { id:4, nome: "Roberto",  cognome: "Gialli", citta: "Palermo" }
            ];
            return self;
          });
    
        // create the controller and inject Angular's $scope
        scotchApp.controller('mainController', function($scope, utentiService) {
            $scope.utenti = utentiService.utenti;
            // create a message to display in our view
            $scope.message = 'Everyone come and see how good I look!';
        });
    
        scotchApp.controller('aboutController', function($scope) {
            $scope.message = 'Look! I am an about page.';
        });
    
        scotchApp.controller('contactController', function($scope) {
            $scope.message = 'Contact us! JK. This is just a demo.';
        });

        scotchApp.controller("utenteCtrl", function($scope, $routeParams, $location, utentiService, filterFilter) {
          var userId = $routeParams.userId;
          console.log("test2", $location.path(), userId, utentiService);
          $scope.utente = filterFilter(utentiService.utenti, { id: userId })[0];
        })