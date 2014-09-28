"use strict";

tsApp.controller('OpenEntryListCtrl', function ($scope, EntryDataService) {

    $scope.openEntriesView = true;

    // $scope.getBookOrder = function(book) {
    //     return book.title;
    // };
    //
    EntryDataService.getEntriesByState('open').then(function(res) {
        $scope.entries = res.data;
    }, function(error) {
        console.log('An error occurred!', error);
    });
});
