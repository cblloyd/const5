
$( document ).ready(function() { 
    
    console.log('ready') 
    $("#yesAge").click(function(){
        $("#agegate").addClass("hidden");
        
    });

    $("#noAge").click(function(){
        location.href = "www.google.com";
    });
    
});




