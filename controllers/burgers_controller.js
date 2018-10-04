//bring in dependencies
var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


//Routes and rendering
////////////////////////////////////////////////

//get route for home
router.get("/", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);

        //render items here
        res.render("index", hbsObject);
    });
});

//update the burger status to devoured
router.put("/api/burgers/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log('req: ' + req.body.eaten);
    var newValue = req.body.eaten;
   
   burger.update(condition, newValue, function (result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });

});

//create a new burger and add it to the ready to be eaten list
router.post("/api/burgers", function(req, res) {
    var burgerName = req.body.name;

    burger.create(burgerName, function (result) {
        res.json({id: result.insertId});
    })
});

//Export routes for server.js
module.exports = router;