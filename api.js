fixture `requestapi`
test("the get pet",async (t)=>{
    const result=await t.request({
        url:"https://petstore.swagger.io/v2/pet/findByStatus?status=sold",
        method:"Get"
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})

   
test("the post pet",async (t)=>{
    const result=await t.request({
        url:"https://petstore.swagger.io/v2/pet",
        method:"POST",
       body:{
        "id": 0,
        "category": {
          "id": 0,
          "name": "string"
        },
        "name": "doggie",
        "photoUrls": [
          "string"
        ],
        "tags": [
          {
            "id": 0,
            "name": "string"
          }
        ],
        "status": "available"
       },
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})


////////////////////////////PUT/////////////////////////////
test("the post pet",async (t)=>{
    const result=await t.request({
        url:"https://petstore.swagger.io/v2/pet",
        method:"PUT",
       body:{
        "id": 0,
  "category": {
    "id": 0,
    "name": "string"
  },
  "name": "doggie",
  "photoUrls": [
    "string"
  ],
  "tags": [
    {
      "id": 0,
      "name": "string"
    }
  ],
  "status": "available"
       },
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})









////////////////////////////GET
test("the get pet by id",async (t)=>{
    const result=await t.request({
        url:"https://petstore.swagger.io/v2/pet/9 ",
        method:"Get"
    });
   
    await t.expect(result.status).eql(200);
    await t.expect(result.body.category.name).eql("cats")
    console.log(result.body);
})
/////////////////////////////////POST
test("the post pet by id",async (t)=>{
    const result=await t.request({
        url:"https://petstore.swagger.io/v2/pet/9",
        method:"POST"
    });
   
    await t.expect(result.status).eql(200);
    await t.expect(result.body.message).eql("9")
    console.log(result.body);
})

/////////////////////////////STROE///////////
test("the get store ",async (t)=>{
    const result=await t.request({
        url:"https://petstore.swagger.io/v2/store/order/4",
        method:"GET"
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})










///////////////////////////////////GET inventory
test("the get inventory ",async (t)=>{
    const result=await t.request({
        url:"https://petstore.swagger.io/v2/store/inventory",
        method:"GET"
    });
   
    await t.expect(result.status).eql(200);
    console.log(result.body);
})

/////////////////////////////POST STORE
test("the post store ",async (t)=>{
    const result=await t.request({
        url:"https://petstore.swagger.io/v2/store/order",
        method:"POST",
        body:{
            "id": 0,
            "petId": 0,
            "quantity": 0,
            "shipDate": "2022-09-19T16:52:41.706Z",
            "status": "placed",
            "complete": true
        }
    });
   
    await t.expect(result.status).eql(200);
    await t.expect(result.body.complete).eql(true);
    console.log(result.body);
})

///////////////////////////GET USER
test("the get login ",async (t)=>{
    const result=await t.request({
        url:"https://petstore.swagger.io/v2/user/login?username=mohamed&password=2521997",
        method:"GET"
    });
   
    await t.expect(result.status).eql(200);
    await t.expect(result.body.code).eql(200);
    console.log(result.body);
})
///////////////
test("the get logout ",async (t)=>{
    const result=await t.request({
        url:"https://petstore.swagger.io/v2/user/logout",
        method:"GET"
    });
   
    await t.expect(result.status).eql(200);
    await t.expect(result.body.message).eql("ok");
    console.log(result.body);
})

   