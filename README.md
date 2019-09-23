#Todo Tasks REST-API

##How to

###RUN YOUR TERMINAL

* Clone this repository
```sh
git clone https://github.com/thatguyarsya/express-project

npm install

###Run your server
npm run start

###Open this API using Postman

http://localhost:4000/tasks

to get all current tasks


http://localhost:4000/tasks

to get all current tasks

POST to
http://localhost:4000/tasks

 to create task:
 key: name
 value: contents of task

or
{
    "name": "content of task"
}

API ENDPOINTS
HTTP Routes Description
GET / ...
Get /tasks get all tasks
POST /tasks create a task