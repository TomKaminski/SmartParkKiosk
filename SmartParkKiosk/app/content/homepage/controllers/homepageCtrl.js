(function () {
    'use strict';
    
    function homepageCtrl($controller, $scope) {
        angular.extend(this, $controller('baseCtrl', { $scope: $scope }));
        var self = this;
    }
    
    angular.module('content-homepage').controller('homepageCtrl', ['$controller', '$scope', homepageCtrl]);
})();