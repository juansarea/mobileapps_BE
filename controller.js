"use strict";

var response = require("./res");
var connection = require("./conn");
// var bodyParser = require('body-parser');

exports.branch = function (req, res) {
  
  connection.query("INSERT INTO T_DATA_CUSTOMER SET ?", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });

  connection.query("SELECT * FROM M_BRANCH", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.product = function (req, res) {
  connection.query("SELECT * FROM M_PRODUCT", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.customer = function (req, res) {
  connection.query(
    "SELECT * FROM T_DATA_CUSTOMER JOIN M_PRODUCT ON T_DATA_CUSTOMER.PRODUCT_ID = M_PRODUCT.PRODUCT_ID JOIN M_BRANCH ON M_BRANCH.BRANCH_ID = T_DATA_CUSTOMER.BRANCH_ID ORDER BY CUST_ID DESC",
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.detailcustomer = function (req, res) {
  let id = req.params.id;
  connection.query(
    `SELECT * FROM T_DATA_CUSTOMER JOIN M_PRODUCT ON T_DATA_CUSTOMER.PRODUCT_ID = M_PRODUCT.PRODUCT_ID JOIN M_BRANCH ON M_BRANCH.BRANCH_ID = T_DATA_CUSTOMER.BRANCH_ID WHERE CUST_ID = ?`,
    id,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.deletecustomer = function (req, res) {
  var id = req.body.id;
  connection.query(
    `DELETE FROM T_DATA_CUSTOMER WHERE CUST_ID = ?;`,
    id,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

exports.savedatacust = function (req, res) {
  var formData = {
    FIRST_NAME: req.body.FIRST_NAME,
    LAST_NAME: req.body.LAST_NAME,
    PHONE_NO: req.body.PHONE_NO,
    BRANCH_ID: req.body.BRANCH_ID,
    PRODUCT_ID: req.body.PRODUCT_ID,
    TENOR_ID: req.body.TENOR_ID,
    AVATAR: req.body.AVATAR,
  };
  connection.query(
    "INSERT INTO T_DATA_CUSTOMER SET ?",
    formData,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        // console.log(formData);
        response.ok(rows, res);
      }
    }
  );
};

exports.updatedatacust = function (req, res) {
  let id = req.params.id;
  var formData = {
    FIRST_NAME: req.body.FIRST_NAME,
    LAST_NAME: req.body.LAST_NAME,
    PHONE_NO: req.body.PHONE_NO,
    BRANCH_ID: req.body.BRANCH_ID,
    PRODUCT_ID: req.body.PRODUCT_ID,
    TENOR_ID: req.body.TENOR_ID,
    AVATAR: req.body.AVATAR,
  };
  connection.query(
    `UPDATE T_DATA_CUSTOMER SET ? WHERE CUST_ID =${id}`,
    formData,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        // console.log(formData);
        response.ok(rows, res);
      }
    }
  );
};

exports.request = function (req, res) {
  let uniq = Math.floor(Math.random() * 10000000);
  var formData = {
    ENDPOINT: req.body.ENDPOINT,
    PARAMETER_IN: req.body.PARAMETER_IN,
    LOG_ID: req.body.LOG_ID,
  };
  connection.query(
    "INSERT INTO T_LOG_APIREQUEST SET ?",
    formData,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        // console.log(formData);
        response.ok(rows, res);
      }
    }
  );
};

exports.response = function (req, res) {
  let uniq = Math.floor(Math.random() * 10000000);
  var formData = {
    ENDPOINT: req.body.ENDPOINT,
    PARAMETER_IN: req.body.PARAMETER_IN,
    LOG_ID: req.body.LOG_ID,
    RESPONSE_CODE: req.body.RESPONSE_CODE,
    RESPONSE_MESSAGE: req.body.RESPONSE_MESSAGE,
  };
  connection.query(
    "INSERT INTO T_APIRESPONSE SET ?",
    formData,
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        // console.log(formData);
        response.ok(rows, res);
      }
    }
  );
};

exports.index = function (req, res) {
  response.ok("Hello from the Node JS RESTful side!", res);
};
