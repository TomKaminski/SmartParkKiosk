(function () {
    'use strict';

    angular.module('app-routes', [
        'ui.router',
        'content-layout',
        'content-homepage',
        'content-error',
        'content-order',
        'content-summary',
        'content-thankYou'
    ]).config([
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider',
        function (
            $stateProvider,
            $locationProvider,
            $urlRouterProvider
        ) {
            $locationProvider.html5Mode(false);

            $stateProvider.state('app', {
                abstract: true,
                url: "/app",
                views: {
                    'layout': angular.module('content-layout').stateConfig
                },
                cache: false
            });

            $stateProvider.state('app.homepage', {
                url: '/home',
                views: {
                    'content': angular.module('content-homepage').stateConfig
                },
                cache: false
            });

            $stateProvider.state('app.homepage.alias', {
                url: '/',
                cache: false
            });

            $stateProvider.state('app.summary', {
                url: '/summary',
                views: {
                    'content': angular.module('content-summary').stateConfig
                },
                cache: false
            });

            $stateProvider.state('app.thankYou', {
                url: '/thankYou',
                views: {
                    'content': angular.module('content-thankYou').stateConfig
                },
                cache: false
            });

            $stateProvider.state('app.error', {
                url: '/error',
                views: {
                    'content': angular.module('content-error').stateConfig
                },
                cache: false
            });

            $stateProvider.state('app.order', {
                url: '/order',
                views: {
                    'content': angular.module('content-order').stateConfig
                },
                cache: false
            });

            $urlRouterProvider.otherwise("/app/home");
        }
    ]);
})();


