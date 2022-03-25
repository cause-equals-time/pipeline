const axios = require('axios');
axios.defaults.baseURL = 'https://4qofk8772j.execute-api.eu-central-1.amazonaws.com/Prod';

async function dostuff(){
    const input = {name:"daniel", age:17};
    try{
    const item = (await axios.put(`/resource/${Date.now()}`, input));
    console.log(item);
    }
    catch (e){
        console.log(e);
    }
}
dostuff();