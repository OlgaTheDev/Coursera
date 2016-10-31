(function() {
'use strict';

angular.module('public').controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var signupCtrl = this;

  signupCtrl.user = {};
  signupCtrl.completed = false;
  signupCtrl.favDishStatus = true;

  signupCtrl.signup = function(user) {
    var promise = SignupService.signup(user);
    promise.then(function(response) {
      signupCtrl.completed = SignupService.completed;
      signupCtrl.favDishStatus = SignupService.favDishValid;
    }, function(response) {
      signupCtrl.completed = SignupService.completed;
      signupCtrl.favDishStatus = SignupService.favDishValid;
    });
  }
}

})();
