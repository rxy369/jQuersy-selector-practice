var reds = $("#reds");
var blues = $("#blues");
var list = $("li");
var head3 = $("h3");

reds[0].addEventListener("click", function(){
  list.css(style = {
    color: "red",
    backgroundColor: "pink",
    fontWeight: "bold"
  });
});

blues[0].addEventListener("click", function(){
  list.css(style = {
    color: "blue",
    backgroundColor: "gray",
    fontWeight: "normal"
  });
});
