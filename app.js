const fastify = require("fastify");
const fmongo = require("fastify-mongodb");
const app = fastify();


// TODO: Connect to mongoDB
app.register(fmongo, {
  forceClose: true,
  url: 'mongodb://mongo/mydb'
})



app.get("/",(req,res)=>{
    res.send({name:"Tushar Rajpoot"});
})







app.listen(3500,()=>{
    console.log("Server is running")
});  