(function() {
'use strict';

angular.module('public').component('signupForm', {
  templateUrl: 'src/public/signup/signup-form.html',
  bindings: {
    user: '=',
    onSignup: '&',
    favDishStatus: '<',
    completed: '<'
  }
});


})();
