const Customer = require("../models/customerSchema");

const main_index_get = (req, res) => {
  // result ==> array of objects
  console.log("--------------------------------------------")
  Customer.find()
    .then((result) => { 
      res.render("index", {arr: result});
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = {
  main_index_get
};
