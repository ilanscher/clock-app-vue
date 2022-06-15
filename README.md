Hi,

This aplication works with a connection of Node.js, Vue & MySql.

You can insert time and date by identity number, edit, delete and vue the whole list. 

**In the MySql Workbench create the following database and table:**

**1.** CREATE DATABASE pos_db;
**2.** USE pos_db;
**3.** 
CREATE TABLE identity_card(
identity_id INT(11) PRIMARY KEY AUTO_INCREMENT,
identity_card INT,
identity_time_start	datetime,
identity_time_end datetime 
)ENGINE=INNODB;

**Getting Started with Clock App:**

'git clone' the project and then run inside 'frontend' directory: "npm install" (could be you will need to do the same in 'backend' directory).

**Don't forget:** inside '/backend/config/database.js' enter your mysql password (and change 'user' and 'root' if needed).

Next run both at the same time: 'npm run dev' inside 'frontend' directory and in another bash window run inside 'backend' directory: 'node index.js'.

This runs the app in the development mode. Open http://localhost:3000 to view it in your browser.

Good Luck!
