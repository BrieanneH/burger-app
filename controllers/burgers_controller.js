const expres = require("express");

const router = express.Router();

//getting the model to use db
const burger=require("../models/burger");

router.get("/", function(req, res) {
    burger.all(function(data){
        let burgerOb = {
            burgers: data
        };
        console.log(burgerOb);
        Response.render("index", burgerOb);
    });
});

router.get("/api/burgers", function(req,res) {
    burger.all
})

router.post



router.put


router.delete





module.exports = router;

