var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,

  user: 'root',

  password: 'root',
  database: 'bamazon_db'
});



function initialpromptUser() {

  inquirer
    .prompt([
    {
      type: 'input',
      name: 'item_id',
      message: 'Enter the ID number that you would like to purchase.',   
    },
    {
      type: 'input',
      name: 'quantity',
      message: 'How many do you need?',  
    }
  ]).then(function(input) {

    var item = input.item_id;
    var quantity = input.quantity;


    var dbquery = 'SELECT * FROM products WHERE ?';


    connection.query(dbquery, {item_id: item}, function(err, data) {
      if (err) throw err;

      if (data.length === 0) {
        console.log('Enter a valid ID number 1-10.');
        queryDB();

      } else {
        var productData = data[0];
        console.log('\n');

        if (quantity <= productData.stock_quantity) {
          console.log('This item is in stock, your item is being placed.');
          var updateDB = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

          connection.query(updateDB, function(err, data) {
            if (err) throw err;

            console.log('Your order has been placed! Your total is $' + productData.price * quantity);

            connection.end();
          })
        } else {

          console.log('Sorry we do not have the quntity in stock.');
          console.log('Please try a new quantity!.');

          queryDB();
          console.log('\n');
        }
      }
    })
  })
}


function queryDB() {

  console.log('\n');
  queryproducts = 'SELECT * FROM products';

  connection.query(queryproducts, function(err, data) {
    if (err) throw err;

    var table = '';
    for (var i = 0; i < data.length; i++) {
     table = '';

      table += 'Item ID: ' + data[i].item_id + ' | ';

      table += 'Product Name: ' + data[i].product_name + ' | ';

      table += 'Department Name: ' + data[i].department_name + ' | ';

      table += 'Price: $' + data[i].price + '\n';

      console.log(table);
    }
      initialpromptUser();
  })
}

queryDB();