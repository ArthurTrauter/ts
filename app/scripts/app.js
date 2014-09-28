"use strict";

var tsApp = angular.module('tsApp', ['ngRoute']);

tsApp.config(function ($routeProvider) {
    $routeProvider.when('/ts/open', {
        templateUrl: 'templates/entry_list.html',
        controller: 'OpenEntryListCtrl'
    })
    .when('/ts/all', {
        templateUrl: 'templates/entry_list.html',
        controller: 'EntryListCtrl'
    })
    .when('/ts/inprocess', {
        templateUrl: 'templates/entry_list.html',
        controller: 'InProgressEntryListCtrl'
    })
//     .when('/ts/:id', {
//         templateUrl: 'templates/entry_details.html',
//         controller: 'entryDetailsCtrl'
//     });
    /* Default route */
    .otherwise({
        redirectTo: '/ts/open'
    });
});
