'use strict';

import GoogleSpreadsheet from 'google-spreadsheet';
import Bluebird from 'bluebird';

const SPREADSHEET_ID = '1H2rDTyrg4g1sGVbiWMW7dL-YEzQ4RJX7eD9dZNbrhHk';
const spreadsheet = new GoogleSpreadsheet(SPREADSHEET_ID);

export const sheets = {
	info: 1,
	territories: 2,
	crafters: 3
};

export const api = spreadsheet;

export const getRows = Bluebird.promisify(spreadsheet.getRows, {context: spreadsheet});
