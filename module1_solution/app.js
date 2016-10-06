(function () {
'use strict';

   angular.module('LunchChecker', [])
         .controller('LunchCheckerController', LCController);

   LCController.$inject = ['$scope'];

   function LCController ($scope) {
     $scope.dishes = '';
     $scope.message = '';

     $scope.showMessage = function() {
       var dishesQuantity = getQuantity($scope.dishes);

       if (dishesQuantity === 0) {
         $scope.message = 'Please enter data first!';
       } else if (dishesQuantity > 0 && dishesQuantity <= 3) {
         $scope.message = 'Enjoy!'
       } else {
         $scope.message = 'Too much!'
       }
     };

   }

  function getQuantity (str) {
    var array = str.split(',');
    var filteredArray = [];
    var trimmedArray = array.forEach(function(item) {
      if (item.trim().length > 0) {
        filteredArray.push(item);
      }
    })
    return filteredArray.length;
  }




})();
