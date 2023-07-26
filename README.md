# CRUD WebServer using RESTApi by NodeJS and MSSQL

This simple script map SQL commands as API, and to CRUD, a simple API call to localhost/api/ can be done.

To use:
1. ```git clone``` this repository or download it as zip. (Recommended) Fork this repository, then clone it from your own github.
2. Download [NODE JS](https://nodejs.org/en) and install it on your PC.
3. Open the folder on your IDE. (Recommended) Download [Visual Studio Code](https://code.visualstudio.com/).
4. Run ```npm install``` to automatically install any necessary package from NodeJS.
5. Create ```.env``` file and set DB connection:
   ```
   NODE_ENV = NodeJS Mode (development | production)
   PORT = your_mssql_tcp_port
   HOST = your_mssql_tcp_host
   HOST_URL = combination_of_HOST:PORT
   SQL_USER = your_mssql_user_name
   SQL_PASSWORD = your_mssql_user_password
   SQL_DATABASE = eventmanagement -> can be ccustomized
   SQL_SERVER = your_mssql_server
   SQL_ENCRYPT = false
   ```
6. To check any MS SQL details, you can go to SQL Server 20XX Configuration Manager > SQL Server Network Configuration > Protocols for MSSQLSERVER. Enable TCP/IP, then right click to select its properties. Go to IPX and enable it if it is still disabled.
7. Run ```node index.js``` and if everything goes well, you will see ```Server is listening on HOST:PORT```
8. Check the API with Postman or any tools. It is ready to be used for basic CRUD. Additional SQL commands can be added by:
   - Add .sql file in ```./data/events/```
   - Update ```index.js``` in that folder
   - Update ```eventController.js``` in ```./controller/```
   - Update ```eventRoutes.js``` in ```./routes/```
   - Update ```index.js``` on the main folder
   - Restart server
9. I hope this repository can help you understand how to use NodeJS to make CRUD with RESTApi to MSicrosoft SQL Server. Please let me know if you have any question by raising issues~
