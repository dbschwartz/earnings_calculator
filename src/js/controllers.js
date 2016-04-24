// add comment
angular.module('myApp')
  .controller('detailsCtrl', detailsCtrl)
  .controller('chargesCtrl', chargesCtrl)
  .controller('earningsCtrl', earningsCtrl);


// ** detailsCtrl ** //

// add comment
detailsCtrl.$inject = ['$scope', 'mealService'];

// add comment
function detailsCtrl($scope, mealService) {
  // add comment
  $scope.currentMeal = mealService.getCurrentMealID() +1;
  // add comment
  $scope.getMeal = function(meal){
    var calculatedMeal = mealService.getMealTotal(meal);
    mealService.addMeal(calculatedMeal);
    $scope.currentMeal = mealService.getCurrentMealID() +1;
    this.meal = {};
  };
}


// ** chargesCtrl ** //

// add comment
chargesCtrl.$inject = ['$scope', 'mealService'];

// add comment
function chargesCtrl($scope, mealService) {
  // add comment
  $scope.currentMeal = mealService.getCurrentMeal();
}


// ** earningsCtrl ** //

chargesCtrl.$inject = ['$scope', 'mealService'];

// add comment
function earningsCtrl($scope, mealService) {
  // add comment
  $scope.mealList = mealService.getMealList();
  // add comment
  $scope.resetMeals = function(){
    mealService.resetMealList();
    $scope.mealList = mealService.getMealList();
  };
}
