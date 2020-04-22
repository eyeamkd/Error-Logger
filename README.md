# log-your-err
Node App that records all the application errors and logs it to a CSV file during the app's production, coz you know...console.log( ) is bad.  

## Documentation 

This package, logs all your errors that rise during production or testing in a separate "Log" folder, in the form of CSV files listing out all the errors that rose. 

Log() function gives you options to send your message while the error is caused. 

## Usage 
```` 
import { Log } from 'log-your-err';

Log("Your session id", 
    "Your Project Name", 
    "Error that's to be logged", 
    "Message for developers", 
    "Data causing the err")
````

all the variables mentioned above are optional,but remember the order when using them.  

## Working 

```
const Log = require('./Logger.js').Log;


Log("Session-1234","Project1","Error","This has a msg from kunal");  
Log("Session-1234","Project1","Error");  

```
![Screenshot 2020-04-22 at 5 22 12 AM](https://user-images.githubusercontent.com/31094327/79925968-561e3f00-8459-11ea-9488-ba56e63ba463.png)


