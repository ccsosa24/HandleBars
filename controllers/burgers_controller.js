var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function(req, results){
    burger.selectAll(function(data){
        var hbsObject = { burgers: data };
    
        results.render("index", hbsObject);
    });



    // create burger
    router.post("/api/burgers", function(req, results){
        burger.insertOne(req.body.burger_name, req.body.devoured,
            function(resutls) {
                results.json({ id: resutls.insetId});
            }
        );
    });

// chomp chomp
router.post("/api/burgers/:id", function(req, resuts){

    burger.updateOne(req.params.id, function() {
        results.redirect("/");
    });
        
});

});



// ajaxs 

// $(function() {
//     $(".create-form").on("submit", function(event) {
//         event.preventDefault();

//         var chomples = {
//             burger_name: $("Chomples")
//             .val()
//             .trim(),
//             devoured: 0
//         };

//         $.ajax("/api/burger", {
//             type: "POST",
//             data: chomples
//         });
//         then(function(){
//             console.log("Add Your Burger");
//         });
//     });

//         $(".eatDaburger").on("click", function(event){
//             event.preventDefault();

//             var id = $(this).data("id");
//             var eatenBurger = {
//                 devoured: 1
//             };

//             $.ajax("/api/burgers/" + id, {
//                 type: "PUT",
//                 data: eatenBurger
//             })
//             .then(function(){
//                 console.log("Burger Chomped");
//             });
//         });

// });





module.exports = router;

