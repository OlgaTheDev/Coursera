(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiPath', 'https://davids-restaurant.herokuapp.com');


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.searchTerm = '';

  ctrl.showSearchedItems = function() {
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
    promise.then(function(response) {
      ctrl.found = response;
    })
  };

};


MenuSearchService.$inject = ['$http', 'ApiPath'];
function MenuSearchService($http, ApiPath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){
    var searchTermLowerCase = searchTerm.toLowerCase();

    return $http({
      method: 'GET',
      url: (ApiPath + '/menu_items.json')
    })
    .then(function(result){
      var foundItems = [];
      result.data.menu_items.forEach(function (item) {
        if (item.description.indexOf(searchTermLowerCase) !== -1) {
          foundItems.push(item);
        }
      });

      return foundItems;
    });

  };
};


})();
