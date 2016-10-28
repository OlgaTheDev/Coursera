(function() {
'use strict';

angular.module('public').service('SignupService', SignupService);

function SignupService() {
  var service = this;

  service.master = {};

  service.signup = function(user) {
    service.master = angular.copy(user);
    // console.log(service.master);
    
  };

}

})();
