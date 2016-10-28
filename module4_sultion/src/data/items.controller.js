(function (){
'use strict'


angular.module('data').controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', 'items'];
function ItemsController(MenuDataService, items, $stateParams, name){
  var itemsCtrl = this;

  if (items.data.menu_items.length) {
    itemsCtrl.categoryName = items.data.category.name;
    itemsCtrl.itemsEmpty = false;
  } else {
    itemsCtrl.itemsEmpty = true;
  }
  itemsCtrl.items = items.data.menu_items;

console.log(itemsCtrl.itemsEmpty);
};

})();
