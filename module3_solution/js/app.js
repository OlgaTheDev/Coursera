(function() {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiPath', 'https://davids-restaurant.herokuapp.com')
.directive('foundItems', foundItems);


function foundItems(){
  var ddo = {
    templateUrl: 'foundItems.html',
    restrict: 'A',
    scope: {
      foundItems: '<',
      myTitle: '@title',
      onRemove: '&'
    },
    controller: NarrowItDownDirectiveController,
    controllerAs: 'ctrl',
    bindToController: true

  };
  return ddo;
};

function NarrowItDownDirectiveController() {
  var ctrl = this;

  ctrl.message = 'Nothi'
};


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.title = 'Nothing found';

  ctrl.showSearchedItems = function() {
    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);
    promise.then(function(response) {
      ctrl.found = response;
      if (ctrl.found.length) {
        ctrl.title = 'Found ' + ctrl.found.length + ' item(s)';
      } else {
        ctrl.title = 'Nothing found'
      }
    })
  };

  ctrl.removeItem = function(index){
    ctrl.found.splice(index, 1);
    ctrl.title = 'Found ' + ctrl.found.length + ' item(s)';
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
