(function() {
'use strict';

angular.module('public').service('SignupService', SignupService);

SignupService.$inject = ['$http', 'ApiPath', '$q'];
function SignupService($http, ApiPath, $q) {
  var service = this;

  service.master = {};

  service.signup = function(user) {

    var deffered = $q.defer();

    var request = $http.get(ApiPath + '/menu_items/' + user.favDish + '.json');
    request.then(function(response) {
      service.master = angular.copy(user);
      deffered.resolve({
        completed: true,
        favDishValid:true
      });
    }, function (data) {
      deffered.reject({
        completed: false,
        favDishValid:false
      });
    });

    return deffered.promise;
  };
}

})();
