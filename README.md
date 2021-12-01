# Avenger's application

Description of the stack used for this Avenger's app

##Backend

- MongoDB on MongoDB Altas ( https://cloud.mongodb.com/v2/61a535149c9f9861f91e45a1#metrics/replicaSet/61a535eb077eb037f728b797/explorer/myFirstDatabase/heroes/find)
- NodeJS with ExpressJS framework
- Use routes to define API endpoints

__API Specs__

GET /heroes

    Get all heroes data

GET /hero/:id

    Get hero detail by ID

POST /heroes

    Create a new hero

##Frontend

ReactJS is used for the frontend with specifics components
used to display list of heroes.
Heroes can be also be searched with the input search bar and filtered by statuses

- HeroesList
    - Display a list of Hero components

- Hero
    - Display a single Hero

- HeroDetail
    - Display a single hero detail

- Splashscreen
    - Application start

---

##Setup

1. To start the project first configure API using NPM
In the API folder execute this command

    `npm install`

2. Create a .env variable to use this MongoDB instance

    `MONGO_DB_URL=mongodb+srv://rhumandcode:1234@cluster0.4uaqj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

3. In the frontend folder, execute the following command

    `npm install`

4. Create a new .env variable containing API hostname

    `REACT_APP_API_ENDPOINT=http://localhost:3001/`

5. Start to run the API by running in the api folder

    `npm run start`

6. Finally run the frontend by running in the frontend folder

    `npm run start`


