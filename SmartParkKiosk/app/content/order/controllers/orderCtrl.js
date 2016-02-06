(function () {
    'use strict';

    function orderCtrl(cartService, $controller, $scope, $state) {
        angular.extend(this, $controller('baseCtrl', { $scope: $scope }));
        var self = this;
        self.order = cartService.getcartData();


        self.processOrder = function () {
            if (self.order != null) {
                var order = self.order;
                if (order.charges != null && order.name != null && order.lastname != null && order.email != null) {
                    cartService.insertBasicData(order);
                    $state.go('app.summary');
                }
            }
        }
    }

    angular.module('content-order').controller('orderCtrl', ['cartService', '$controller', '$scope', '$state', orderCtrl]);
})();