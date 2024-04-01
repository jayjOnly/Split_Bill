const {app} = require('./app')
const request = require("supertest")

describe("is the data send>", () => {
    describe("get the data", () => {
        test("",  async () => {
            const res = await request(app).get("/activityhistory")
            expect(res.statusCode).toBe(200)
        })
    })

    describe("dont get anything", () => {
        
    })
})