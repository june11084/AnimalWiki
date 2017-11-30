$(document).ready(function() {
  $(".btn").click(function(){

  var animal = $("input:radio[name=flavor]:checked").val();

    if(animal === "dog"){
    $("#dog").show();
    $("#turtle").hide();
    $("#toucan").hide();
    };
    if(animal === "turtle"){
    $("#turtle").show();
    $("#dog").hide();
    $("#toucan").hide();
    };
    if(animal === "toucan"){
    $("#toucan").show();
    $("#dog").hide();
    $("#turtle").hide();
    };
  });
});
