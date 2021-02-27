const xlsxFile = require('read-excel-file/node');
var con = require("../controller/dbConnection"); // Connection to the database
const config = require("../config/net_config"); 

console.log(`assets/index.js`);

xlsxFile('./Data.xlsx').then((rows) => {
    for (row_idx in rows) {
        for (col_idx in rows[row_idx]) {
            console.log(`${row_idx}:${col_idx}=${rows[row_idx][col_idx]}`);
        }
    }
    // console.log(rows);
    // console.table(rows);
})

/*
 In the require statement, we specified /node. This is important, as 
 this can also be done with JavaScript in the browser by using:

 import xlsxFile from 'read-excel-file'
*/

function persistTimeEntries(timeEntry) {
    console.log(`persistTimeEntry(${timeEntry}): `);
    // Get either the_date or tomorrow's date and convert it in the right correct for DB
    // var targetDate = the_date ? new Date(the_date) : new Date(new Date().addDays(1));
    // var sourceword = the_date ? 'supplied' : "tomorrow's";

    // console.log(`persistTimeEntries(${the_date}): Using ${sourceword} date ${targetDate}. `);
    var dateToInsertInDB = reportingController.dateToDashedYYYYMMDD(targetDate);

    con.query("SELECT email FROM hr_directory", function (error, results) {
        if (error) {
            console.error(error);
            return;
        }

        else {
            // Init reports
            var insertRequest = "INSERT IGNORE INTO reports (email, date, is_auto_filled) VALUES ";
            var arrayEmails = [];
            for (var i = 0; i < results.length; i++) {
                insertRequest += "(\"" + results[i].email + "\", \"" + dateToInsertInDB + "\", 1)";
                if (i < results.length - 1) {
                    insertRequest += ", ";
                }
            }

            con.query(insertRequest, function (error, result) {
                if (error) {
                    // Insertion failed
                    console.error(error);
                    return;
                }

                else {
                    // Init global_count
                    con.query("INSERT IGNORE INTO global_count (date, category_id) VALUES (?, 1), (?, 2)", [dateToInsertInDB, dateToInsertInDB], function (error, result) {
                        if (error) {
                            // Insertion failed
                            console.error(error);
                            return;
                        }

                        else {
                            // All succeeded
                            return;
                        }
                    });
                }
            });
        }
    });
}

/** padZero( ) Ensures that <e> has a leading zero if it's length is 1. */
function padZero(e) { return ((e.toString().length == 1) ? '0' : '') + e.toString(); }

/** dateToDashedYYYYMMDD() takes a a Date object <date> and returns a String (i.e., '2020-11-08'). 
 *  No validation or error checking is performed.
 */
function dateToDashedYYYYMMDD(date) {
	return [date.getFullYear(), padZero(date.getMonth() + 1), padZero(date.getDate())].join('-');
}

/** dateObjFromDashedYYYYMMDD() takes a <dateWithDashes> as String (i.e., '2020-11-08'), and returns a Date object. 
 *  No validation or error checking is performed.
 */
function dateObjFromDashedYYYYMMDD(dateWithDashes) {
	var dateParts = dateWithDashes.match(/^(\d{4})\-(\d{2})\-(\d{2})$/);
	var dateObject = new Date(dateParts[1], dateParts[2] - 1, dateParts[3]);
	return dateObject;
}
