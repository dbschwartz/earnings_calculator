// add comment
angular.module('myApp')
  .service('mealService', mealService);


// ** mealService ** //

// add comment
function mealService() {

  // container for all meals and $$$ totals
  var meals = {
    list: [],
    count: 0,
    tipTotal: 0,
    total: 0,
    averageTipPerMeal: 0
  };

  return {
    // add comment
    getCurrentMealID: function() {
      // add comment
      return meals.count;
    },
    // add comment
    getMealTotal: function(meal) {
      // add comment
      var calculatedMeal = {};
      calculatedMeal.price = meal.price;
      calculatedMeal.taxRate = meal.taxrate;
      calculatedMeal.tax = meal.taxrate / 100 * meal.price;
      calculatedMeal.subTotal = calculatedMeal.tax + meal.price;
      calculatedMeal.tipRate =meal.tiprate;
      calculatedMeal.tip = meal.price * meal.tiprate / 100;
      calculatedMeal.total = calculatedMeal.subTotal + calculatedMeal.tip;
      return calculatedMeal;
    },
    // add comment
    addMeal: function(calculatedMeal) {
      if(meals.count === 0) {
        calculatedMeal.id = 1;
      } else{
        calculatedMeal.id = meals.count + 1;
      }
      // add comment
      meals.list.push(calculatedMeal);
      meals.count += 1;
      meals.tipTotal += calculatedMeal.tip;
      meals.total += calculatedMeal.total;
      meals.averageTipPerMeal = meals.tipTotal/meals.count;
      return meals;
    },
    getCurrentMeal: function() {
      // add comment
      var currentMealIndex = meals.list.length-1;
      // add comment
      if(meals.list.length===0) {
        return 'No Meals have been added!';
      } else {
        return meals.list[currentMealIndex];
      }
    },
    // add comment
    getMealList: function() {
      return meals;
    },
    // add comment
    resetMealList: function() {
      meals= {
        list: [],
        count: 0,
        tipTotal: 0,
        total: 0,
        averageTipPerMeal: 0
      };
      return meals;
     }
  };
}