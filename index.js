const express=require('express');

const app=express();

var path = require('path');
 
app.use(express.static("public"));

 
app.get('/twitter-tab',(req,res)=>{
  res.sendFile(path.join(__dirname + '/twitter-tab.html'));
})
app.listen(process.env.PORT ||8000, () => {
  console.log("sadkljf");
})











 