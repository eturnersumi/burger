//Hanlders must be attached after DOM is fully loaded 


$(function() {
    //click function for devour button
    $(".change-devour").on("click", function(event) {
        var id = $(this).data("id");
        var newDevour = $(this).data("newdevour");

        var newDevourState = {
            devoured: newDevour
        };

        //Send updated devour state via put request 
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(
            function() {
                console.log(`Change burger state to ${newDevour}`);
                
                location.reload();
            }
        );
    });
});

$(".create-form").on("submit", function(event) {
    //Have to prevent default on submit event
    event.preventDefault();

    var newBurger = {
        name: $("#bu").val().trim()
    };

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
})