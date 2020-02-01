const expres = require("express");

const router = express.Router();

//getting the model to use db
const burger=require("../models/burger");


//create routes and logic
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
    burger.all(function(data){
        let burgerOb ={
            bugers: data
        };
        response.json(burgerOb);
    });
});

router.post("/api/burgers", function(req, resp){
    burger.create(
        ["burgerType", "burgerToppings"],
        [request.body.burgerTypes,request.body.burgerToppings],
        function(res){
            response.json({ id: result.insertId });//respond with specific id of burger
        }
    );

});



router.put("/api/burgers/:id", function(req, res){
  let condition = "id = " + request.params.id;

  console.log("condition", condition);
//adding new value
  burger.update(
      {
          devoured: request.body.devoured
      },
      condition,
      function(result){
          if (result.changedRows == 0){
              return response.status(404).end();
          } else {
              response.status(200).end();
          }
      }
  );
});


router.delete(condition, function(res){
    if (result.affectedRows == 0){
        return response.status(404).end();
    }else {
        repsonse.status(200).end();
    };
});




module.exports = router;

