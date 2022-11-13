import request from 'supertest'

import {app} from './app.js'


describe("GET /api/v1/employees",()=>{
    describe("Return list of all employees",()=>{
        test("should return 200 status code", async()=>{
            const response=await request(app).get('/')
            expect(response.status).toBe(200)
        })
    })
})

describe("POST /users",()=>{

    describe("given username and password",()=>{
        test("should return 200 status code", async()=>{
            const response=await request(app).post('/users').send({
                username:'zeeshan',
                password:'password123'
            })
            expect(response.status).toBe(200)
        })
        test("should return userID", async()=>{
            const response=await request(app).post('/users').send({
                username:'zeeshan',
                password:'password123'
            })
            expect(response.body.userId).toBe(1)
        })
        
    })
})