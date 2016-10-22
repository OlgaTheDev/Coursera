(function (){
'use strict'


angular.module('menuApp').controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', 'items'];
function ItemsController(MenuDataService, items, $stateParams, $state){
  var itemsCtrl = this;

  itemsCtrl.items = items.data.menu_items;
  // itemsCtrl.categoryName = $stateParams.name;

console.log(itemsCtrl.categoryName);
};


})();
