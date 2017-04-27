var mysql = require("mysql");
var inquirer = require("inquirer");
var http = require("http");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
  runSearch();
});

//setting up server, kinda maybe
var server = http.createServer(handleRequest);

server.listen(PORT, function() {
  console.log("Server listening on: http://localhost:%s", PORT);

});

//this function will prompt users to choose the product
var runSearch = function() {
  inquirer.prompt({
    name: "action",
    type: "rawlist",
    message: "What product would you like to buy?",
    choices: [
      "product 1",
      "product 2",
      "product 3",
      "product 4",
      "product 5",
      "product 6",
      "product 7",
      "product 8",
      "product 9",
      "product 10"
    ]
  }).then(function(answer) {
    switch (answer) {
      case "product 1":
        productOne();
        break;

      case "product 2":
        productTwo();
        break;

      case "product 3":
        productThree();
        break;

      case "product 4":
        productFour();
        break;

      case "product 5":
        productFive();
        break;

      case "product 6":
        productSix();
        break;

      case "product 7":
        productSeven();
        break;

      case "product 8":
        productEight();
        break;

      case "product 9":
        productNine();
        break;

      case "product 10":
        productTen();
        break;
    }
  });
};

//after choosing the desired product, prompts to ask how many
//on repeat for each product

var productOne = function() {
  inquirer.prompt({
    name: "action",
    type: "input",
    message: "How many would you like to buy?"
  }).then(function(answer) {
    var query = "SELECT item_id, stock_quanty FROM Bamazon WHERE ?";
    connection.query(query, { stock_quantity: stock_quantity.artist }, function(err, res) {
      //if what's requested is greater than what's in stock
      if (inquirer.prompt > query) {
        console.log("Insufficient quantity!");
      }
      //if store has enough quantity, subtract from inventory and give total price
      else {
        var stock_quantity = stock_quantity - inquirer.prompt;
        var cost = inquirer.prompt * price;
        console.log(cost);
      }
      runSearch();
    });
  });
};

var productTwo = function() {
  inquirer.prompt({
    name: "action",
    type: "input",
    message: "How many would you like to buy?"
  }).then(function(answer) {
    var query = "SELECT item_id, stock_quanty FROM Bamazon WHERE ?";
    connection.query(query, { stock_quantity: stock_quantity.artist }, function(err, res) {
      if (inquirer.prompt > query) {
        console.log("Insufficient quantity!");
      }
      else {
        var stock_quantity = stock_quantity - inquirer.prompt;
        var cost = inquirer.prompt * price;
        console.log(cost);
      }
      runSearch();
    });
  });
};

var productThree = function() {
  inquirer.prompt({
    name: "action",
    type: "input",
    message: "How many would you like to buy?"
  }).then(function(answer) {
    var query = "SELECT item_id, stock_quanty FROM Bamazon WHERE ?";
    connection.query(query, { stock_quantity: stock_quantity.artist }, function(err, res) {
      if (inquirer.prompt > query) {
        console.log("Insufficient quantity!");
      }
      else {
        var stock_quantity = stock_quantity - inquirer.prompt;
        var cost = inquirer.prompt * price;
        console.log(cost);
      }
      runSearch();
    });
  });
};

var productFour = function() {
  inquirer.prompt({
    name: "action",
    type: "input",
    message: "How many would you like to buy?"
  }).then(function(answer) {
    var query = "SELECT item_id, stock_quanty FROM Bamazon WHERE ?";
    connection.query(query, { stock_quantity: stock_quantity.artist }, function(err, res) {
      if (inquirer.prompt > query) {
        console.log("Insufficient quantity!");
      }
      else {
        var stock_quantity = stock_quantity - inquirer.prompt;
        var cost = inquirer.prompt * price;
        console.log(cost);
      }
      runSearch();
    });
  });
};

var productFive = function() {
  inquirer.prompt({
    name: "action",
    type: "input",
    message: "How many would you like to buy?"
  }).then(function(answer) {
    var query = "SELECT item_id, stock_quanty FROM Bamazon WHERE ?";
    connection.query(query, { stock_quantity: stock_quantity.artist }, function(err, res) {
      if (inquirer.prompt > query) {
        console.log("Insufficient quantity!");
      }
      else {
        var stock_quantity = stock_quantity - inquirer.prompt;
        var cost = inquirer.prompt * price;
        console.log(cost);
      }
      runSearch();
    });
  });
};

var productSix = function() {
  inquirer.prompt({
    name: "action",
    type: "input",
    message: "How many would you like to buy?"
  }).then(function(answer) {
    var query = "SELECT item_id, stock_quanty FROM Bamazon WHERE ?";
    connection.query(query, { stock_quantity: stock_quantity.artist }, function(err, res) {
      if (inquirer.prompt > query) {
        console.log("Insufficient quantity!");
      }
      else {
        var stock_quantity = stock_quantity - inquirer.prompt;
        var cost = inquirer.prompt * price;
        console.log(cost);
      }
      runSearch();
    });
  });
};

var productSeven = function() {
  inquirer.prompt({
    name: "action",
    type: "input",
    message: "How many would you like to buy?"
  }).then(function(answer) {
    var query = "SELECT item_id, stock_quanty FROM Bamazon WHERE ?";
    connection.query(query, { stock_quantity: stock_quantity.artist }, function(err, res) {
      if (inquirer.prompt > query) {
        console.log("Insufficient quantity!");
      }
      else {
        var stock_quantity = stock_quantity - inquirer.prompt;
        var cost = inquirer.prompt * price;
        console.log(cost);
      }
      runSearch();
    });
  });
};

var productEight = function() {
  inquirer.prompt({
    name: "action",
    type: "input",
    message: "How many would you like to buy?"
  }).then(function(answer) {
    var query = "SELECT item_id, stock_quanty FROM Bamazon WHERE ?";
    connection.query(query, { stock_quantity: stock_quantity.artist }, function(err, res) {
      if (inquirer.prompt > query) {
        console.log("Insufficient quantity!");
      }
      else {
        var stock_quantity = stock_quantity - inquirer.prompt;
        var cost = inquirer.prompt * price;
        console.log(cost);
      }
      runSearch();
    });
  });
};

var productNine = function() {
  inquirer.prompt({
    name: "action",
    type: "input",
    message: "How many would you like to buy?"
  }).then(function(answer) {
    var query = "SELECT item_id, stock_quanty FROM Bamazon WHERE ?";
    connection.query(query, { stock_quantity: stock_quantity.artist }, function(err, res) {
      if (inquirer.prompt > query) {
        console.log("Insufficient quantity!");
      }
      else {
        var stock_quantity = stock_quantity - inquirer.prompt;
        var cost = inquirer.prompt * price;
        console.log(cost);
      }
      runSearch();
    });
  });
};

var productTen = function() {
  inquirer.prompt({
    name: "action",
    type: "input",
    message: "How many would you like to buy?"
  }).then(function(answer) {
    var query = "SELECT item_id, stock_quanty FROM Bamazon WHERE ?";
    connection.query(query, { stock_quantity: stock_quantity.artist }, function(err, res) {
      if (inquirer.prompt > query) {
        console.log("Insufficient quantity!");
      }
      else {
        var stock_quantity = stock_quantity - inquirer.prompt;
        var cost = inquirer.prompt * price;
        console.log(cost);
      }
      runSearch(); //
    });
  });
};