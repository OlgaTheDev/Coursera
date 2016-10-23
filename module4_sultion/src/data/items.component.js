(function (){
'use strict';

angular.module('data').component('itemsList', {
  templateUrl: 'src/data/templates/itemsList.template.html',
  bindings: {
    items: '<',
    categoryName: '@'
  }
})

})();
