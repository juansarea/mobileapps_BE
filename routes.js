"use strict";

module.exports = function (app) {
  var todoList = require("./controller");

  app.route("/").get(todoList.index);

  app.route("/GetMasterBranch").get(todoList.branch);

  app.route("/GetMasterProduct").get(todoList.product);

  app.route("/GetAllDataCust").get(todoList.customer);

  app.route("/GetDataCustomer/:id").get(todoList.detailcustomer);

  app.route("/UpdateDataCust/:id").post(todoList.updatedatacust);

  app.route("/DeleteDataCust").post(todoList.deletecustomer, FormData);

  app.route("/SaveDataCust").post(todoList.savedatacust);

  app.route("/logRequest").post(todoList.request); 
  app.route("/logResponse").post(todoList.response); 
};
