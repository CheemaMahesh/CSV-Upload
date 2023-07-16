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








**======================CSV Upload====================**
This project allows you to upload CSV files, display the data in them, and perform various operations on the data.

**======================Project Setup==================**
Follow these steps to set up the project on your local system:
1.Clone the repository or create a new project directory.
2.Make sure you have Node.js and npm (Node Package Manager) installed on your system.
3.Open a terminal or command prompt and navigate to the project directory.
4.Run the following command to initialize a new Node.js project:
      i.npm init
     ii.npm install express
    iii.npm install express-ejs
     vi.npm install mongoose
      v.npm install multer
      vi.npm install csv-parser
5.Create the folder structure as shown above
6.Start the server by running the following command in the terminal:
 i) nodemon index.js




**=============================URLs=======================================**
            1.localhost:8000  (home Page)(GET)
            2.localhost:8000/create/up (POST)
            3.localhost:8000/create/view/:id (GET)
            4.localhost:8000/created/delete/:id (GET)


 
  

