(function (){
'use strict'

angular.module('data').component('categoriesList', {
  templateUrl: 'src/data/templates/categoriesList.template.html',
  bindings: {
    categories: '<'
  }
})

})();
