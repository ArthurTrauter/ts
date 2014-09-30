"use strict";

tsApp.controller('OpenEntryListCtrl', function ($scope, EntryDataService) {

    $scope.openEntriesView = true;

    $scope.entries = EntryDataService.getEntriesByState('open');
    // $scope.getBookOrder = function(book) {
    //     return book.title;
    // };
    //
    // EntryDataService.getAllEntries().then(function(res) {
    //     $scope.entries = res.data;
    // }, function(error) {
    //     console.log('An error occurred!', error);
    // });
    // EntryDataService.getEntriesByState('open').then(function(res) {
    //     $scope.entries = res.data;
    // }, function(error) {
    //     console.log('An error occurred!', error);
    // });
});
