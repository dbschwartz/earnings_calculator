app.service("mealService", function () {
  var meals= {list: [],
              count: 0,
              tipTotal: 0,
              total: 0
            };

  return {

   
    getMealTotal: function(meal){
        var calculatedMeal={};
        calculatedMeal.price = meal.price;
        calculatedMeal.taxRate = meal.taxrate;
        calculatedMeal.tax = meal.taxrate/100 * meal.price;
        calculatedMeal.subTotal = calculatedMeal.tax + meal.price;
        calculatedMeal.tipRate =meal.tiprate;
        calculatedMeal.tip = meal.price * meal.tiprate/100;
        calculatedMeal.total = calculatedMeal.subTotal + calculatedMeal.tip;
        return calculatedMeal

    },

    addMeal: function (calculatedMeal) {

        if(meals.count === 0){
          calculatedMeal.id = 1;
        } else{
          calculatedMeal.id = meals.count + 1;
        }

      meals.list.push(calculatedMeal);
      meals.count+=1;
      meals.tipTotal += calculatedMeal.tip;
      meals.total += calculatedMeal.total;
      meals.averageTipPerMeal = meals.tipTotal/meals.count;

      console.log(meals);
      return meals
    },

    getCurrentMeal: function(){
      var currentMealIndex=meals.list.length-1;
      if(meals.list.length===0){
        return "No Meals have been addeds   !"
      }else{
        return meals.list[currentMealIndex];
      }
    },

     getMealList: function() {
      return meals;
     }
  }; 
});