const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js');
//const date = require('./date');
//console.log(date;
//console.log(date());
//console.log(date.getDay());

const app = new express();
const items = ['Essen kaufen','Programmieren','Tanzen'];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) =>{

  //let day = date();
  let day = date.getDate();
  //let day = date.getDay();

  res.render("list", {kindOfDay: day, newListItem: items});

});

app.post("/", (req, res) => {
  const item = req.body.newItem;  // name="newItem"
  //console.log(item);
  items.push(item);
  res.redirect("/");  // damit die liste auf der homeroute aktualisiert wird!
});

/*
app.get("/", function(req, res){
  res.send("Hello");
});
*/

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
