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
    restrict: 'E',
    scope: {
      foundItems: '<',
      myMessage: '@message',
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
};


NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var ctrl = this;

  ctrl.showSearchedItems = function() {

    ctrl.message = 'please wait untill loading...';

    var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchTerm);

    promise.then(function(response) {
      ctrl.found = response;

      if (ctrl.found.length) {
        ctrl.message = 'Found ' + ctrl.found.length + ' item(s)';
      } else {
        ctrl.message = 'Nothing found'
      }
    })
  };

  ctrl.removeItem = function(index){
    ctrl.found.splice(index, 1);
    ctrl.message = 'Found ' + ctrl.found.length + ' item(s)';
  };
};


MenuSearchService.$inject = ['$http', 'ApiPath'];
function MenuSearchService($http, ApiPath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm){

    return $http({
      method: 'GET',
      url: (ApiPath + '/menu_items.json')
    })
    .then(function(result){
      var foundItems = [];
      if (searchTerm !== ''){
        result.data.menu_items.forEach(function (item) {
          if (item.description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(item);
          }
        });
      }

      return foundItems;
    });

  };
};


})();
