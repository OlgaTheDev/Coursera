(function (){
'use strict'


angular.module('data').controller('ItemsController', ItemsController);

ItemsController.$inject = ['MenuDataService', 'items'];
function ItemsController(MenuDataService, items, $stateParams, name){
  var itemsCtrl = this;

  itemsCtrl.items = items.data.menu_items;
  itemsCtrl.categoryName = items.data.category.name;

};

})();
