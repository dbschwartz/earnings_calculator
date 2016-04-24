
app.controller('detailsCtrl', ['$scope', 'mealService',   function($scope, mealService) {
  $scope.currentMeal = mealService.getCurrentMealID() +1;

  console.log($scope.currentMeal);

    $scope.getMeal = function(meal){

      var calculatedMeal = mealService.getMealTotal(meal);
       mealService.addMeal(calculatedMeal);
       $scope.currentMeal = mealService.getCurrentMealID() +1;

       this.meal = {};
    };
  
}]);



app.controller('chargesCtrl', ['$scope', 'mealService', function($scope, mealService) {
  $scope.currentMeal = mealService.getCurrentMeal();  

}]);

app.controller('earningsCtrl', ['$scope', 'mealService', function($scope, mealService) {
  $scope.mealList = mealService.getMealList();


}]);

app.controller('resetCtrl', ['$scope', function($scope) { 

}]);