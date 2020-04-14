const fs = require('fs'); 
const createCsvWriter = require('csv-writer').createArrayCsvWriter; 
currentSession = null;  
csvWriter = null; 
errorLogsQueue = []; 




module.exports = startLogger=()=>{ 
    createCSVFile();
}

module.exports.Log=(error,sessionID,project,timestamp)=>{    
    
    if(currentSession === null)
        createCSVFile();  
    else 
        console.log(currentSession);
    errorLog = [sessionID, project, timestamp, error]; 
    addDataToCSV(errorLog);
    console.log(error);
}

const createCSVFile = () => {  
    let fileName = Date.now(); 
    let dirPath = __dirname+'/Logs';  
    if(!fs.existsSync(dirPath)){ 
        fs.mkdirSync(__dirname+'/Logs');
    } 
    fs.writeFileSync(`Logs/${fileName}.csv`);   
    currentSession = fileName;   
    initializeCSV(currentSession);
    return fileName; 
} 

function addDataToCSV(errorLog){   
     csvWriter.writeRecords([errorLog])       // returns a promise
        .then(() => { 
            console.log('...Done');
        }) 
        
} 

const initializeCSV = (currentSession) => { 
    console.log("In initializie csv");
    csvWriter = createCsvWriter({
        path: `Logs/${currentSession}.csv`, 
        append:true
    });  
    
    const columnHeadings = ['SessionID', 'Project','TimeStamp','Error','Developer Message', 'Data']

    csvWriter.writeRecords([columnHeadings]) 
                .then(()=>{
                    console.log("Initialized");
                })
}  
