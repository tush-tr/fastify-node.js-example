const fastify = require("fastify");
const fmongo = require("fastify-mongodb");
const app = fastify();
const data = require("./data.json")

// TODO: Connect to mongoDB
// app.register(fmongo, {
//   forceClose: true,
//   url: 'mongodb://mongo/mydb'
// })


app.get("/",(req,res)=>{
    res.send(data);
})

app.get("/donut",(req,res)=>{
    res.send(data[0])
})

app.get("/donut/topping",(req,res)=>{
    res.send(data[0].topping)
})


app.listen(3500,()=>{
    console.log("Server is running")
});  