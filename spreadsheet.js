'use strict';

var GoogleSpreadsheet = require('google-spreadsheet');
var SPREADSHEET_ID = '1H2rDTyrg4g1sGVbiWMW7dL-YEzQ4RJX7eD9dZNbrhHk';
var spreadsheet = new GoogleSpreadsheet(SPREADSHEET_ID);

module.exports.sheets = {
	info: 1,
	territories: 2,
	crafters: 3
};

module.exports.api = spreadsheet;
