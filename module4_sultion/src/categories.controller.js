(function() {
'use strict'

angular.module('data').controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['MenuDataService', 'categories'];
function CategoriesController(MenuDataService, categories){
  var catCtrl = this;

  catCtrl.categories = categories.data;
  console.log(catCtrl.categories);

};

})();
