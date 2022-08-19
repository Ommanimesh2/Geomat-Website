const express=require('express');

const app=express();

var path = require('path');
 
app.use(express.static("assets"));




app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});
 
app.get('/twitter-tab',(req,res)=>{
  res.sendFile(path.join(__dirname + '/twitter-tab.html'));
})
app.listen(process.env.PORT ||8080, () => {
  console.log(`${process.env.PORT} `);
})











 