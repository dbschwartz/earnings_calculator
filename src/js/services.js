app.service("mealService", function () {
  var meals= [];

  return {

    getMealList: function() {
      return meals

    },
    getMealTotal: function(meal){
        var calculatedMeal={};
        calculatedMeal.tax = meal.taxrate * meal.price;
        calculatedMeal.subTotal = calculatedMeal.tax + meal.price;
        calculatedMeal.tip = meal.price * meal.tiprate;
        calculatedMeal.total = calculatedMeal.subTotal + calculatedMeal.tip;
        return calculatedMeal

    },

    addMeal: function (calculatedMeal) {
        if(meals.length === 0){
          calculatedMeal.id === 1;
        } else{
          calculatedMeal.id === meals.length - 1;
        }


      meals.push(calculatedMeal);
      console.log(meals);
      return meals
    }
  };

  }
);