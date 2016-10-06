(function() {
  'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//First controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuyList.buyTheItem = function(index) {
    ShoppingListCheckOffService.buyTheItem(index)
  }
}

//Second controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var boughtList = this;

  boughtList.boughtItems = ShoppingListCheckOffService.getItemsBought();
}

//Service function
function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = [
    {itemName: 'Cola', itemQuantity: 7},
    {itemName: 'Fanta', itemQuantity: 2},
    {itemName: 'Pepsi', itemQuantity: 5},
    {itemName: 'Sprite', itemQuantity: 3},
    {itemName: 'Red Bull', itemQuantity: 10}
  ];

   var boughtItems = [];

  service.buyTheItem = function(index) {
    var itemIsBeingBought = toBuyItems.splice(index, 1);
    //boughtItems = boughtItems.concat(itemIsBeingBought);
    boughtItems.push(itemIsBeingBought[0])
  }

  service.getItemsBought = function() {
    return boughtItems;
  }

  service.getItemsToBuy = function() {
    return toBuyItems;
  }
}

})();
