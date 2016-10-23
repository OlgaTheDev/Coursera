(function (){

'use strict'

angular.module('menuApp').config(routesConfig);


routesConfig.$inject = ['$urlRouterProvider', '$stateProvider'];
function routesConfig($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

  .state('home', {
    url: '/',
    templateUrl: 'src/app/templates/home.template.html'
  })

  .state('categories', {
    url: '/categories',
    templateUrl: 'src/data/templates/categories.template.html',
    controller: 'CategoriesController as catCtrl',
    resolve: {
      categories: ['MenuDataService', function(MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/categories/{short_name}',
    templateUrl: 'src/data/templates/items.template.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.short_name);
      }]
    }
  })
}

})();
