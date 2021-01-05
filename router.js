const { log } = require('console');
const express = require('express')
const app = express();

const users = [
    {
        "id": 1,
        "firstName": "mohsen",
        "lastName": "zanganeh",
        "age": "19",
        "username": "mohsen80",
        "password": "123"
    },
    {
        "id": 2,
        "firstName": "ali",
        "lastName": "zanganeh",
        "age": "26",
        "username": "Ali26",
        "password": "123"
    }
]
/**
* @swagger
* paths:
*  /users:
*    get:
*      tags: ['user']
*      summary: دریافت لیست کاربران
*      description: Optional extended description in CommonMark or HTML.
*      responses:
*        '200':    # status code
*          description: A JSON array of user names
*          content:
*            application/json:
*              schema: 
*                type: array
*                items: 
*                  type: string
* 
*/
app.get('/users', function (req, res) {
    res.send({ data: users })
});

/**
* @swagger
* paths:
*  /users:
*    post:
*      tags: ['user']
*      summary: ثبت کاربر
*      description: Optional extended description in CommonMark or HTML.
*      consumes:
*        - application/json
*      requestBody:
*         content:
*             application/json:
*                 schema:
*                  type: object
*                  properties:
*                      firstName:
*                          type: string
*                      lastName:
*                          type: string
*                      age:
*                          type: string
*                      username:
*                          type: string
*                      password:
*                          type: string
*                  required:
*                      - password
*                      - username
*      responses:
*        '200':    # status code
*          description: A JSON array of user names
* 
*/
app.post('/users', function (req, res) {

    let id = Math.max.apply(Math, users.map(function (item) { return item.id; }))

    users.push({ ...req.body, id: id + 1 });

    res.send({ status: 'SUCCESS', data: { ...req.body, id: id + 1 } })
});

/**
* @swagger
* paths:
*  /users/{userId}:
*    patch:
*      tags: ['user']
*      summary: ویرایش کاربر
*      description: Optional extended description in CommonMark or HTML.
*      consumes:
*        - application/json
*      parameters:
*        - name: userId
*          in: path
*          required: true
*          type: number
*      requestBody:
*         content:
*             application/json:
*                 schema:
*                  type: object
*                  properties:
*                      firstName:
*                          type: string
*                      lastName:
*                          type: string
*                      age:
*                          type: string
*                      username:
*                          type: string
*                      password:
*                          type: string
*                  required:
*                      - password
*                      - username
*      responses:
*        '200':    # status code
*          description: A JSON array of user names
* 
*/
app.patch('/users/:userId', function (req, res) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == req.params.userId) {
            users[i] = req.body;
            user = users[i];
        }
    }

    res.send({ status: 'SUCCESS', data: user })
});


/**
* @swagger
*  /users/{userId}:
*    delete:
*      tags: ['user']
*      summary: حذف کاربر
*      description: Optional extended description in CommonMark or HTML.
*      consumes:
*        - application/json
*      parameters:
*        - name: userId
*          in: path
*          required: true
*          type: number
*      responses:
*        '200':    # status code
*          description: A JSON array of user names
* 
*/
app.delete('/users/:userId', function (req, res) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].id == req.params.userId) {
            delete users[i]
            user = users[i];
        }
    }
    res.send({status:'SUCCESS FULLY'})
});

module.exports = app