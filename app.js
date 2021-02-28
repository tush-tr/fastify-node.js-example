const fastify = require("fastify")({ logger: true });

fastify.get("/",(req,res)=>{
    res.send({name:"Tushar Rajpoot"});
})

fastify.listen(3500);