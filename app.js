//jshint esversion:6
const express=require("express");
const bodyparser=require("body-parser");
const app=express();

let items=["Buy Food","Cook Food","Eat Food"];
let workItems=[];
app.set('view engine', 'ejs');
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
let today = new Date();
let options={
  weekday: "long",
  day: "numeric",
  month: "long"
};

let day=today.toLocaleDateString("en-US",options);

res.render("list",{
  listTitle: day, item:items
});
});


app.post("/",function(req,res){

  let item=req.body.newitem;
  if(req.body.list==="Work"){
    workItems.push(item);
    res.redirect("/work");
  }
  else{
    items.push(item);
    res.redirect("/");
  }

});

app.get("/work",function(req,res){
  res.render("list",{listTitle:"Work List",item:workItems });
});




app.listen(3000,function(){
  console.log("server is on port 3000");
});
