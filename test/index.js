var {describe, it} = require('mocha');
let expect = require("chai").expect;
const axios = require('axios');
axios.defaults.baseURL = 'https://4qofk8772j.execute-api.eu-central-1.amazonaws.com/Prod';

/* async function dostuff(){
    const input = {name:"daniel", age:17};
    try{
    const item = (await axios.put(`/resource/${Date.now()}`, input));
    console.log(item);
    }
    catch (e){
        console.log(e);
    }
}
dostuff(); */

async function run(){
    const input = {name:"daniel", age:17};
    const item = (await axios.put(`/resource/${Date.now()}`, input)).data;
    console.log(item);
}
run();
describe("CRUD API testing", function() {

    describe("PUT item", function() {
        it("returns the item", async function() {
            const input = {name:"daniel", age:17};
            const item = (await axios.put(`/resource/${Date.now()}`, input)).data;
            console.log(item);
            expect(item.name).to.equal("daniel");
        });      
    });

    describe("GET item", function() {
    // specification for HEX to RGB converter
    });
    describe("DELETE item", function() {
        // specification for HEX to RGB converter
    });
});

