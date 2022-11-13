const request =require('supertest')

const {app,connectToDB} =require("./app.js")



describe("GET /api/v1/employees",()=>{
    beforeAll(() => {
        //jest.setTimeout(90 * 1000)
        connectToDB();
    });
    describe("given nothing",()=>{
        //afterEach(() => jest.setTimeout(90 * 1000))
        test("should return 200 status code", async()=>{
            const response=await request(app).get('/api/v1/employees/')
            expect(response.status).toBe(200)
        })
    })
    
    describe("given employeeId",()=>{
        //beforeAll(() => jest.setTimeout(90 * 1000))
        test("should return 200 status code", async()=>{
            //id of HR
            const response=await request(app).get('/api/v1/employees/634efa2747cb968eb564ed2c')
            expect(response.status).toBe(200)
        })
        test("should return employee information we will just check the username", async()=>{
            const response=await request(app).get('/api/v1/employees/634efa2747cb968eb564ed2c')

            expect(response.body.employee.username).toBe("zeeshan@HR")
        })
        
    })
})

describe("POST /api/v1/employees",()=>{
    describe("given all employee info it creates employee in db ",()=>{
        test("should return 200 status code", async()=>{
            const emp={    
                fullName:"Zeeshan Ali Ful",
                email:"asdfg@gmail.com",
                mobile:"03420555086",
                city:"Lahore",
                gender:"Male",
                hireDate:"2022-11-06T12:37:11.237Z",
                isPermanent:false,
                type:"Nurse",
                password:"1234567"
            }
            
            const response=await request(app).post('/api/v1/employees/').send(emp)
            expect(response.status).toBe(201)
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






























