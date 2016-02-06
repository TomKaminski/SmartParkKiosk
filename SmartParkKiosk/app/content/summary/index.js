(function() {
    'use strict';

    function stateConfig() {
        return {
            templateProvider: [
                '$templateCache',
                function ($templateCache) {
                    return $templateCache.get('app/content/summary/templates/index.html');
                }
            ],
            controller: 'summaryCtrl',
            controllerAs: 'summary'
        };
    }

    angular.module('content-summary', ['appTemplates']).stateConfig = stateConfig();
})();



