# CSV-Upload
      |            
      |             | _css===============|=========================|
      |             |_imgs               |                         |
      |__assets-----|                  csv.css                  home.css
      |             |_js==csv.js
      |
      |__config====mongoose.js
      |                                     
      |                                     |==csv_controller.js
      |__controllers------------------------|
      |                                     |==home_controller.js
      |                | ==csv.js                      
      |__routes--------|
      |                | ==index.js
      |  
      |__.gitignore
      |
      |
      |__uploads=======csv
      |                           |
      |                           |==csv.ejs
      |__views=====================
      |                           |==home.ejs
      |                           |
      |__index.js
      |
      |
      |__package-lock.json
      |
      |
      |__packsage.json








**CSV Upload**
This project allows you to upload CSV files, display the data in them, and perform various operations on the data.

**Project Setup**
Follow these steps to set up the project on your local system:
1.Clone the repository or create a new project directory.
2.Make sure you have Node.js and npm (Node Package Manager) installed on your system.
3.Open a terminal or command prompt and navigate to the project directory.
4.Run the following command to initialize a new Node.js project:
   4.i) npm init -y
5.Install the necessary dependencies by running the following command:
5.i)  npm install express multer csv-parser
6.Create the folder structure as shown above
10.Start the server by running the following command in the terminal:
 10.i) nodemon index.js



**Features**
***CSV File Upload***
Use the file input element in the HTML form to allow users to select and upload a CSV file.

The server-side code in server.js should handle the file upload using Multer and save the file to a designated folder.

**List of Uploaded CSV Files**
Display a list of all uploaded CSV files on the front-end.

Use JavaScript to fetch the list of files from the server and dynamically update the HTML to show the file names.

**Display Data in Table**
When a user selects a CSV file from the list, fetch the file data from the server and display it in a table on the front-end.

Parse the CSV file using the csv-parser library and dynamically generate the table headers based on the column headers in the CSV file.


 
  

