const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js');
//const date = require('./date');
//console.log(date;
//console.log(date());
//console.log(date.getDay());

const app = new express();
const items = ['Essen kaufen','Programmieren','Tanzen'];
const workItems = [];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) =>{

  //let day = date();
  let day = date.getDate();
  //let day = date.getDay();

  res.render("list", {listTitle: day, newListItem: items});

});

app.post("/", (req, res) => {
  //console.log(1,req.body);
  const item = req.body.newItem;  // name="newItem"
  
  if(req.body.list === 'Work'){
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");  // damit die liste auf der homeroute aktualisiert wird!
  }
});

app.get('/work', (req, res) => {
  res.render('list', {listTitle: 'Work List', newListItem: workItems});
});

app.post("/work", (req, res) => {
  const item = req.body.newItem;
  workItems.push(item);
  res.redirect("/work");
});

app.get('/ueberuns', (req, res) => {
  res.render('about', {listTitle: 'Über Uns'});
});

/*
app.get("/", function(req, res){
  res.send("Hello");
});
*/

app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
