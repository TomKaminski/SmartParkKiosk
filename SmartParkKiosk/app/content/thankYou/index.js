(function() {
    'use strict';

    function stateConfig() {
        return {
            templateProvider: [
                '$templateCache',
                function ($templateCache) {
                    return $templateCache.get('app/content/thankYou/templates/index.html');
                }
            ],
            controller: 'thankYouCtrl',
            controllerAs: 'thankYou'
        };
    }

    angular.module('content-thankYou', ['appTemplates']).stateConfig = stateConfig();
})();



