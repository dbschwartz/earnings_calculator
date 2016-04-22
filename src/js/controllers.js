
app.controller('detailsCtrl', ['$scope', 'mealService',   function($scope, mealService) {
  $scope.meals = mealService.getMealList();
  

  if($scope.meals.length === 0){
    $scope.currentMeal = 1;
  } else {
    $scope.currentMeal = $scope.meals.length-1;
  }

  console.log($scope.currentMeal);

    $scope.getMeal = function(meal){

      var calculatedMeal = mealService.getMealTotal(meal);
       mealService.addMeal(calculatedMeal);
       $scope.currentMeal+=1;
       this.meal = {};
    };
  
}]);



app.controller('changeCtrl', ['$scope', function($scope) {
  

}]);

app.controller('earningsCtrl', ['$scope', function($scope) {


}]);

app.controller('resetCtrl', ['$scope', function($scope) { 

}]);