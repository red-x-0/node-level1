const express = require('express');
const router = express.Router();
const { customer_view_get, customer_add_get, customer_add_post, customer_edit_get, customer_edit_post, customer_delete } = require("../controllers/customerController.js")
// PATH '/customer'

/**
* @route /view/:id
* @method GET
* @access public
*/
router.get("/view/:id", customer_view_get);

/**
* @route /add
* @method GET
* @access public
*/
router.get("/add", customer_add_get);

/**
* @route /add
* @method POST
* @access public
*/
router.post("/add", customer_add_post);

/**
* @route /edit/:id
* @method GET
* @access public
*/
router.get("/edit/:id", customer_edit_get);

/**
* @route /edit
* @method POST
* @access public
*/
router.post("/edit/:id", customer_edit_post);

/**
* @route /delete/:id
* @method DELETE
* @access public
*/

router.delete("/delete/:id", customer_delete);


module.exports = router;