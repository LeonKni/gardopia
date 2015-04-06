/**
 * Created by leonk1 on 3/1/15.
 */
(function () {
    'use strict';

    angular.module('GardopiaGardens', [
        'ui.router'
    ])
        .config(config);

    function config($urlRouterProvider, $stateProvider) {
        $urlRouterProvider
            .otherwise('/');
//TODO: configure 404 error router
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'html/partials/home.html',
                controller: 'homeCtrl'
            })
            .state('home', {
                url: 'home',
                templateUrl: 'html/partials/home.html',
                controller: 'homeCtrl'
            })
            .state('gardening', {
                url: 'gardening',
                templateUrl: 'html/partials/gardening.html'
            })
            .state('education', {
                url: 'education',
                templateUrl: 'html/partials/education.html'
            })
            .state('nutrition', {
                url: 'nutrition',
                templateUrl: 'html/partials/nutrition.html'
            })
            .state('communityNews', {
                url: 'communityNews',
                templateUrl: 'html/partials/communityNews.html'
            })
            .state('about', {
                url: 'about',
                templateUrl: 'html/partials/about.html'
            })
            .state('contact', {
                url: 'contact',
                templateUrl: 'html/partials/contact.html'
            });
    }

    //ApplicationController.$inject = ['$scope', '$rootScope'];
})();
