# Avenger's application

Description of the stack used for this Avenger's app

**Backend**

- MongoDB on MongoDB Altas ( https://cloud.mongodb.com/v2/61a535149c9f9861f91e45a1#metrics/replicaSet/61a535eb077eb037f728b797/explorer/myFirstDatabase/heroes/find)
- NodeJS with ExpressJS framework
- Use routes to define API endpoints

__Specifications de l'API__

GET /heroes

- Get all heroes data

POST /heroes

- Create a new heroes into the MongoDB database

UPDATE /heroes/:id

- Update a specific heroes from hero ID

DELETE /heroes/:id

- Delete a specific heroes from hero ID

**Frontend**

ReactJS is used for the frontend with specifics components
used to display list of heroes.
Heroes can be also be searched with the input search bar and filtered by statuses

- HeroesList
    - Display a list of Hero components

- Hero
    - Display a single Hero

- Splashscreen
    - Application start
