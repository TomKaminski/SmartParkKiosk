(function() {
    'use strict';

    function stateConfig() {
        return {
            templateProvider: [
                '$templateCache',
                function ($templateCache) {
                    return $templateCache.get('app/content/order/templates/index.html');
                }
            ],
            controller: 'orderCtrl',
            controllerAs: 'ctrl'
        };
    }

    angular.module('content-order', ['appTemplates']).stateConfig = stateConfig();
})();



