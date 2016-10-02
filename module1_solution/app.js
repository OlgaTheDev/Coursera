(function () {
'use strict';

   angular.module('LunchChecker', [])
         .controller('LunchCheckerController', LCController);

   LCController.$inject = ['$scope'];

   function LCController ($scope) {
     $scope.dishes = '';
     $scope.message = '';

     $scope.showMessage = function() {
       var dishesQuantity = checkQuantity($scope.dishes);
       if (dishesQuantity === 0) {
         $scope.message = 'Please enter data first!'
       } else if (dishesQuantity > 0 && dishesQuantity <= 3) {
         $scope.message = 'Enjoy!'
       } else {
         $scope.message = 'Too much!'
       }
     };

   }

   function checkQuantity (string) {
     return string ? string.split(',').length : 0;
   }


})();
