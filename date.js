exports.getDate = function(){
  
  const today = new Date();

  const options = {
    weekday: "long",
    //year: "numeric",
    month: "long",
    day: "numeric",

  };
    
  return today.toLocaleDateString("en-US", options);
}

module.exports.getDay = function getDay(){
  
  const today = new Date();

  const options = {
    //weekday: "long",
    //year: "numeric",
    //month: "long",
    day: "numeric",

  };
    
  return today.toLocaleDateString("en-US", options);
}
/*
module.exports = getDay;

function getDay(){
  var today = new Date();

  var options = {
    weekday: "long",
    //year: "numeric",
    month: "long",
    day: "numeric",

  };
    
  var day = today.toLocaleDateString("en-US", options);
  return day;
}
*/