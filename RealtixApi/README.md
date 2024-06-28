# Node.js PostgreSQL CRUD REALTIXAPI

The following table shows overview of the Rest APIs that will be exported:

- GET     `api/crooms`	            get all crooms
- GET     `api/crooms/:id`         get crooms by id
- POST    `api/crooms`             add new crooms
- PUT     `api/crooms/:id`         update crooms by id
- DELETE  `api/crooms/:id`         remove crooms by id
- DELETE  `api/crooms`             remove all crooms
- GET     `api/crooms/published`   find all published crooms
- GET     `api/crooms?title=[kw]`  find all crooms which title contains 'kw'

## Project setup
```
npm install
```

### Run
```
node server.js
```