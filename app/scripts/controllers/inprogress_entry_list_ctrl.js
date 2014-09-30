"use strict";

tsApp.controller('InProgressEntryListCtrl', function ($scope, EntryDataService) {

    $scope.inProgressEntriesView = true;

    $scope.entries = EntryDataService.getEntriesByState('inprocess');

    // $scope.getBookOrder = function(book) {
    //     return book.title;
    // };
    //
    // EntryDataService.getEntriesByState('inprocess').then(function(res) {
    //     $scope.entries = res.data;
    // }, function(error) {
    //     console.log('An error occurred!', error);
    // });
});
