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
        console.log("BELOW IS REQ BODY BGNAME")
        console.log(req.body)
        burger.insertOne(req.body.burger_name, function() {

                results.json({ id: results.insetId});
            }
        );
    });

// chomp chomp
router.put("/api/burgers/:id", function(req, results){
        console.log(results)
    burger.updateOne(req.params.id, function() {
        results.redirect("/");
    });
        
});

});






module.exports = router;

