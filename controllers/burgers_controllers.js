var express = require("express");

//Import the model (burger.js) to use its database functions 
var burger = require("../models/burger.js");
var router = express.Router();

//Create all routes 
router.get("/", function(req, res) {
    burger.all(function(data) {
        console.log(data)
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.name, req.body.devoured
    ], function(result) {
        //Send id of new burger
        res.json({ id: result.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log("--> ", req.params)
    console.log("--> ", req.body)
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devoured: req.body.devoured
    }, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});





module.exports = router;