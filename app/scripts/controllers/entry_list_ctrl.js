"use strict";

tsApp.controller('EntryListCtrl', function ($scope, EntryDataService) {

    $scope.allEntriesView = true;

    $scope.entries = EntryDataService.getAllEntries();

    // $scope.getBookOrder = function(book) {
    //     return book.title;
    // };
    //
    // EntryDataService.getAllEntries().then(function(res) {
    //     $scope.entries = res.data;
    // }, function(error) {
    //     console.log('An error occurred!', error);
    // });
});
