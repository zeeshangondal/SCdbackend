import request from 'supertest'

import app  from "./app.js"



describe("GET /api/v1/employees",()=>{
    describe("given nothing",()=>{
        test("should return 200 status code", async()=>{
            const response=await request(app).get('/api/v1/employees')
            expect(response.status).toBe(200)
        })
    })
    describe("given employeeId",()=>{
        test("should return 200 status code", async()=>{
            //id of HR
            const response=await request(app).get('/api/v1/employees/634efa2747cb968eb564ed2c')
            expect(response.status).toBe(200)
        })
        test("should return employee information we will just check the username", async()=>{
            const response=await request(app).get('/api/v1/employees/634efa2747cb968eb564ed2c')

            expect(response.employee.username).toBe("zeeshan@HR")
        })
        
    })
})

describe("POST /api/v1/employees",()=>{
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




























// const request=require("supertest")

// const app=require("./app")


// describe("GET /",()=>{
//     describe("given nothing",()=>{
//         test("should return 200 status code", async()=>{
//             const response=await request(app).get('/')
//             expect(response.status).toBe(200)
//         })
//     })
// })

// describe("POST /users",()=>{

//     describe("given username and password",()=>{
//         test("should return 200 status code", async()=>{
//             const response=await request(app).post('/users').send({
//                 username:'zeeshan',
//                 password:'password123'
//             })
//             expect(response.status).toBe(200)
//         })
//         test("should return userID", async()=>{
//             const response=await request(app).post('/users').send({
//                 username:'zeeshan',
//                 password:'password123'
//             })
//             expect(response.body.userId).toBe(1)
//         })
        
//     })
//})






























