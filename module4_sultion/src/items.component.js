(function (){
'use strict';

angular.module('data').component('itemsList', {
  templateUrl: 'src/templates/itemsList.template.html',
  bindings: {
    items: '<',
    categoryName: '@'
  }
})

})();
