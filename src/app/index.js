'use strict';

angular.module('devload', ['ngAnimate', 'ui.router', 'ngMaterial', 'times.tabletop', 'times.c3chart'])
  .config(function ($stateProvider, $urlRouterProvider, TabletopProvider) {
    TabletopProvider.setTabletopOptions({
      key: 'https://docs.google.com/spreadsheets/d/1tdMlW1KDQrMYfmo6gFC1icz8g_-fWxmEnev8dPDanBo/pubhtml',
    });
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        resolve: {
          tabletopData: 'Tabletop'
        }
      });

    $urlRouterProvider.otherwise('/');
  })
;
