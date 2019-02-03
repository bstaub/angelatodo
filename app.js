const express = require("express");
const bodyParser = require("body-parser");

const app = new express();
var items = ['Essen kaufen','Programmieren','Tanzen'];

app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) =>{
  var today = new Date(Date.UTC(2012, 11, 20, 3, 0, 0));

  var options = {
    weekday: "long",
    //year: "numeric",
    month: "long",
    day: "numeric",

  };
    
  // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
  var day = today.toLocaleDateString("en-US", options);

  res.render("list", {kindOfDay: day, newListItem: items});

});

app.post("/", (req, res) => {
  var item = req.body.newItem;  // name="newItem"
  console.log(item);
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
