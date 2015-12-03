var SPREADSHEET_ID = '1H2rDTyrg4g1sGVbiWMW7dL-YEzQ4RJX7eD9dZNbrhHk';
var spreadsheet = new GoogleSpreadsheet(SPREADSHEET_ID);

// let this spreadsheet be used by multiple modules while using a single connection
module.exports = spreadsheet;
