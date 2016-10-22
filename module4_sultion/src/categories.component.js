(function (){
'use strict'

angular.module('menuApp').component('categoriesList', {
  templateUrl: 'src/templates/categoriesList.template.html',
  bindings: {
    categories: '<'
  }
})

})();
