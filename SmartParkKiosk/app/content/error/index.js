(function() {
    'use strict';

    function stateConfig() {
        return {
            templateProvider: [
                '$templateCache',
                function ($templateCache) {
                    return $templateCache.get('app/content/error/templates/index.html');
                }
            ],
            controller: 'errorCtrl',
            controllerAs: 'error'
        };
    }

    angular.module('content-error', ['appTemplates']).stateConfig = stateConfig();
})();



