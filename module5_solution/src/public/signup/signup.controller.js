(function() {
'use strict';

angular.module('public').controller('SignupController', SignupController);

SignupController.$inject = ['SignupService'];
function SignupController(SignupService) {
  var signupCtrl = this;

  signupCtrl.user = {};
  signupCtrl.completed = false;

  signupCtrl.signup = function(user) {
    SignupService.signup(user);
    signupCtrl.completed = true;
  }
}


})();
