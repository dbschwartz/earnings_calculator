// add comment
angular.module('myApp')
  .config(routeConfig);


// ** routeConfig ** //

// add comment
routeConfig.$inject = ['$routeProvider'];

// add comment
function routeConfig($routeProvider) {
  $routeProvider
    .when('/details', {
      templateUrl: 'templates/details.html',
      controller: 'detailsCtrl'
    })
    .when('/charges', {
      templateUrl: 'templates/charges.html',
      controller: 'chargesCtrl'
    })
    .when('/earnings', {
      templateUrl: 'templates/earnings.html',
      controller: 'earningsCtrl'
    })
    .otherwise('/details');
}