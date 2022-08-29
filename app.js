import express, {json} from "express";
import cors from "cors";

const server = express();

server.use(cors());
server.use(json());

const usuarios = []; //username, avatar
const tweets = []; //username, tweet

server.post("/sign-up", (req, res) =>{
    usuarios.push(req.body);
res.send("OK");

});

server.post("/tweets", (req, res) =>{
   const {username, tweet} = req.body;
   
   const {avatar} = usuarios.find(user => user.username === username)
    tweets.unshift({username, tweet, avatar});
    
    res.send("OK");
});

server.get("/tweets", (req, res) =>{
if(tweets.length <= 10){
    return res.send(tweets);
}else {
    res.send([...tweets].splice(0,10));
}


});


server.listen(5000, () => {
    console.log("Servidor funcionando!")
})