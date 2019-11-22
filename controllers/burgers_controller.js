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






module.exports = router;

