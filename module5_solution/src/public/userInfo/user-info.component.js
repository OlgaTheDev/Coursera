(function() {
'use strict';

angular.module('public').component('userInfoBlock', {
  templateUrl: 'src/public/userInfo/user-info.html',
  bindings: {
    user: '<'
  }
});


})();
