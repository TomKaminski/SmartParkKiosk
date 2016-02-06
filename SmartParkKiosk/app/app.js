(function () {
    'use strict';

    var app = angular.module('app', ['app-routes', 'appTemplates', 'angular-virtual-keyboard', 'ui.slider']);

    app.constant('CONFIG', {
        apiGlobalUrl: "http://localhost:9873/Api",
        ConnectivityProblemMessage: "Wyst¹pi³ b³¹d po³¹czenia, sprawdŸ ³¹cznoœæ z internetem.",
        notificationEnum: {
            "error": "error",
            "success": "success"
        }
    });
})();

