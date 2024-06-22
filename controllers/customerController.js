const Customer = require("../models/customerSchema");

const customer_view_get = (req, res) => {
  const customerId = req.params.id;
  Customer.findOne({ _id: customerId })
    .then((result) => {
      if (result) {
        res.render("customer/view", { customer: result });
      } else {
        res.status(404).send("Customer not found");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving customer");
    });
};

const customer_add_get = (req, res) => {
  res.render("customer/add");
};

const customer_add_post = (req, res) => {
  const customer = new Customer(req.body);
  customer
    .save()
    .then((newCustomer) => {
      res.redirect(`/customer/view/${newCustomer._id}`);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error creating customer");
    });
};

const customer_edit_get = (req, res) => {
  const customerId = req.params.id;
  Customer.findOne({ _id: customerId })
    .then((result) => {
      if (result) {
        res.render("customer/edit", { customer: result });
      } else {
        res.status(404).send("Customer not found");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error retrieving customer");
    });
};

const customer_edit_post = (req, res) => {
  const customerId = req.params.id;
  Customer.findOneAndUpdate({ _id: customerId }, req.body, { new: true })
    .then((updatedCustomer) => {
      if (updatedCustomer) {
        res.redirect(`/customer/view/${updatedCustomer._id}`);
      } else {
        res.status(404).send("Customer not found");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error updating customer");
    });
};

const customer_delete = (req, res) => {
  const customerId = req.params.id;
  Customer.findOneAndDelete({ _id: customerId })
    .then((result) => {
      if (result) {
        res.redirect("/");
      } else {
        res.status(404).send("Customer not found");
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error deleting customer");
    });
};

module.exports = {
  customer_view_get,
  customer_add_get,
  customer_add_post,
  customer_edit_get,
  customer_edit_post,
  customer_delete,
};
