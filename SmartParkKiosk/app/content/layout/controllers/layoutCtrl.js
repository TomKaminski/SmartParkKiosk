(function () {
    'use strict';
    
    function layoutCtrl($controller, $scope) {
        angular.extend(this, $controller('baseCtrl', { $scope: $scope }));
        var self = this;
    }
    
    angular.module('content-layout').controller('layoutCtrl', ['$controller', '$scope', layoutCtrl]);
})();