//Hanlders must be attached after DOM is fully loaded 


$(function() {
    //click function for devour button
    $(".change-devour").on("click", function(event) {
        event.preventDefault();
        console.log(this)
        var id = $(this).data("id");
        
        //console.log(event)
      

        //Send updated devour state via put request 
        $.ajax(`/api/burgers/${id}`, {
            type: "PUT",
        }).then(
            function() {
                
                
                location.reload();
            }
        );
    });

    $("#bu").change(function(){
        console.log(this)
        console.log($(this).val())
    })
});

$(".create-form").on("submit", function(event) {
    //Have to prevent default on submit event
    event.preventDefault();

 
    var newBurger = {
        name: $("#bu").val().trim()
    };
    console.log("clicked:", newBurger)
    if(newBurger.name === ""){
        alert("please fill the name of the burger")
    }
    else{
    

    //Send burger via POST request
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function(result) {
            console.log(`Created a new burger`);

            //Reload the page to view the newly created burger
            location.reload();
        }
    )
    }
})