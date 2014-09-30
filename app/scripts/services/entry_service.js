"use strict";

tsApp.factory('EntryDataService', function($http) {
    var srv = {};

    // srv._baseUrl = 'http://localhost:4730';

    srv._entryList = [
        {
            id           : 'P00001',
            state        : 'open',
            timestamp    : '1234567890',
            creator      : 'Oliver Ochs',
            errororigin  : 'fehlerort1',
            errorcode    : 91,
            errormessage : 'Ein Fehler ist aufgetreten',
            errorstack   : {},
        },
        {
            id           : 'P00002',
            state        : 'closed',
            timestamp    : '2345678901',
            creator      : 'Daniel Schneider',
            errororigin  : 'fehlerort2',
            errorcode    : 92,
            errormessage : 'Ui, nun ists passiert',
            errorstack   : {},
        },
        {
            id           : 'P00003',
            state        : 'in process',
            timestamp    : '3456789012',
            creator      : 'Walter Walter',
            errororigin  : 'fehlerort3',
            errorcode    : 93,
            errormessage : 'Wo ist bloß dieser Stockwerkshelfer?',
            errorstack   : {},
        },
    ];

    // Service implementation
    srv.getEntriesByState = function(state) {
        // select only state selected entries
        return srv._entryList;
    };

    srv.getAllEntries = function() {
        return srv._entryList;
    };

    srv.getEntryById = function(id) {
        // return $http.get(
        //     srv._baseUrl + '/api/tags'
        // );
    };

    srv.storeEntry = function(entry) {

        if ((entry !== undefined) && (entry !== null)) {
          srv._entryList.push(entry);
          return entry;
        } else {
          return null;
        }
    };

    srv.updateEntry = function(entry) {
        // return $http.put(
        //     srv._baseUrl + '/api/books/' + book.isbn, book
        // );
    };

    // Delete only if user is owner of the entry
    srv.deleteEntryById = function(id, user) {
        // return $http.delete(
        //     srv._baseUrl + '/api/books/' + isbn
        // );
    };

    // Public API
    return {
        getEntriesByState: function (state) {
            return srv.getEntriesByState(state);
        },
        getAllEntries: function() {
            return srv.getAllEntries();
        },
        getEntryById: function (id) {
            return srv.getEntryById(id);
        },
        storeEntry: function(entry) {
            return srv.storeEntry(entry);
        },
        updateEntry: function(entry) {
            return srv.updateEntry(entry);
        },
        deleteEntryById: function(id, user) {
            return srv.deleteEntryById(id, user);
        }
    };
});
