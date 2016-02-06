(function () {
    'use strict';

    function summaryCtrl(cartService, $controller, $scope, $state) {
        angular.extend(this, $controller('baseCtrl', { $scope: $scope }));
        var self = this;
        self.order = cartService.getcartData();
        if (self.order.email.length === 0) {
            $state.go('app.order');
        }
    }

    angular.module('content-summary').controller('summaryCtrl', ['cartService', '$controller', '$scope', '$state', summaryCtrl]);
})();