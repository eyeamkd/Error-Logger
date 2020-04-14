"use strict";
const fs = require('fs');
const createCsvWriter = require('csv-writer').createArrayCsvWriter;
let currentSession = null;
let csvWriter = null;
module.exports.Log = (sessionID = "", project = "", error = "", message = "", data = null) => {
    if (currentSession === null)
        createCSVFile();
    else
        console.log(currentSession);
    let errorLog = [sessionID, project, error, message, data, Date.now()];
    addDataToCSV(errorLog);
    console.log(error);
};
const createCSVFile = () => {
    let fileName = Date.now();
    let dirPath = __dirname + '/Logs';
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(__dirname + '/Logs');
    }
    fs.writeFileSync(`Logs/${fileName}.csv`);
    currentSession = fileName;
    initializeCSV(currentSession);
    return fileName;
};
function addDataToCSV(errorLog) {
    csvWriter.writeRecords([errorLog]) // returns a promise
        .then(() => {
        console.log('...Done');
    });
}
const initializeCSV = (currentSession) => {
    console.log("In initializie csv");
    csvWriter = createCsvWriter({
        path: `Logs/${currentSession}.csv`,
        append: true
    });
    const columnHeadings = ['SessionID', 'Project', 'Error', 'Message', 'Data', 'TimeStamp'];
    csvWriter.writeRecords([columnHeadings])
        .then(() => {
        console.log("Initialized");
    });
};
//# sourceMappingURL=Logger.js.map