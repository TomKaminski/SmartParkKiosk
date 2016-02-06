(function () {
    'use strict';
    
    function thankYouCtrl($controller, $scope) {
        angular.extend(this, $controller('baseCtrl', { $scope: $scope }));
        var self = this;
    }
    
    angular.module('content-thankYou').controller('thankYouCtrl', ['$controller', '$scope', thankYouCtrl]);
})();