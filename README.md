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

# Day 4 Implement some pattern and research about JWT
1. Implement
   * Singleton pattern using generic type
   * Factory Pattern
2. JWT
   2.1. JSON WEB TOKEN: A JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way to securely transmit information between parties as a JSON object. The information has a digital signature that prove it safe
   2.2. 3 Components:
   * Header: include type and algorithm use to encrypt and decrypt message. There are 2 common algs RSA, HMAC-SHA256(HS256). 
   * Playload: Playload has claims. Claim is a function about an entity (user). There are 3 types of claim: reserve, public, private
      * **Reserve claim**
      ```
      {
    "iss": "jira:1314039",
    "iat": 1300819370,
    "exp": 1300819380,
    "qsh": "8063ff4ca1e41df7bc90c8ab6d0f6207d491cf6dad7c66ea797b4614b71922e9",
    "sub": "batman",
    "context": {
        "user": {
            "userKey": "batman",
            "username": "bwayne",
            "displayName": "Bruce Wayne"
        }
       }
      }

      ```
   
   

   
   
