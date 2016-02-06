(function () {
    'use strict';
    
    function errorCtrl($controller, $scope) {
        angular.extend(this, $controller('baseCtrl', { $scope: $scope }));
        var self = this;
    }
    
    angular.module('content-error').controller('errorCtrl', ['$controller', '$scope', errorCtrl]);
})();