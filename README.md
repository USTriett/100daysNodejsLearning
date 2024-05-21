# 100daysNodejsLearning

# Day 1 Funtaldamental of typescript
1. Basic syntax: conditional statements, loop, ...
2. Types:
   a. Basic types: boolean, number, string, object, array, tuple, enum, any...
   b. Class: class, interface, type,...
3. Setup Nodejs env, tsconfig for Nodejs typescript project

# Day 2 Express Basics
1. Create simple server with http protocol
2. Express project structure:
  a. MVC Pattern
   next day

  b. Middlewares
   ![3-6](https://github.com/USTriett/100daysNodejsLearning/assets/115467911/e6a5b1ea-cd17-478d-8c9f-c14f7f472b4b)
   The application or service between to application(ex: front-end/backend).
   to facilitate their communication.

  c. Routers:
      * /abc: handle -> /abc
      * /ab+c: handles -> /abc or /abbbbbbc or /abbbbbbbbbbbbbbbbbbbbbbbbc,...
      * /ab?ac: handles -> /aac or abac
      * /ab*ac: handles ->  /ab + anything + ac
      * ...
# Day 3 MVC architecture
![ảnh](https://github.com/USTriett/100daysNodejsLearning/assets/115467911/73409fd3-2cad-45e4-a8dc-9edc0512091a)

**Sumary: MVC is an archtecture help emphasizes a separation between the software's business logic and display**
1. Model:
   * _Model part is used for communicate with data, CRUD(create, read, update, delete) data in DBMS_
   * Ex: StudentModel is use for fetch (read) student data in DBMS, Student (id, name, dayofbirth,...), StudentModel(StudentList:Student[], ...) 
2. View:
   * Storage the view(UI: can be html) -> render for user when complete fetching data operation
   * Ex: When StudentModel.fetchStudents() -> return success -> send View to frontend -> update UI on browser 
3. Controller:
  * Like a router -> route request from user to corrected Model then send data to View -> View send view filled with data back to Controller -> frontend

**--> Helps us clearly define business processing, data processing and data presentation tasks. Therefore, updating and editing one component does not affect other components**

   
   
