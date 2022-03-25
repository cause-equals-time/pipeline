//var {describe, it} = require('mocha');
let expect = require("chai").expect;
const axios = require('axios');
axios.defaults.baseURL = 'https://4qofk8772j.execute-api.eu-central-1.amazonaws.com/Prod';


describe("CRUD API testing", async () => {
    const input = {id:Date.now(), name:"daniel", age:17};
    describe("PUT item", async () => {
        it("returns the item", async () => {
            const response = await axios.put(`/resource/${input.id}`, input);
            expect(response.status).to.equal(200);
            expect(response.data.id).to.equal(input.id.toString());
            expect(response.data.name).to.equal("daniel");
            expect(response.data.age).to.equal(17);
        });      
    });

    describe("GET item", async () => {
        it("returns the item", async () => {
            const response = await axios.get(`/resource/${input.id}`);
            expect(response.status).to.equal(200);
            expect(response.data.id).to.equal(input.id.toString());
            expect(response.data.name).to.equal("daniel");
            expect(response.data.age).to.equal(17);
        });  
    });
    describe("DELETE item", async () => {
        it("deletes the item", async () => {
            const response = await axios.delete(`/resource/${input.id}`);
            expect(response.status).to.equal(200);
        });  
    });
});

